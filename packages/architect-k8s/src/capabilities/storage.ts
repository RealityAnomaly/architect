// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Architect, Capability } from '@glassway/architect';

/**
 * Represents an available cluster CSI driver
 */
@Architect.class("capability.k8s.architect.glassway.net/storage")
export class StorageCapability extends Capability<never> {}
