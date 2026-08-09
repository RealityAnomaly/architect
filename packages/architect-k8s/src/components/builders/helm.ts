// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component, KubeResource } from '@glassway/architect';
import { HelmChartOpts } from '../../builders/helm.ts';
import { KubeComponent, KubeComponentArgs, KubeComponentGenericResources, } from '../../component.ts';
import { KubeBuildContext } from '../../target/index.ts';

export interface KubeComponentHelmResources
  extends KubeComponentGenericResources {
  release?: KubeResource[];
  extra?: KubeResource[];
}

export interface KubeComponentHelmOptions extends KubeComponentArgs {
  values?: object;
  helmOpts?: Partial<HelmChartOpts>;
}

export abstract class KubeComponentHelm<
  TResult extends KubeComponentHelmResources = KubeComponentHelmResources,
  TArgs extends KubeComponentHelmOptions = KubeComponentHelmOptions,
  TParent extends Component = Component,
> extends KubeComponent<TResult, TArgs, TParent> {
  public override async build(context: KubeBuildContext, resources: TResult = {} as TResult): Promise<TResult> {
    const props = await this.props.$resolve();
    const chart = props.inputs!.chart.helm!;

    resources.release = await this.helmTemplate(
      chart.name,
      props.values || {},
      {
        repo: chart.repo,
        version: chart.version,
        ...props.helmOpts || {},
      },
    );

    return super.build(context, resources as TResult);
  }
}
