import appDirs from 'npm:appdirsjs@1.2.7';
import path from 'node:path';
import { userInfo } from "node:os";
import { deepMerge } from "jsr:@std/collections@1.3.0";

const home = userInfo().homedir;
const dirs = appDirs.default({ appName: 'architect' });
const tmpdir = Deno.env.get('TMPDIR');

interface DenoPrivilegesEntry {
  read?: string[],
  write?: string[],
  net?: string[],
  env?: string[],
  run?: string[],
  sys?: string[],
  ffi?: string[],
  import?: string[]
}

interface DenoPrivileges {
  allow?: DenoPrivilegesEntry;
  deny?: DenoPrivilegesEntry;
}

export function trimSuffix(s: string, suffix: string): string {
  const end = s.length - suffix.length;

  if (s.substring(end) === suffix) {
    return s.substring(0, end);
  }

  return s;
}

const allowed_dirs = [
  dirs.cache,dirs.config,dirs.data,dirs.runtime,tmpdir,'/tmp',
  path.join(home, '.kube'),
  path.join(home, '.docker', 'config.json')
]
  .filter(x => (x !== undefined && x !== ""))
  .map(x => trimSuffix(x!, "/"));

const allowed_addrs = [
  'github.com:443',
  'release-assets.githubusercontent.com:443',
  'kubernetes.docker.internal:6443'
]

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

async function readPrivilegesFile(
  path: string
): Promise<DenoPrivileges> {
  try {
    return JSON.parse(await Deno.readTextFile(path)) as DenoPrivileges;
  } catch {
    return {}
  }
}

function buildPrivilegesParams(privileges: DenoPrivileges): string[] {
  function buildForList(mode: string, op: string, attrs: string[]): string[] {
    if (attrs.length <= 0) return [];

    const wildcard = attrs.indexOf('*') !== -1;
    return [`--${mode}-${op}${wildcard ? '' : `=${attrs.join(',')}`}`];
  }

  function buildType(mode: string, entry: DenoPrivilegesEntry): string[] {
    return [
      ...buildForList(mode, 'read', entry.read ?? []),
      ...buildForList(mode, 'write', entry.write ?? []),
      ...buildForList(mode, 'net', entry.net ?? []),
      ...buildForList(mode, 'env', entry.env ?? []),
      ...buildForList(mode, 'run', entry.run ?? []),
      ...buildForList(mode, 'sys', entry.sys ?? []),
      ...buildForList(mode, 'ffi', entry.ffi ?? []),
      ...buildForList(mode, 'import', entry.import ?? [])
    ]
  }

  return [
    ...buildType('allow', privileges.allow ?? {}),
    ...buildType('deny', privileges.deny ?? {})
  ]
}

const root = await findProjectRoot(Deno.cwd());
if (!root) {
  console.log('Failed to find the project root.');
  Deno.exit(1);
}

const rwPaths = ['.'];
allowed_dirs.push(...rwPaths);

let privileges = await readPrivilegesFile(path.join(root, 'deno.privileges.json'));
// deno-lint-ignore no-explicit-any
privileges = deepMerge(privileges as any, {
  allow: {
    read: allowed_dirs,
    write: allowed_dirs,
    env: ['*'],
    net: allowed_addrs,
    run: ['kustomize', 'helm', 'git', 'flux'],
    sys: ['homedir', 'userInfo', 'uid', 'gid']
  },
  deny: {
    // to prevent being prompted for load of cjs modules
    read: ['*'],
    // prevent hijacking of privileges file
    write: ['deno.privileges.json']
  }
});

//console.log(buildPrivilegesParams(privileges))

const command = new Deno.Command('deno', {
  args: [
    ...buildPrivilegesParams(privileges),
    '--check', '-q',
    'src/index.ts',
    ...Deno.args
  ],
  cwd: root
})

const process = command.spawn();
const status = await process.status;
Deno.exit(status.code);
