import { KubeResourceConstructor } from '../resource.mts';
import { GVK } from './gvk.mts';
import { Logger } from 'winston';

import * as kubernetesModels from 'kubernetes-models';
import * as kubernetesModelsBase from '@kubernetes-models/base';
import { ModuleUtilities } from "../../utils/modules.mts";
import { TypeUtilities } from "../../utils/types.mts";

/**
 * Responsible for registering type definitions for the Kubernetes API and CRDs
 */
export class TypeRegistry {
  private logger?: Logger;
  private data: Record<string, KubeResourceConstructor> = {};

  constructor(logger?: Logger) {
    this.logger = logger;

    this.appendModule(kubernetesModels);
  };

  private isTypeMeta(target: object): target is kubernetesModelsBase.TypeMeta {
    return TypeUtilities.isObject(target) && Object.hasOwn(target, 'apiVersion') && Object.hasOwn(target, 'kind');
  };

  /**
   * Scans a module for Kubernetes resource constructors, returning key/value pairs representing the GVKs within that module
   */
  private scanModule(module: object): Record<string, KubeResourceConstructor> {
    const result: Record<string, KubeResourceConstructor> = {};
    const classes = ModuleUtilities.collectClasses<kubernetesModelsBase.Model<unknown>>(module, c => this.isTypeMeta(c));

    // TODO: should probably fix this later
    for (const clazz of classes) {
      const typeMeta = clazz as unknown as kubernetesModelsBase.TypeMeta;
      result[`${typeMeta.apiVersion}/${typeMeta.kind}`] = typeMeta as unknown as KubeResourceConstructor;
    };

    return result;
  };

  /**
   * Sets the path for Kubernetes API models.
   */
  public appendModule(module: object) {
    this.data = { ...this.data, ...this.scanModule(module) };
  };

  /**
   * Gets the constructor for a model GVK
   */
  public getConstructor(gvk: GVK): KubeResourceConstructor | undefined {
    const path = gvk.toPath();
    return Object.hasOwn(this.data, path) ? this.data[path] : undefined;
  };
};
