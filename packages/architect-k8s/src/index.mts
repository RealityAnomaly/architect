export * from './builders/index.mts';
export { Helm } from './builders/helm.mts';
export { Kustomize } from './builders/kustomize.mts';
export * from './utils/index.mts';
export * from './capabilities/index.mts';
export * from './components/index.mts';
export * from './component.mts';
export * from './plugin.mts';
export * from './target.mts';

import { Project, PluginClass } from "@perdition/architect-core";
import * as components from "./components/index.mts";

import model from './../architect.json' with { type: 'json' };
import { K8sPlugin } from "./plugin.mts";

@Project.decorate(model)
export class ArchitectK8sProject extends Project {
  public override get plugins(): PluginClass[] {
    return [K8sPlugin, ...super.plugins];
  }

  public override get modules(): unknown[] {
    return [components, ...super.modules];
  };
};

if (import.meta.main) {
  await Project.run(ArchitectK8sProject);
};
