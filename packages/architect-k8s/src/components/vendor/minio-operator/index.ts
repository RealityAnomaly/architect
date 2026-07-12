import { CapabilityMatcher } from '@glassway/architect';

import { KubeComponentHelm } from '../../builders/helm.ts';
import { StorageCapability } from '../../../capabilities/storage.ts';
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

  public override async getRequirements(): Promise<any> {
    return [
      ...await super.getRequirements(),
      new CapabilityMatcher(StorageCapability),
    ];
  }
}
