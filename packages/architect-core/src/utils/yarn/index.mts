import path from 'path';
import * as yarnCore from '@yarnpkg/core';
import * as yarnFsLib from '@yarnpkg/fslib';
import { ModulePackageEntry } from '../modules.mts';

export class YarnUtilities {
  public static async getCurrentProject(dir: string): Promise<yarnCore.Project | undefined> {
    try {
      const cwd = yarnFsLib.npath.toPortablePath(dir);
      const config = await yarnCore.Configuration.find(cwd, null, { strict: false });
      const result = await yarnCore.Project.find(config, cwd);

      return result.project;
    } catch {
      return undefined;
    };
  };

  public static projectToPackageMap(project: yarnCore.Project): Record<string, ModulePackageEntry> {
    const result = {} as Record<string, ModulePackageEntry>;
    for (const workspace of project.workspaces) {
      if (!workspace.manifest.name || !workspace.manifest.raw?.exports) continue;
      if (!Object.hasOwn(workspace.manifest.raw.exports, '.')) continue;

      const target = workspace.manifest.raw.exports['.'];
      let name = workspace.manifest.name.name;
      if (workspace.manifest.name.scope)
        name = `@${workspace.manifest.name.scope}/${name}`;

      result[name] = {
        root: workspace.cwd,
        import: path.join(workspace.cwd, target),
      };
    };

    return result;
  };
}
