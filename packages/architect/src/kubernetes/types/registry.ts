import { KubeResourceConstructor } from '../resource.ts';
import { GVK } from './gvk.ts';
import * as logtape from '@logtape/logtape';

import * as kubernetesModels from '@glassway/kubernetes-models';

import { ModuleUtilities } from '../../utils/modules.ts';
import { TypeUtilities } from '../../utils/types.ts';
import { Model } from '@glassway/kubernetes-types';
import { TypeMeta } from '@glassway/kubernetes-types';

/**
 * Responsible for registering type definitions for the Kubernetes API and CRDs
 */
export class KubeTypeRegistry {
  private logger?: logtape.Logger;
  private data: Record<string, KubeResourceConstructor> = {};

  constructor(logger?: logtape.Logger) {
    this.logger = logger;

    this.appendModule(kubernetesModels);
  }

  /**
   * Sets the path for Kubernetes API models.
   */
  public appendModule(module: object) {
    this.data = { ...this.data, ...this.scanModule(module) };
  }

  /**
   * Gets the constructor for a model GVK
   */
  public getConstructor(gvk: GVK): KubeResourceConstructor | undefined {
    const path = gvk.toPath();
    return Object.hasOwn(this.data, path) ? this.data[path] : undefined;
  }

  private isTypeMeta(target: object): target is TypeMeta {
    return TypeUtilities.isObject(target) &&
      Object.hasOwn(target, "apiVersion") && Object.hasOwn(target, "kind");
  }

  /**
   * Scans a module for Kubernetes resource constructors, returning key/value pairs representing the GVKs within that module
   */
  private scanModule(module: object): Record<string, KubeResourceConstructor> {
    const result: Record<string, KubeResourceConstructor> = {};
    const classes = ModuleUtilities.collectClasses<
      Model<unknown>
    >(module, (c) => this.isTypeMeta(c));

    // TODO: should probably fix this later
    for (const clazz of classes) {
      const typeMeta = clazz as unknown as TypeMeta;
      result[`${typeMeta.apiVersion}/${typeMeta.kind}`] =
        typeMeta as unknown as KubeResourceConstructor;
    }

    return result;
  }
}
