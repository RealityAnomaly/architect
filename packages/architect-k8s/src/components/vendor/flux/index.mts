import { Architect, KubeResourceTree } from '@perdition/architect-core';
import { KubeComponent, KubeComponentArgs } from '../../../index.mts';
import model from './architect.json' with { type: 'json' };

export interface FluxCDComponentOptions extends KubeComponentArgs {
  version?: string;
};

interface FluxCDComponentResources {
  manifests?: KubeResourceTree;
};

@Architect.component(model)
export class FluxCDComponent extends KubeComponent<FluxCDComponentResources, FluxCDComponentOptions> {
  public async build(resources: FluxCDComponentResources = {}) {
    //const url = `https://github.com/fluxcd/flux2/releases/${this.props.version ?? "v2.4.0"}/download/install.yaml`; // "object is not a function?"
    const url = `https://github.com/fluxcd/flux2/releases/download/v2.4.0/install.yaml`;
    resources.manifests = await this.httpFetch(url, true);

    return super.build(resources);
  };
};
