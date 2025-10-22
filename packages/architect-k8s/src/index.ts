export * from "./builders/index.ts";
export { Helm } from "./builders/helm.ts";
export { Kustomize } from "./builders/kustomize.ts";
export * from "./utils/index.ts";
export * from "./capabilities/index.ts";
export * from "./components/index.ts";
export * from "./component.ts";
export * from "./plugin.ts";
export * from "./target.ts";

import { App, Project } from '@glassway/architect-core';
import * as components from './components/index.ts';
import * as crds from './generated/crds/index.ts';

import model from './../architect.json' with { type: 'json' };
import { K8sPlugin } from './plugin.ts';

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
