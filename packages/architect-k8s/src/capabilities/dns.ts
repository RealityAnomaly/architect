// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Architect, Capability } from '@glassway/architect';

export enum DNSFlavor {
  CoreDNS = "coredns",
}

export interface DNSCapabilitySpec {
  flavor: string | DNSFlavor;
}

/**
 * Represents a cluster-wide DNS server, generally CoreDNS
 */
@Architect.class("capability.k8s.architect.glassway.net/dns")
export class DNSCapability extends Capability<DNSCapabilitySpec> {}
