import { KubeResource, Provider } from '@glassway/architect';

import { KubeTarget } from '../target.ts';

// TODO: hybrid is not a separate provider. it's just an implementation of "watch deployment" per provider
export abstract class KubeProvider extends Provider<KubeResource> {
  private readonly target: KubeTarget;

  protected constructor(target: KubeTarget) {
    super();
    this.target = target;
  }
}
