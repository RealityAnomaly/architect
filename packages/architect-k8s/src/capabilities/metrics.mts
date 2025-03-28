import { Architect, Capability } from '@perdition/architect-core';

/**
 * Represents the Kubernetes Metrics Server
 */
@Architect.class("capability.k8s.architect.glassway.net/metrics")
export class MetricsCapability extends Capability<never> {}
