export * from "./builders/index.ts";
export { Helm } from "./builders/helm.ts";
export { Kustomize } from "./builders/kustomize.ts";
export * from "./utils/index.ts";
export * from "./capabilities/index.ts";
export * from "./components/index.ts";
export * from "./types/index.ts";
export * from "./component.ts";
export * from "./plugin.ts";
export * from "./target.ts";

import { App, Project } from '@glassway/architect';
import * as components from './components/index.ts';
import * as crds from './generated/crds/index.ts';

import model from './../architect.yaml' with { type: 'text' };
import { K8sPlugin } from './plugin.ts';

@Project.decorateYaml(model)
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
