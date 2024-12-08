import { KubeComponentHelm } from "@perdition/architect-k8s";

import model from './architect.json' with { type: 'json' };

/**
 * Deploys Kubernetes Replicator, an operator that syncs resources between namespaces
 */
@KubeComponentHelm.decorate(model['replicator'])
export class ReplicatorComponent extends KubeComponentHelm {};
