import { KubeResource, Provider } from '@perdition/architect-core';

import { KubeTarget } from '../target.mts';

// TODO: hybrid is not a separate provider. it's just an implementation of "watch deployment" per provider
export abstract class KubeProvider extends Provider<KubeResource> {
  private readonly target: KubeTarget;

  protected constructor(target: KubeTarget) {
    super();
    this.target = target;
  }
}
