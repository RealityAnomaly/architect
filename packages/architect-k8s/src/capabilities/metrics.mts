import 'reflect-metadata';
import { Capability } from '@perdition/architect-core';

/**
 * Represents the Kubernetes Metrics Server
 */
@Reflect.metadata('class', 'capability.k8s.architect.glassway.net/metrics')
export class MetricsCapability extends Capability<any> {};
