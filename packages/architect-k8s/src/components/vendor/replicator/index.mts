import { Architect } from "@perdition/architect-core";
import { KubeComponentHelm } from "@perdition/architect-k8s";

import model from './architect.json' with { type: 'json' };

/**
 * Deploys Kubernetes Replicator, an operator that syncs resources between namespaces
 */
@Architect.component(model['replicator'])
export class ReplicatorComponent extends KubeComponentHelm {};
