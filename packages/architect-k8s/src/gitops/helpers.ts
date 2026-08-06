// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { GitOpsController } from './base.ts';
import { IKubeTarget } from '../target/index.ts';
import { FluxCDController } from './flux/index.ts';

export class GitOpsHelpers {
  public static resolve(target: IKubeTarget): GitOpsController | undefined {
    const props = target.cluster.gitops;
    if (props?.flux) return new FluxCDController(target, props.flux);

    return undefined;
  }
}
