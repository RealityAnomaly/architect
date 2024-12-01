import { Provider, KubeResource } from "@perdition/architect-core";

import { KubeTarget } from "../target.mts";

// TODO: hybrid is not a seperate provider. it's just an implementation of "watch deployment" per provider
export class KubeProvider extends Provider<KubeResource> {
  private readonly target: KubeTarget;

  constructor(target: KubeTarget) {
    this.target = target;
  };
};
