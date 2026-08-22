// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import {
  CollectionUtilities,
  Component,
  ComponentMetadata,
  Constructor,
  GVK,
  ICompileListener,
  isValidator,
  KubeContext,
  KubeResource,
  IProject,
  Result,
  ITarget,
  Target,
  TargetParams,
  TargetResolveParams,
  TargetType,
  ValidationError,
  ValidationErrorLevel,
} from '@glassway/architect';

import * as toolkit from '@es-toolkit/es-toolkit';
import * as api from '@glassway/kubernetes-models';
import * as logtape from '@logtape/logtape';
import * as _client from '@kubernetes/client-node';
import * as yaml from '@std/yaml';

import { KubeComponentModel, KubePreludeComponent } from '../component.ts';
import { CrdsComponent } from '../components/index.ts';
import { KubeWriter } from '../writer.ts';
import { K8S_PLUGIN_CLASS, K8sPlugin, K8sPluginProps } from '../plugin.ts';
import { KubeCRDDependencyGraph } from '../crds/graph.ts';
import { NamespaceDefaults, NamespaceRef } from '../types/scn.ts';
import { KubeResourceUtilities, TargetApplyParams, TargetFake } from '@glassway/architect';
import { getFakeState, getFakeTarget } from './fake.ts';
import { KubeTargetIntrospection } from './intro.ts';
import { GitOpsHelpers } from '../gitops/helpers.ts';
import { GitOpsController } from '../gitops/base.ts';
import { GitOpsComponent } from '../components/gitops.ts';
import { KubeBuildContext } from './context.ts';
import { KubeTargetEncryption } from './encryption.ts';

interface NamespaceSpec {
  name?: string;
  annotations?: Record<string, string>;
  labels?: Record<string, string>;
}

export interface KubeTargetParams extends TargetParams {}

export interface IKubeTarget extends ITarget {
  get params(): KubeTargetParams;
  get cluster(): K8sPluginProps;
  get plugin(): K8sPlugin;
  get gitops(): GitOpsController | undefined;
  get encryption(): KubeTargetEncryption;

  defaultContext<T extends Component>(
    token: Constructor<T>,
    context?: Partial<KubeContext>,
    force?: boolean,
  ): Partial<KubeContext>;

  /**
   * Installs the CRD specified by the GVK, or just marks it as installed.
   * @param gvk The GVK to install the CRD by
   * @param mark Just mark the CRD as present in the cluster, and don't install it
   */
  enableCRD(gvk: GVK, mark?: boolean): void;

  /**
   * Installs the CRDs specified by the group, or just marks them as installed.
   * @param group The group(s) of CRDs to install from the shared repository
   * @param subgroups Whether to add a wildcard rule to match subgroups
   * @param mark Just mark the CRDs as present in the cluster, and don't install them
   */
  enableCRDGroup(
    group: string,
    subgroups?: boolean,
    mark?: boolean,
  ): void;

  /**
   * Creates a new namespace and returns it
   */
  createNamespace(ns?: NamespaceSpec): api.v1.Namespace;

  getConfig(): _client.KubeConfig;
  getClient(): _client.KubernetesObjectApi;
  getIntrospection(): KubeTargetIntrospection;
}

/**
 * Version of {Target} that provides build constructs for a specific Kubernetes cluster.
 */
export class KubeTarget extends Target implements IKubeTarget {
  declare protected readonly _params: KubeTargetParams;
  protected readonly _encryption: KubeTargetEncryption;
  protected _gitops: GitOpsController | undefined;
  public client: _client.KubernetesObjectApi | undefined;

  protected readonly logger: logtape.Logger;
  protected introspection: KubeTargetIntrospection | undefined;
  private readonly markedCRDGVKs: GVK[] = [];
  private readonly markedCRDGroups: string[] = [];

  constructor(
    model: TargetType,
    params: KubeTargetParams = {},
    project: IProject,
  ) {
    const defaults = {
      plugins: {
        kubernetes: {
          ns: {
            features: {
              name: NamespaceDefaults.features
            },
            operators: {
              name: NamespaceDefaults.operators
            },
            services: {
              name: NamespaceDefaults.services
            }
          }
        }
      }
    } as Partial<TargetType['spec']>;

    model.spec = CollectionUtilities.recursiveMerge(defaults, model.spec);
    super(model, params, project);

    this.logger = logtape.getLogger(['architect', 'target', this.model.metadata.name!]);
    this._encryption = new KubeTargetEncryption(this.model, this.params, this.logger);
    this.enable(KubePreludeComponent);
    this.enable(CrdsComponent);
    if (this.gitops)
      this.enable(GitOpsComponent);

    this.createDefaultResources();
  }

