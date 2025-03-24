import { App } from './cli/index.mts';
import { Project } from './internal/project/index.mts';
import * as crds from './generated/crds/index.ts';

export * from './cli/index.mts';
export * from './generated/crds/index.ts';
export * from './generated/crds/index.ts';
export * from './internal/graph/index.mts';
export * from './kubernetes/index.mts';
export * from './utils/index.mts';
export * from './internal/backend/index.mts';
export * from './internal/cache/cache.mts';
export * from './internal/component/index.mts';
export * from './internal/provider/index.mts';
export * from './internal/result/index.mts';
export * from './internal/target/index.mts';

export * from './app.mts';
export * from './plugin.mts';
export * from './internal/project/index.mts';

@Project.decorate({
  name: '@perdition/architect-core',
  library: true,
})
export class ArchitectCoreProject extends Project {
  public override async configure(): Promise<void> {
    this.addModules(crds);
  }
}

if (import.meta.main) {
  await App.run(ArchitectCoreProject);
}
