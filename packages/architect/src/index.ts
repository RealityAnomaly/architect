// STFU
process.removeAllListeners("warning");
process.on("warning", n => {
  (n.name !== "DeprecationWarning" || !n.message.includes("punycode")) && console.warn(n)
});

import { App } from './cli/index.ts';

export * from './cli/index.ts';
export * from './kubernetes/crds/index.ts';
export * from './kubernetes/crds/index.ts';
export * from './internal/graph/index.ts';
export * from './kubernetes/index.ts';
export * from './utils/index.ts';
export * from './internal/index.ts';

export * from './app.ts';
export * from './internal/plugin/plugin.ts';
export * from './internal/project/index.ts';

export { ProjectMetadata } from './internal/project/meta.ts';
export { PluginRegistry } from './internal/plugin/registry.ts';
import { ArchitectCoreProject } from './internal/project/index.ts';

if (import.meta.main) {
  await App.run(ArchitectCoreProject);
}
