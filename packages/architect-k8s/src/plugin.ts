import { Architect, Plugin, TargetClass } from '@glassway/architect';
import { CRDCommand } from './crds/cli.ts';
import { CrdsConfig } from './crds/config.ts';
import { CRDManager } from './crds/index.ts';
import { KubeTarget } from './target/target.ts';
import { userInfo } from "node:os";
import { Command } from 'npm:commander@15.0.0'
import { BuilderParams, GitBuilder, Helm, HttpBuilder, Kustomize, } from './index.ts';

import * as _client from '@kubernetes/client-node';
import * as path from 'node:path';
import { OCIHelper } from './helpers/oci.ts';

export const K8S_PLUGIN_CLASS = "plugin.architect.glassway.net/kubernetes";

export class K8sPluginConfig {
  crds?: CrdsConfig[];
}

@Plugin.decorate(K8S_PLUGIN_CLASS)
export class K8sPlugin extends Plugin {
  public readonly crds: CRDManager;
  public oci: OCIHelper;

  public helm: Helm;
  public kustomize: Kustomize;
  public gitBuilder: GitBuilder;
  public httpBuilder: HttpBuilder;
  public kubeConfig: _client.KubeConfig | undefined;

  constructor(parent: Architect) {
    super(parent, "kubernetes");
    this.crds = new CRDManager(this);
    this.oci = new OCIHelper(this.logger);

    const builderParams: BuilderParams = {
      loader: this.parent.kubeLoader,
      logger: this.logger,
      cache: this.parent.cache,
    };

    this.helm = new Helm(builderParams, this.oci);
    this.kustomize = new Kustomize(builderParams);
    this.gitBuilder = new GitBuilder(builderParams);
    this.httpBuilder = new HttpBuilder(builderParams);
  }

  public get config(): K8sPluginConfig {
    return this.parent.getProject().config.plugins?.kubernetes || {};
  }

  public get targets(): Record<string, TargetClass> {
    return { [Plugin.TARGET_IDENTIFIERS.kubernetes]: KubeTarget };
  }

  public async init(): Promise<void> {}

  // noinspection JSUnusedGlobalSymbols
  public override async registerCommand(cmd: Command): Promise<void> {
    const command = cmd.command("k8s")
      .description("Commands for the Kubernetes module");

    command.addCommand(new CRDCommand(this));
  }

  public getKubeConfig(): _client.KubeConfig {
    if (this.kubeConfig) return this.kubeConfig;

    const home = userInfo().homedir;
    const config = new _client.KubeConfig();
    config.loadFromFile(path.join(home, ".kube/config"));

    this.kubeConfig = config;
    return this.kubeConfig;
  }
}
