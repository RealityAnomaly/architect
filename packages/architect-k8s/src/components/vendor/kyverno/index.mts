import * as api from 'npm:kubernetes-models';

import { KubeResourceTree } from 'jsr:@perdition/architect-core';
import { KubeComponentHelm, KubeComponentHelmResources } from 'jsr:@perdition/architect-k8s';

import model from './architect.json' with { type: 'json' };

interface KyvernoComponentResources extends KubeComponentHelmResources {
  namespace?: api.v1.Namespace;
  release?: KubeResourceTree;
};

@KubeComponentHelm.decorate(model['kyverno'])
export class KyvernoComponent extends KubeComponentHelm<KyvernoComponentResources> {
  public override init(): void {
    this.setDefaults({
      values: {
        installCRDs: true,
      },
    });
  };

  public override async build(resources: KyvernoComponentResources = {}) {
    resources.namespace = new api.v1.Namespace({
      metadata: { name: this.context.namespace },
    });

    return super.build(resources);
  };
};
