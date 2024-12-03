import * as api from 'kubernetes-models';

import { Architect, ConfigurationContext } from '@perdition/architect-core';
import { KubeComponentHelm, KubeComponentHelmResources } from '@perdition/architect-k8s';

import model from './architect.json' with { type: 'json' };

interface RookOperatorComponentResources extends KubeComponentHelmResources {
  namespace?: api.v1.Namespace;
};

@Architect.component(model['rook-operator'])
export class RookOperatorComponent extends KubeComponentHelm<RookOperatorComponentResources> {
  public configure(_context: ConfigurationContext) {
    // TODO: only if prometheus operator enabled
    this.props.$set({
      values: {
        monitoring: {
          enabled: true,
        },
      }
    })
  };

  public async build(resources: RookOperatorComponentResources = {}) {
    resources.namespace = new api.v1.Namespace({
      metadata: { name: this.context.namespace },
    });

    return super.build(resources);
  };
};
