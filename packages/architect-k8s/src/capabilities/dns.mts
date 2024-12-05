import { Architect, Capability } from 'jsr:@perdition/architect-core';

export enum DNSFlavor {
  CoreDNS = 'coredns',
};

export interface DNSCapabilitySpec {
  flavor: string | DNSFlavor;
};

/**
 * Represents a cluster-wide DNS server, generally CoreDNS
 */
@Architect.class('capability.k8s.architect.glassway.net/dns')
export class DNSCapability extends Capability<DNSCapabilitySpec> {};
