// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Architect, Capability } from '@glassway/architect';

export enum IngressFlavor {
  Cilium = "cilium",
  Nginx = "nginx",
  Istio = "istio",
  Envoy = "envoy",
  Pomerium = "pomerium",
}

export interface IngressCapabilitySpec {
  flavor: string | IngressFlavor;
}

/**
 * Represents a specific flavor of ingress controller
 */
@Architect.class("capability.k8s.architect.glassway.net/ingress")
export class IngressCapability extends Capability<IngressCapabilitySpec> {}
