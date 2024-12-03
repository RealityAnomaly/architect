import { Component, KubeResourceTree } from "@perdition/architect-core";
import { HelmChartOpts } from "../../builders/helm.mts";
import { KubeComponent, KubeComponentArgs, KubeComponentGenericResources } from "../../component.mts"

export interface KubeComponentHelmResources extends KubeComponentGenericResources {
  release?: KubeResourceTree;
};

export interface KubeComponentHelmOptions extends KubeComponentArgs {
  values?: object,
  helmOpts?: Partial<HelmChartOpts>
};

export abstract class KubeComponentHelm<
  TResult extends KubeComponentHelmResources = KubeComponentHelmResources,
  TArgs extends KubeComponentHelmOptions = KubeComponentHelmOptions,
  TParent extends Component = Component
> extends KubeComponent<TResult, TArgs, TParent> {
  public async build(resources: TResult = {} as TResult) {
    const props = await this.props.$resolve();
    const chart = props.inputs!.chart.helm!;

    resources.release = await this.helmTemplate(chart.name, props.values || {}, {
      repo: chart.repo,
      version: chart.version,
      ...props.helmOpts || {}
    });

    return super.build(resources as TResult);
  };
};