  public override get params(): KubeTargetParams {
    return this._params;
  }

  public get cluster(): K8sPluginProps {
    return this.model.spec.plugins!.kubernetes!;
  }

  public get plugin(): K8sPlugin {
    return this.app.pluginRegistry.get(K8S_PLUGIN_CLASS) as K8sPlugin;
  }

  private get prelude(): KubePreludeComponent {
    return this.component(KubePreludeComponent)!;
  }

  public get gitops(): GitOpsController | undefined {
    if (!this._gitops) this._gitops = GitOpsHelpers.resolve(this);
    return this._gitops;
  }

  public get encryption(): KubeTargetEncryption {
    return this._encryption;
  }

  public static fake(): TargetFake {
    return {
      model: getFakeTarget(),
      state: getFakeState()
    }
  }

  public override defaultContext<T extends Component>(
    token: Constructor<T>,
    context?: Partial<KubeContext>,
    force?: boolean,
  ): Partial<KubeContext> {
    context = super.defaultContext(token, context, force);
    if (context.namespace && !force) return context;

    const replacements: Record<string, string> = {};
    for (const [k, v] of Object.entries(NamespaceRef)) {
      // @ts-ignore: dynamic lookup of namespace ref
      replacements[v] = this.cluster.ns![k].name!;
    }

    if (!context.namespace || force) {
      const meta = ComponentMetadata.from<KubeComponentModel>(token);

      if (meta.model?.context?.namespace) {
        context.namespace = meta.model.context.namespace;
        for (const [k, v] of Object.entries(replacements)) {
          context.namespace = context.namespace!.replace(k, v);
        }
      } else if (!context.namespace) {
        context.namespace = 'default';
      }
    }

    return context;
  }

  public enableCRD(gvk: GVK, mark: boolean = false) {
    if (mark === true) {
      this.markedCRDGVKs.push(gvk);
    } else {
      this.component(CrdsComponent)!.enableGVK(gvk);
    }
  }

  public enableCRDGroup(
    group: string,
    subgroups: boolean = true,
    mark: boolean = false,
  ) {
    if (mark === true) {
      this.markedCRDGroups.push(group);
    } else {
      this.component(CrdsComponent)!.enableGroup(group);
    }

    if (subgroups) this.enableCRDGroup(`*.${group}`, false, mark);
  }

  public createNamespace(ns: NamespaceSpec): api.v1.Namespace {
    const namespace = new api.v1.Namespace({
      metadata: {
        name: ns.name,
        annotations: {
          // TODO: only if flux
          'kustomize.toolkit.fluxcd.io/prune': 'disabled',
          ...(ns.annotations ?? {})
        },
        labels: {
          ...(ns.labels ?? {})
        }
      },
    });

    this.prelude.push(namespace);
    return namespace;
  }

