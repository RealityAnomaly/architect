export * from '@perdition/architect-core/k8s';

export * from './components/index.mts';
export { Helm } from './helm/index.mts';
export { Kustomize } from './kustomize/index.mts';
export * from './utils/index.mts';
export * from './capabilities/index.mts';
export * from './component.mts';
export * from './target.mts';

import { K8sPlugin } from './plugin.mts';
export default K8sPlugin;
