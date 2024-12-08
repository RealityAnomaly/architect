import { Architect, Capability } from '@perdition/architect-core';

export enum LoadBalancerFlavor {
  MetalLB = 'metallb',
};

export interface LoadBalancerCapabilitySpec {
  flavor: string | LoadBalancerFlavor;
};

/**
 * Represents a cluster-wide load balancer, i.e. MetalLB
 */
@Architect.class('capability.k8s.architect.glassway.net/loadbalancer')
export class LoadBalancerCapability extends Capability<LoadBalancerCapabilitySpec> {};
