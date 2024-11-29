import 'reflect-metadata';
import { Capability } from '@perdition/architect-core';

export enum IngressFlavor {
  Nginx = 'nginx',
  Istio = 'istio',
  Pomerium = 'pomerium',
};

export interface IngressCapabilitySpec {
  flavor: string | IngressFlavor;
};

/**
 * Represents a specific flavor of ingress controller
 */
@Reflect.metadata('class', 'capability.k8s.architect.glassway.net/ingress')
export class IngressCapability extends Capability<IngressCapabilitySpec> {};