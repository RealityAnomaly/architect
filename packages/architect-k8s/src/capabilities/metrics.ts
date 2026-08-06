// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Architect, Capability } from '@glassway/architect';

/**
 * Represents the Kubernetes Metrics Server
 */
@Architect.class("capability.k8s.architect.glassway.net/metrics")
export class MetricsCapability extends Capability<never> {}
