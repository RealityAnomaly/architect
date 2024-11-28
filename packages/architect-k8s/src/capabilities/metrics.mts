import 'reflect-metadata';
import { Capability } from '@perdition/architect-core';

/**
 * Represents the Kubernetes Metrics Server
 */
@Reflect.metadata('class', 'capability.k8s.architect.glassway.net/metrics')
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class MetricsCapability extends Capability<any> {};
