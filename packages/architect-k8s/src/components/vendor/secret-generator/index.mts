import { KubeComponentHelm } from "@perdition/architect-k8s";

import model from './architect.json' with { type: 'json' };

/**
 * Deploys Kubernetes Secret Generator, an operator that generates secrets
 */
@KubeComponentHelm.decorate(model['secret-generator'])
export class SecretGeneratorComponent extends KubeComponentHelm {};
