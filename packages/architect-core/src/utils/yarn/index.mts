import path from 'path';
import * as yarnCore from '@yarnpkg/core';
import * as yarnFsLib from '@yarnpkg/fslib';
import { ModulePackageEntry } from '../modules.mts';

export class YarnUtilities {
  public static async getCurrentWorkspace(dir: string): Promise<yarnCore.Workspace | null> {
    try {
      const cwd = yarnFsLib.npath.toPortablePath(dir);
      const config = await yarnCore.Configuration.find(cwd, null, { strict: false });
      const result = await yarnCore.Project.find(config, cwd);

      return result.workspace;
    } catch {
      return null;
    };
  };

  public static workspaceToIdentifier(workspace: yarnCore.Workspace): string {
    if (!workspace.manifest.name)
      throw Error(`workspace ${workspace} does not define a name`);

    let name = workspace.manifest.name.name;
      if (workspace.manifest.name.scope)
        name = `@${workspace.manifest.name.scope}/${name}`;
    return name;
  }

  public static projectToPackageMap(project: yarnCore.Project): Record<string, ModulePackageEntry> {
    const result = {} as Record<string, ModulePackageEntry>;
    for (const workspace of project.workspaces) {
      if (!workspace.manifest.name || !workspace.manifest.raw?.exports) continue;
      if (!Object.hasOwn(workspace.manifest.raw.exports, '.')) continue;

      const name = this.workspaceToIdentifier(workspace);
      const target = workspace.manifest.raw.exports['.'];

      result[name] = {
        root: workspace.cwd,
        import: path.join(workspace.cwd, target),
      };
    };

    return result;
  };
}
