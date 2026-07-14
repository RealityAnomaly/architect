// STFU
process.removeAllListeners("warning");
process.on("warning", n => {
  (n.name !== "DeprecationWarning" || !n.message.includes("punycode")) && console.warn(n)
});

import { App } from './cli/index.ts';
import { Project } from './internal/project/index.ts';
import * as crds from './kubernetes/crds/index.ts';

export * from './cli/index.ts';
export * from './kubernetes/crds/index.ts';
export * from './kubernetes/crds/index.ts';
export * from './internal/graph/index.ts';
export * from './kubernetes/index.ts';
export * from './utils/index.ts';
export * from './internal/index.ts';

export * from './app.ts';
export * from './plugin.ts';
export * from './internal/project/index.ts';

@Project.decorate({
  name: '@glassway/architect',
})
export class ArchitectCoreProject extends Project {
  public override async configure(): Promise<void> {
    this.addModules(crds);
  }
}

if (import.meta.main) {
  await App.run(ArchitectCoreProject);
}
