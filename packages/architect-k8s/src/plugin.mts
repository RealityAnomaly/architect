import { Architect, Plugin, TargetClass } from "@perdition/architect-core";
import { Command } from "commander";
import { CRDCommand } from "./crds/cli.mts";
import { CrdsConfig } from "./crds/config.mts";
import { CRDManager } from "./crds/index.mts";
import { KubeTarget } from "./target.mts";
import { BuilderParams, GitBuilder, Helm, HttpBuilder, Kustomize } from "./index.mts";

export class K8sPluginConfig {
  crds?: CrdsConfig[];
}

export class K8sPlugin extends Plugin {
  public static readonly MODULE = "@perdition/architect-k8s";
  public readonly crds: CRDManager;

  public helm: Helm;
  public kustomize: Kustomize;
  public gitBuilder: GitBuilder;
  public httpBuilder: HttpBuilder;

  constructor(parent: Architect) {
    super(parent, 'kubernetes');
    this.crds = new CRDManager(this);

    const builderParams: BuilderParams = {
      loader: this.parent.kubeLoader,
      logger: this.logger,
      cache: this.parent.cache
    };

    this.helm = new Helm(builderParams);
    this.kustomize = new Kustomize(builderParams);
    this.gitBuilder = new GitBuilder(builderParams);
    this.httpBuilder = new HttpBuilder(builderParams);
  }

  public async init(): Promise<void> {
    for (const path of this.parent.projectPaths) {
      this.parent.kubeTypes.appendCRDModule(path);
    };
  };

  public async registerCommand(cmd: Command): Promise<void> {
    const command = cmd.command('k8s')
      .description('Commands for the Kubernetes module');
    
    command.addCommand(new CRDCommand(this));
  };

  public get config(): K8sPluginConfig {
    return this.parent.project!.config.plugins?.kubernetes || {};
  };

  public get targets(): TargetClass[] {
    return [KubeTarget];
  };
}

export class Kubernetes {
  public static namespace(name: string): {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    (target: Function): void;
    (target: object, propertyKey: string | symbol): void;
  } {
    return Reflect.metadata('namespace', name);
  };
};
