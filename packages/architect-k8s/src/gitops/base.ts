// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as logtape from '@logtape/logtape';
import * as api from '@glassway/kubernetes-models';

import { GVK, Result, ICompileListener, KubeResource, TargetApplyParams } from '@glassway/architect';
import { IKubeTarget } from '../target/index.ts';
import { K8sPluginProps } from '../plugin.ts';
import { HelmChartOpts } from '../builders/index.ts';

export type K8sPluginGitOpsProps = NonNullable<K8sPluginProps['gitops']>;

export abstract class GitOpsController {
  public readonly target: IKubeTarget;

  protected constructor(target: IKubeTarget) {
    this.target = target;
  }

  public abstract apply(result: Result, params?: TargetApplyParams, logger?: logtape.Logger, listener?: ICompileListener): Promise<void>;
  public async clusterObjects(): Promise<KubeResource[]> { return []; }

  public async helmResources(_chart: string, _values: object, _config: HelmChartOpts): Promise<KubeResource[]> {
    throw new Error('Helm resources are not implemented for this GitOps controller');
  }

  public managesResource(resource: KubeResource): boolean {
    // namespaces are deployed at the top level because the Kustomization or equivalent gets deployed into them
    if (GVK.fromResource(resource).compare(GVK.fromCtor(api.v1.Namespace))) return true;
    return !!(resource.metadata?.labels ?? {})['architect.glassway.net/position'];
  }

  public get handlesSOPSSecrets(): boolean {
    return false;
  }
}
