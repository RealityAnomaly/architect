export * from "./builders/index.mts";
export { Helm } from "./builders/helm.mts";
export { Kustomize } from "./builders/kustomize.mts";
export * from "./utils/index.mts";
export * from "./capabilities/index.mts";
export * from "./components/index.mts";
export * from "./component.mts";
export * from "./plugin.mts";
export * from "./target.mts";

import { App, Project } from '@perdition/architect-core';
import * as components from './components/index.mts';
import * as crds from './generated/crds/index.ts';

import model from './../architect.json' with { type: 'json' };
import { K8sPlugin } from './plugin.mts';

@Project.decorate(model)
export class ArchitectK8sProject extends Project {
  public override async configure(): Promise<void> {
    await super.configure();

    this.addPlugins(K8sPlugin);
    this.addModules(components, crds);
  }
}

if (import.meta.main) {
  await App.run(ArchitectK8sProject);
}
