import { Provider } from "@perdition/architect-core";
import { Resource } from '@perdition/architect-core/k8s';

import { KubeTarget } from "../target.mts";

// TODO: hybrid is not a seperate provider. it's just an implementation of "watch deployment" per provider
export class KubeProvider extends Provider<Resource> {
  private readonly target: KubeTarget;

  constructor(target: KubeTarget) {
    this.target = target;
  };
};
