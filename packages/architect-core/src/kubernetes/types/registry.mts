import { Architect } from '../../index.mts';
import { KubeResourceConstructor } from '../resource.mts';
import { GVK } from './gvk.mts';

function gvkToPath(gvk: GVK): string {
  let path: string = '';
  if (gvk.group) {
    path += `${gvk.group}/`;
  };

  path += `${gvk.version}/${gvk.kind}`;
  return path;
};

async function tryImport(path: string): Promise<object | undefined> {
  try {
    return await import(path);
  } catch {
    return undefined;
  };
};

/**
 * Responsible for registering type definitions for the Kubernetes API and CRDs
 */
export class TypeRegistry {
  private ctorCache: Record<string, KubeResourceConstructor | null> = {};
  private apiModulePath: string = 'kubernetes-models';
  private crdModulePaths: string[] = [
    Architect.PATH // path of the default root module
  ];

  /**
   * Sets the path for Kubernetes API models.
   */
  public setAPIModule(module: string) {
    this.apiModulePath = module;
  };

  /**
   * Appends a module dir to the CRD search path.
   */
  public appendCRDModule(dir: string) {
    this.crdModulePaths.push(dir);
  };

  /**
   * Gets the constructor for a model GVK
   */
  public async getConstructor(gvk: GVK): Promise<KubeResourceConstructor | null> {
    const path = gvkToPath(gvk);
    const ctor = this.ctorCache[path] ?? this.getAndCacheModule(gvk);
    if (!ctor) return null;

    return ctor;
  };

  private async getAndCacheModule(
    gvk: GVK,
  ): Promise<KubeResourceConstructor | null> {
    const gvkPath = gvkToPath(gvk);

    // find a matching constructor
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mod: any | undefined;
    let path: string | null = null;

    if (!gvk.isAPIModel()) {
      // CRD, try everything till we find a match
      for (const crdPath of this.crdModulePaths) {
        const tryPath = `${crdPath}/src/generated/crds/${gvkPath}.ts`;
        mod = await tryImport(tryPath);
        if (mod) {
          path = tryPath;
          break;
        };
      };
    } else {
      // API model, use the API types
      path = `${this.apiModulePath}/${gvkPath}`;
      mod = await tryImport(path);
    };

    // cache failure as well as success
    if (!mod || !mod[gvk.kind] || !path) {
      this.ctorCache[gvkPath] = null;
      return null;
    };

    const ctor = mod[gvk.kind];
    this.ctorCache[gvkPath] = ctor;
    return ctor;
  };
};
