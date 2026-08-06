// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Architect, Capability } from '@glassway/architect';

export enum CNIFlavor {
  Calico = "calico",
  Canal = "canal",
  Cilium = "cilium",
  Flannel = "flannel",
  Multus = "multus",
  Weave = "weave",
}

export interface CNICapabilitySpec {
  /**
   * Vendor of the CNI
   */
  flavor: string | CNIFlavor;
}

/**
 * Represents a CNI available in the cluster
 */
@Architect.class("capability.k8s.architect.glassway.net/cni")
export class CNICapability extends Capability<CNICapabilitySpec> {}
