import { Architect, Plugin, TargetClass } from '@perdition/architect-core';
import { Command } from 'commander';
import { CRDCommand } from './crds/cli.mts';
import { CrdsConfig } from './crds/config.mts';
import { CRDManager } from './crds/index.mts';
import { KubeTarget } from './target.mts';
import { BuilderParams, GitBuilder, Helm, HttpBuilder, Kustomize, } from './index.mts';

export const K8S_PLUGIN_CLASS = "plugin.architect.glassway.net/kubernetes";

export class K8sPluginConfig {
  crds?: CrdsConfig[];
}

@Plugin.decorate(K8S_PLUGIN_CLASS)
export class K8sPlugin extends Plugin {
  public readonly crds: CRDManager;

  public helm: Helm;
  public kustomize: Kustomize;
  public gitBuilder: GitBuilder;
  public httpBuilder: HttpBuilder;

  constructor(parent: Architect) {
    super(parent, "kubernetes");
    this.crds = new CRDManager(this);

    const builderParams: BuilderParams = {
      loader: this.parent.kubeLoader,
      logger: this.logger,
      cache: this.parent.cache,
    };

    this.helm = new Helm(builderParams);
    this.kustomize = new Kustomize(builderParams);
    this.gitBuilder = new GitBuilder(builderParams);
    this.httpBuilder = new HttpBuilder(builderParams);
  }

  public get config(): K8sPluginConfig {
    return this.parent.project!.config.plugins?.kubernetes || {};
  }

  public get targets(): Record<string, TargetClass> {
    return { [Plugin.TARGET_IDENTIFIERS.kubernetes]: KubeTarget };
  }

  public async init(): Promise<void> {}

  public async registerCommand(cmd: Command): Promise<void> {
    const command = cmd.command("k8s")
      .description("Commands for the Kubernetes module");

    command.addCommand(new CRDCommand(this));
  }
}
