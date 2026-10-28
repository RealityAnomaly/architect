// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Context } from '../utils/index.ts';

export interface KubeContext extends Context {
  /**
   * Virtual cluster the resources are created in
   */
  vcluster?: string;

  /**
   * Namespace of the resources
   */
  namespace?: string;
}
