import { Component, ResolvedComponent } from '@perdition/architect-core';
import { kustomizeToolkitFluxcdIo } from '../../generated/crds/index.ts';
import { KubeTarget } from '../../target.mts';
import { KubeContext } from '../../context.mts';

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
    return `cid-${component.context.name}`;
  };

  public componentObject(resolved: ResolvedComponent, mode: FluxCDMode): kustomizeToolkitFluxcdIo.v1.Kustomization {
    const ctx = resolved.component.context as KubeContext;
    const name = ctx.name;

    return new kustomizeToolkitFluxcdIo.v1.Kustomization({
      metadata: {
        name: this.componentName(resolved.component),
        namespace: ctx.namespace,
      },
      spec: {
        dependsOn: resolved.dependencies.map(d => {
          return {
            name: this.componentName(d),
            namespace: (d.context as KubeContext).namespace,
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
