import { KubeComponentHelm } from "@perdition/architect-k8s";

import model from './architect.json' with { type: 'json' };

/**
 * Deploys an operator that can sync secrets from various places
 */
@KubeComponentHelm.decorate(model['external-secrets'])
export class ExternalSecretsComponent extends KubeComponentHelm {
  public override init(): void {
    this.setDefaults({
      values: {
        installCRDs: true,
      },
    });
  };
};
