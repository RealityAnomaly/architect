import { CapabilityMatcher } from '@perdition/architect-core';

import { KubeComponentHelm } from '../../builders/helm.mts';
import { StorageCapability } from '../../../capabilities/storage.mts';
import model from './architect.json' with { type: 'json' };

/**
 * An operator that provisions Minio clusters
 */
@KubeComponentHelm.decorate(model["minio-operator"])
export class MinioOperatorComponent extends KubeComponentHelm {
  public override init(): void {
    this.setDefaults({
      values: {
        // Do not auto create
        tenants: [],
      },
    });
  }

  public override async getRequirements() {
    return [
      ...await super.getRequirements(),
      new CapabilityMatcher(StorageCapability),
    ];
  }
}
