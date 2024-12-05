export * from './builders/index.mts';
export { Helm } from './builders/helm.mts';
export { Kustomize } from './builders/kustomize.mts';
export * from './utils/index.mts';
export * from './capabilities/index.mts';
export * from './components/index.mts';
export * from './component.mts';
export * from './target.mts';

import { Project, PluginConstructor } from '@perdition/architect-core';
import { K8sPlugin } from './plugin.mts';
import model from './../architect.json' with { type: 'json' };
class KubeProject extends Project {
  public override getPlugins(): PluginConstructor[] {
    const plugins = super.getPlugins();
    plugins.push(K8sPlugin);

    return plugins;
  };
};

export default new KubeProject(model);

// import { K8sPlugin } from './plugin.mts';
// export default K8sPlugin;
