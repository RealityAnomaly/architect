import * as api from 'kubernetes-models';

import { Architect, KubeResourceTree } from '@perdition/architect-core';
import { KubeComponentHelm, KubeComponentHelmResources } from '@perdition/architect-k8s';

import model from './architect.json' with { type: 'json' };

interface KyvernoComponentResources extends KubeComponentHelmResources {
  namespace?: api.v1.Namespace;
  release?: KubeResourceTree;
};

@Architect.component(model['kyverno'])
export class KyvernoComponent extends KubeComponentHelm<KyvernoComponentResources> {
  public init(): void {
    this.setDefaults({
      values: {
        installCRDs: true,
      },
    });
  };

  public async build(resources: KyvernoComponentResources = {}) {
    resources.namespace = new api.v1.Namespace({
      metadata: { name: this.context.namespace },
    });

    return super.build(resources);
  };
};
