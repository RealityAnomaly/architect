import 'reflect-metadata';
import { Capability } from '@perdition/architect-core';

export enum LoadBalancerFlavor {
  MetalLB = 'metallb',
};

export interface LoadBalancerCapabilitySpec {
  flavor: string | LoadBalancerFlavor;
};

/**
 * Represents a cluster-wide load balancer, i.e. MetalLB
 */
@Reflect.metadata('class', 'capability.k8s.architect.glassway.net/loadbalancer')
export class LoadBalancerCapability extends Capability<LoadBalancerCapabilitySpec> {};
