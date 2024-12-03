import { Architect } from "@perdition/architect-core";
import { KubeComponentHelm } from "@perdition/architect-k8s";

import model from './architect.json' with { type: 'json' };

/**
 * Deploys an operator that can sync secrets from various places
 */
@Architect.component(model['external-secrets'])
export class ExternalSecretsComponent extends KubeComponentHelm {
  public init(): void {
    this.setDefaults({
      values: {
        installCRDs: true,
      },
    });
  };
};
