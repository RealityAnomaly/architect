import { Component } from '@perdition/architect-core/src';
import { ResolvedComponent } from '@perdition/architect-core/src/result';
import { kustomizeToolkitFluxcdIo } from '@perdition/architect-k8s-crds/src';
import { KubeComponentContext } from '../../component';
import { KubeTarget } from '../../target';

interface FluxCDSourceRef {
  apiVersion?: string | undefined;
  kind: 'GitRepository' | 'Bucket';
  name: string;
  namespace?: string | undefined;
};

export interface FluxCDMode {
  sourceRef: FluxCDSourceRef;
};

export class FluxCDController {
  public readonly target: KubeTarget;

  constructor(target: KubeTarget) {
    this.target = target;
  };

  private componentName(component: Component): string {
    return `vtx-c-${component.name}`;
  };

  public componentObject(resolved: ResolvedComponent, mode: FluxCDMode): kustomizeToolkitFluxcdIo.v1beta2.Kustomization {
    const name = resolved.component.name;
    const ctx = resolved.component.context as KubeComponentContext;

    return new kustomizeToolkitFluxcdIo.v1beta2.Kustomization({
      metadata: {
        name: this.componentName(resolved.component),
        namespace: ctx.namespace,
      },
      spec: {
        dependsOn: resolved.dependencies.map(d => {
          return {
            name: this.componentName(d),
            namespace: (d.context as KubeComponentContext).namespace,
          };
        }),
        interval: '10m0s',
        path: `./components/${ctx.namespace}/${name}`,
        prune: true,
        sourceRef: mode.sourceRef,
        wait: true,
      },
    });
  };
};
