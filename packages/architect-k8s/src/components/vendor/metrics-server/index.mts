import { CollectionUtilities } from '@perdition/architect-core';
import { KubeComponent, KubeComponentGenericResources } from './../../../component.mts';
import { MetricsCapability } from '../../../capabilities/metrics.mts';

import model from './architect.json' with { type: 'json' };

/**
 * Deploys Metrics Server, a core component of Kubernetes that aggregates metrics
 */
@KubeComponent.decorate(model["metrics-server"])
export class MetricsServerComponent extends KubeComponent {
  public override get capabilities() {
    return [
      new MetricsCapability(),
    ];
  }

  public override async build(resources: KubeComponentGenericResources = {}) {
    let values = {};

    // talos generates certificates with the IP of the node
    // this should really be fixed in the future
    if (this.cluster.flavor === "talos") {
      values = CollectionUtilities.recursiveMerge(values, {
        args: ["--kubelet-insecure-tls"],
      });
    }

    const inputs = await this.props.inputs.$resolve();
    resources.result = await this.helmTemplate(
      inputs.chart.helm!.name,
      values,
      {
        repo: inputs.chart.helm!.repo,
        version: inputs.chart.helm!.version,
      },
    );

    return super.build(resources);
  }
}
