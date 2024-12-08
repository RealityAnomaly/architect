import { KubeResourceConstructor } from '../resource.mts';
import { GVK } from './gvk.mts';
import { Logger } from 'winston';

function gvkToPath(gvk: GVK): string {
  let path: string = '';
  if (gvk.group) {
    path += `${gvk.group}/`;
  };

  path += `${gvk.version}/${gvk.kind}`;
  return path;
};

async function tryImport(path: string, logger?: Logger): Promise<object | undefined> {
  try {
    return await import(path);
  } catch (exception) {
    logger?.silly(`failed to import ${path}: ${exception}`);
    return undefined;
  };
};

/**
 * Responsible for registering type definitions for the Kubernetes API and CRDs
 */
export class TypeRegistry {
  private logger?: Logger;
  private ctorCache: Record<string, KubeResourceConstructor | null> = {};
  private apiModulePath: string = 'npm:kubernetes-models';
  private crdModulePaths: string[] = [];

  constructor(logger?: Logger) {
    this.logger = logger;
  };

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
    let mod: any | undefined = undefined;
    let path: string | null = null;

    if (gvk.isAPIModel()) {
      path = `${this.apiModulePath}/${gvkPath}`;
      mod = await tryImport(path, this.logger);
    };

    // if we failed to import an "API" model from the main module, fallback to CRD modules
    if (!mod) {
      for (const crdPath of this.crdModulePaths) {
        const tryPath = `${crdPath}/src/generated/crds/${gvkPath}.ts`;
        mod = await tryImport(tryPath, this.logger);
        if (mod) {
          path = tryPath;
          break;
        };
      };
    };

    // cache failure as well as success
    if (!mod || !mod[gvk.kind] || !path) {
      this.logger?.warn(`failed to obtain class for GVK ${gvk}`);
      this.ctorCache[gvkPath] = null;
      return null;
    };

    const ctor = mod[gvk.kind];
    this.ctorCache[gvkPath] = ctor;
    return ctor;
  };
};
