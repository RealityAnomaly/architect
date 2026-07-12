import { Architect, Capability } from '@glassway/architect';

/**
 * Represents the Kubernetes Metrics Server
 */
@Architect.class("capability.k8s.architect.glassway.net/metrics")
export class MetricsCapability extends Capability<never> {}
