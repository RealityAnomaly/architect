import * as api from 'kubernetes-models';
import { CrdsConfig } from '../config.mts';
import { CRDManager } from '../index.mts';
import { Logger } from 'winston';

export abstract class CRDFetcher {
  protected readonly parent: CRDManager;
  protected readonly logger: Logger;

  constructor(parent: CRDManager) {
    this.parent = parent;
    this.logger = parent.plugin.logger.child({
      component: `plugin.kubernetes.${this.constructor.name}`
    })
  }

  public abstract fetch(crd: CrdsConfig): Promise<api.apiextensionsK8sIo.v1.CustomResourceDefinition[]>;
}
