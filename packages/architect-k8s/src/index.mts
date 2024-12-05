export * from './builders/index.mts';
export { Helm } from './builders/helm.mts';
export { Kustomize } from './builders/kustomize.mts';
export * from './utils/index.mts';
export * from './capabilities/index.mts';
export * from './components/index.mts';
export * from './component.mts';
export * from './plugin.mts';
export * from './target.mts';

import { ProjectModule } from 'jsr:@perdition/architect-core';
import model from './../architect.json' with { type: 'json' };
export default new ProjectModule(model, import.meta.url);
