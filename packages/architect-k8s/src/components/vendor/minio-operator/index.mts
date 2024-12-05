import { CapabilityMatcher } from 'jsr:@perdition/architect-core';
import { StorageCapability, KubeComponentHelm } from 'jsr:@perdition/architect-k8s';

import model from './architect.json' with { type: 'json' };

/**
 * An operator that provisions Minio clusters
 */
@KubeComponentHelm.decorate(model['minio-operator'])
export class MinioOperatorComponent extends KubeComponentHelm {
  public override init(): void {
    this.setDefaults({
      values: {
        // Do not autocreate
        tenants: [],
      },
    });
  };

  public override async getRequirements() {
    return [
      ...await super.getRequirements(),
      new CapabilityMatcher(StorageCapability),
    ];
  };
};
