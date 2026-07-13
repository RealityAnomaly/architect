import { KubeResourceTree } from '@glassway/architect';

import { KubeComponent, KubeComponentArgs } from '../../../component.ts';
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
  public override async build(resources: FluxCDComponentResources = {}): Promise<FluxCDComponentResources> {
    const url = `https://github.com/fluxcd/flux2/releases/${this.props.version ?? "v2.9.2"}/download/install.yaml`;
    resources.manifests = await this.httpFetch(url, true);

    return super.build(resources);
  }
}
