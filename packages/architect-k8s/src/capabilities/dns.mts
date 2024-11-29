import 'reflect-metadata';
import { Capability } from '@perdition/architect-core';

export enum DNSFlavor {
  CoreDNS = 'coredns',
};

export interface DNSCapabilitySpec {
  flavor: string | DNSFlavor;
};

/**
 * Represents a cluster-wide DNS server, generally CoreDNS
 */
@Reflect.metadata('class', 'capability.k8s.architect.glassway.net/dns')
export class DNSCapability extends Capability<DNSCapabilitySpec> {};