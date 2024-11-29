import { Architect, Plugin, TargetClass } from "@perdition/architect-core";
import { Command } from "commander";
import { CRDCommand } from "./crds/cli.mts";
import { CrdsConfig } from "./crds/config.mts";
import { CRDManager } from "./crds/index.mts";
import { KubeTarget } from "./target.mts";

export class K8sPluginConfig {
  crds?: CrdsConfig[];
}

export class K8sPlugin extends Plugin {
  public static readonly MODULE = "@perdition/architect-k8s";
  public readonly crds: CRDManager;

  constructor(parent: Architect) {
    super(parent, 'kubernetes');
    this.crds = new CRDManager(this);
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
