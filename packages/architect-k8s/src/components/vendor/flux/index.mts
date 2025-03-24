import { KubeResourceTree } from '@perdition/architect-core';

import { KubeComponent, KubeComponentArgs } from '../../../component.mts';
import model from './architect.json' with { type: 'json' };

export interface FluxCDComponentOptions extends KubeComponentArgs {
  version?: string;
}

interface FluxCDComponentResources {
  manifests?: KubeResourceTree;
}

@KubeComponent.decorate(model)
export class FluxCDComponent
  extends KubeComponent<FluxCDComponentResources, FluxCDComponentOptions> {
  public override async build(resources: FluxCDComponentResources = {}) {
    //const url = `https://github.com/fluxcd/flux2/releases/${this.props.version ?? "v2.4.0"}/download/install.yaml`; // "object is not a function?"
    const url =
      `https://github.com/fluxcd/flux2/releases/download/v2.4.0/install.yaml`;
    resources.manifests = await this.httpFetch(url, true);

    return super.build(resources);
  }
}