  public override async compile(
    params?: TargetResolveParams,
    logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<Result | undefined> {
    const result = await super.compile(params, logger, listener);
    if (!result) return result;

    const secrets = await this.encryption.getClusterSecrets();
    result.writer = new KubeWriter(secrets);

    // TODO: handle objects, too
    if (params?.validate !== false && Array.isArray(result.all)) {
      for (const item of result.all) {
        const resource = item as KubeResource
        // TODO: stupid hack - don't validate CRDs now because we can't validate additionalProperties
        // i.e. operatorcommands.kubescape.io: data/spec/versions/0/schema/openAPIV3Schema/properties/spec/properties/args/additionalProperties must be object
        if (resource.kind === 'CustomResourceDefinition') continue;
        if (!isValidator(item)) continue;

        try {
          await item.validate();
        } catch (e) {
          if (e instanceof Error) {
            result.graph.addErrors(
              new ValidationError(
                e.message,
                ValidationErrorLevel.ERROR,
                `${resource.kind} ${resource.metadata?.namespace}/${resource.metadata?.name}`,
              ),
            );
          }
        }
      }
    }

    const crdGraph = KubeCRDDependencyGraph.create(result, {
      ignoredGVKs: this.markedCRDGVKs,
      ignoredCRDGroups: this.markedCRDGroups,
    });

    if (params?.requirements !== false) crdGraph.validate();
    crdGraph.applyDependencies();

    return result;
  }

  protected async applyResources(
    resources: KubeResource[],
    client: _client.KubernetesObjectApi,
    params?: TargetApplyParams,
    logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<void> {
    await Promise.all(resources.map(async (r) => {
      const resourceName = KubeResourceUtilities.resourceName(r);
      listener?.setStatus(resourceName ?? r.toString());

      // hate this serdes but https://github.com/kubernetes-client/javascript/issues/2483 breaks it otherwise
      const data = yaml.stringify(r, {
        skipInvalid: true,
        lineWidth: -1
      });
      const parsed = _client.loadYaml(data) as _client.KubernetesObject;

      try {
        await client.patch(
          parsed,
          undefined,
          params?.dryRun ? "All" : undefined,
          "architect.glassway.net", // field manager
          params?.force,
          "application/apply-patch+yaml" // SSA
        );
      } catch (e) {
        if (e instanceof _client.ApiException) {
          let message = toolkit.trim(e.body, "\n");
          try {
            const obj = JSON.parse(e.body);
            message = obj["message"]
          } catch (_e) {
            // not valid json
          }

          logger?.error(`${resourceName}: ${params?.dryRun ? 'dry-run' : 'apply'} failed: ${message}`);
        } else {
          logger?.error(`${resourceName}: ${e}`);
        }
      }

      listener?.onResourceEnd();
    }));
  }

  public override async apply(
    result: Result,
    params?: TargetApplyParams,
    logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<void> {
    await super.apply(result, params, logger, listener);

    // TODO: gitops components should be filtered to bootstrap resources only
    if (this.gitops && (!params?.direct || params?.bootstrap))
      return this.gitops.apply(result, params, logger, listener);

    // filter resources by the component selector
    let resources = result.filtered(name =>
      !params?.components || params.components.includes(name)
    ) as KubeResource[];

    // in bootstrap mode, only apply resources marked with the bootstrap tag
    if (params?.bootstrap) {
      resources = resources.filter(r =>
        'architect.glassway.net/bootstrap' in (r.metadata?.annotations ?? {})
      );
    }

    // namespaces and CRDs must be applied first
    listener?.setTotal(resources.length);
    const client = this.getClient();
    const isFirst = (r: KubeResource) => r.kind === "Namespace" || r.kind === "CustomResourceDefinition";
    const namespaces = resources.filter(isFirst);
    await this.applyResources(namespaces, client, params, logger, listener);

    const everything = resources.filter((r) => !isFirst(r));
    await this.applyResources(everything, client, params, logger, listener);
  }

  private createDefaultResources() {
    this.createNamespace(this.cluster.ns?.features ?? {});
    this.createNamespace(this.cluster.ns?.operators ?? {});
    this.createNamespace(this.cluster.ns?.services ?? {});
  }

  public getConfig(): _client.KubeConfig {
    const config = new _client.KubeConfig();
    config.mergeConfig(this.plugin.getKubeConfig());
    config.getClusters();

    let context = this.cluster.client?.context;

    // if context is unset, attempt to find context by dns address
    if (!context) {
      // GitLab has a special way of setting the context, try to find it via that first
      if (Deno.env.has('GITLAB_CI')) {
        const contextInfo = config.getContexts().find(c => {
          const spl = c.name.split(':');
          if (spl.length < 2) return false;
          return spl[1] === this.model.metadata.name;
        });

        context = contextInfo?.name;
      }
    }

    if (!context) {
      const cluster = config.getClusters().find(c => (new URL(c.server).hostname) === this.cluster.dns);
      const contextInfo = cluster ? config.getContexts().find(c => c.cluster === cluster.name) : undefined;
      context = contextInfo?.name;
    }

    if (!context) throw Error("Cluster context must be defined to use client");
    config.setCurrentContext(context);
    return config;
  }

  public getClient(): _client.KubernetesObjectApi {
    if (this.client) return this.client;
    const config = this.getConfig();

    // client.patch, etc, server side apply
    this.client = _client.KubernetesObjectApi.makeApiClient(config);
    return this.client;
  }

  protected override getBuildContext(params: TargetResolveParams): KubeBuildContext {
    return {
      bootstrap: params.bootstrap,
      gitops: this.gitops && !params.direct
    }
  }

  public override getIntrospection(): KubeTargetIntrospection {
    if (!this.introspection) {
      this.introspection = new KubeTargetIntrospection(() => this.getConfig());
    }

    return this.introspection;
  }
}
