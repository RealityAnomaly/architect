import * as logtape from '@logtape/logtape';

const logger = logtape.getLogger(['architect', 'git']);

export interface ProjectGitInfo {
  origin?: string;
  branch?: string;
  revision?: string;
  revisionShort?: string;
}

async function run(root: string, params: string[]): Promise<string | undefined> {
  params.unshift('-C', root);

  const command = new Deno.Command('git', {
    args: params,
    stdout: "piped",
    stderr: "piped"
  });

  const process = command.spawn();
  const status = await process.status;
  if (!status.success) logger.debug(`Git command ${params} failed with code ${status.code}: ${await process.stderr.text()}`);
  return status.success ? (await process.stdout.text()).trim() : undefined;
}

// TODO: move this to centralised git class
export class ProjectGitHelper {
  public static async resolve(root: string): Promise<ProjectGitInfo> {
    let tag = await run(root, ['tag', '--points-at', 'HEAD']);
    if (!tag) tag = await run(root, ['branch', '--show-current']);

    return {
      origin: await run(root, ['config', '--get', 'remote.origin.url']),
      branch: tag,
      revision: await run(root, ['rev-parse', 'HEAD']),
      revisionShort: await run(root, ['rev-parse', '--short', 'HEAD'])
    };
  }
}
