import * as api from 'kubernetes-models';

import { ConfigurationContext } from '@perdition/architect-core';
import { KubeComponentHelm, KubeComponentHelmResources, } from '../../builders/helm.mts';

import model from './architect.json' with { type: 'json' };

interface RookOperatorComponentResources extends KubeComponentHelmResources {
  namespace?: api.v1.Namespace;
}

@KubeComponentHelm.decorate(model["rook-operator"])
export class RookOperatorComponent
  extends KubeComponentHelm<RookOperatorComponentResources> {
  public override configure(_context: ConfigurationContext) {
    // TODO: only if prometheus operator enabled
    this.props.$set({
      values: {
        monitoring: {
          enabled: true,
        },
      },
    });
  }

  public override async build(resources: RookOperatorComponentResources = {}) {
    resources.namespace = new api.v1.Namespace({
      metadata: { name: this.context.namespace },
    });

    return super.build(resources);
  }
}
