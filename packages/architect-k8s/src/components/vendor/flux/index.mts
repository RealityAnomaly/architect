import { Architect, KubeResourceTree } from '@perdition/architect-core';
import { Kubernetes, KubeComponent, KubeComponentArgs } from '../../../index.mts';

export interface FluxCDComponentOptions extends KubeComponentArgs {
  version?: string;
};

interface FluxCDComponentResources {
  manifests?: KubeResourceTree;
};

@Architect.class('architect.glassway.net/fluxcd')
@Kubernetes.namespace('flux-system')
export class FluxCDComponent extends KubeComponent<FluxCDComponentResources, FluxCDComponentOptions> {
  public async build(resources: FluxCDComponentResources = {}) {
    //const url = `https://github.com/fluxcd/flux2/releases/${this.props.version ?? "v2.4.0"}/download/install.yaml`; // "object is not a function?"
    const url = `https://github.com/fluxcd/flux2/releases/download/v2.4.0/install.yaml`;
    resources.manifests = await this.httpFetch(url, true);

    return super.build(resources);
  };
};
