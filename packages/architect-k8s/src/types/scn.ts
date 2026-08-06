// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

/**
 * Standard Cluster Namespaces - a small standard defining three default namespaces for resources
 */
export type NamespaceType = 'features' | 'operators' | 'services';

export const NamespaceRef: Record<NamespaceType, string> = {
  features: '$features$',
  operators: '$operators$',
  services: '$services$',
}

export const NamespaceDefaults: Record<NamespaceType, string> = {
  features: 'infra-system',
  operators: 'operator-system',
  services: 'services',
}
