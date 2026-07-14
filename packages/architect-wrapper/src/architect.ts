import appDirs from 'npm:appdirsjs@1.2.7';
import path from 'node:path';

const dirs = appDirs.default({ appName: 'architect' });
const tmpdir = Deno.env.get('TMPDIR');

export function trimSuffix(s: string, suffix: string): string {
  const end = s.length - suffix.length;

  if (s.substring(end) === suffix) {
    return s.substring(0, end);
  }

  return s;
}

const allowed_dirs = [dirs.cache,dirs.config,dirs.data,dirs.runtime,tmpdir]
  .filter(x => x !== undefined)
  .map(x => trimSuffix(x, "/"));

async function findProjectRoot(
  start: string,
): Promise<string | undefined> {
  let current = start;
  let previous = current;

  while (true) {
    const candidate = path.resolve(current);
    const fn = path.join(candidate, 'architect.yaml');

    try {
      let result = await Deno.stat(fn);
      if (result.isFile) {
        const scriptPath = path.join(candidate, 'src/index.ts');
        result = await Deno.stat(scriptPath);
        if (result.isFile) return candidate;
      }
    } catch {
      // pass
    }

    previous = current;
    current = path.dirname(current);
    if (current === previous) break;
  }

  return undefined;
}

const root = await findProjectRoot(Deno.cwd());
if (!root) {
  console.log('Failed to find the project root.');
  Deno.exit(1);
}

const dirStr = allowed_dirs.join(",");
const command = new Deno.Command('deno', {
  args: [
    '--allow-env',
    '--allow-net=github.com:443,release-assets.githubusercontent.com:443',
    '--allow-run=kustomize,helm',
    '--allow-sys=homedir',
    '--deny-read', // to prevent being prompted for load of cjs modules
    `--allow-read=.,${dirStr}`,
    `--allow-write=.,${dirStr}`,
    '--check', '-q',
    'src/index.ts',
    ...Deno.args
  ],
  cwd: root
})

const process = command.spawn();
const status = await process.status;
Deno.exit(status.code);
