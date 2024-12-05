import { recursiveMerge } from "@perdition/architect-core";
import { KubeComponent, KubeComponentGenericResources, MetricsCapability } from "@perdition/architect-k8s";

import model from './architect.json' with { type: 'json' };

/**
 * Deploys Metrics Server, a core component of Kubernetes that aggregates metrics
 */
@KubeComponent.decorate(model['metrics-server'])
export class MetricsServerComponent extends KubeComponent {
  public override async build(resources: KubeComponentGenericResources = {}) {
    let values = {};

    // talos generates certificates with the IP of the node
    // this should really be fixed in the future
    if (this.cluster.flavor === 'talos') {
      values = recursiveMerge(values, {
        args: ['--kubelet-insecure-tls'],
      })
    };

    const inputs = await this.props.inputs.$resolve();
    resources.result = await this.helmTemplate(inputs.chart.helm!.name, values, {
      repo: inputs.chart.helm!.repo,
      version: inputs.chart.helm!.version,
    });

    return super.build(resources);
  };

  public override get capabilities() {
    return [
      new MetricsCapability(),
    ];
  };
};
