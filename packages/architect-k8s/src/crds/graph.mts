import { Component, GVK, KubeResource, ResolvedComponent, Result, ValidationError, ValidationErrorLevel } from '@perdition/architect-core';

import * as api from 'kubernetes-models';

export interface KubeCRDRequirement {
  component: ResolvedComponent;
  exports: GVK[];
  requirements: GVK[];
};

export interface KubeCRDDependencyOptions {
  /**
   * GVKs for which CRD dependency checks should be skipped, assuming they already exist within the target.
   */
  ignoredGVKs?: GVK[];

  /**
   * Groups for which CRD dependency checks should be skipped, assuming they already exist within the target.
   */
  ignoredCRDGroups?: string[];
};

/**
 * CRD dependency graph, used at second stage validation
 */
export class KubeCRDDependencyGraph {
  private readonly result: Result;
  public readonly data: Record<string, KubeCRDRequirement>;
  private readonly options: KubeCRDDependencyOptions;

  private constructor(result: Result, data: Record<string, KubeCRDRequirement>, options: KubeCRDDependencyOptions = {}) {
    this.result = result;
    this.data = data;
    this.options = options;
  };

  /**
   * Extracts and returns the GVKs each component exports (by virtue of declaring CRDs)
   * plus the GVKs declared as resources by each component, in order to establish dependencies
   */
  public static create(result: Result, options: KubeCRDDependencyOptions = {}): KubeCRDDependencyGraph {
    function transformCRDs(resources: KubeResource[]): GVK[] {
      const gvks: GVK[] = [];
      resources.forEach(r => {
        if (r.kind !== 'CustomResourceDefinition') return;
        const crd = r as api.apiextensionsK8sIo.v1.CustomResourceDefinition;
        gvks.push(...GVK.fromCRD(crd));
      });

      return gvks;
    };

    const data = Object.fromEntries(Object.entries(result.components).map(([k, v]): [string, KubeCRDRequirement] => {
      const resources = v as KubeResource[] ?? [];
      const requirement: KubeCRDRequirement = {
        component: result.graph.components[k],
        exports: transformCRDs(resources),
        requirements: GVK.uniqueGVKs(resources),
      };

      return [k, requirement];
    }));

    return new KubeCRDDependencyGraph(result, data, options);
  };

  /**
   * Runs CRD requirement validation and appends ValidationErrors to component results that fail CRD requirements.
   */
  public validate() {
    // build a list of all unique GVKs in the cluster
    const allGVKs: GVK[] = [];
    Object.values(this.data).forEach(v => {
      v.exports.forEach(gvk => {
        if (allGVKs.findIndex(g => g.compare(gvk)) > -1) return;
        allGVKs.push(gvk);
      });
    });

    // validate all exports and requirements
    Object.entries(this.data).forEach(([k, v]) => {
      // validate export uniqueness
      Object.entries(this.data).forEach(([k2, v2]) => {
        if (k === k2) return;
        const both = v.exports.filter(r => v2.exports.findIndex(g => r.compare(g)) > -1);
        if (both.length <= 0) return;

        this.result.graph.errors.push(new ValidationError(`both components ${k} and ${k2} export CRDs for resources ${both.join(', ')}`, ValidationErrorLevel.ERROR, this.result.graph.target.toString()));
      });

      // validate requirement validity
      const missing = v.requirements.filter(r => {
        if (r.isAPIModel()) return false;
        //if ((this.options.ignoredCRDGroups || []).some(g => wcmatch(g)(r.group!))) return false;
        if ((this.options.ignoredGVKs || []).some(g => g.compare(r))) return false;

        return allGVKs.findIndex(g => g.compare(r)) <= -1;
      });

      if (missing.length > 0) {
        v.component.errors.push(new ValidationError(`attempted to use resources missing from cluster: ${missing.join(', ')}`, ValidationErrorLevel.ERROR, v.component.component.toString()));
      };
    });
  };

  /**
   * Attempts to satisfy CRD dependencies by finding components that export CRDs that other components need and appending dependencies between them.
   */
  public applyDependencies() {
    Object.entries(this.data).forEach(([k, v]) => {
      // find the components that export the CRDs that this one needs
      const dependencies: Component[] = v.requirements.reduce((prev, cur) => {
        let name: string | undefined = undefined;
        for (const [k2, v2] of Object.entries(this.data)) {
          const found = v2.exports.filter(e => cur.compare(e));
          if (found.length <= 0) {
            continue;
          } else {
            name = k2;
            break;
          };
        };

        if (name === undefined) return prev;
        const component = this.result.graph.components[name].component;
        if (prev.indexOf(component) !== -1) return prev;

        return prev.concat(component);
      }, [] as Component[]);

      const component = this.result.graph.components[k];
      dependencies.forEach(d => {
        // no self-dependencies
        if (d.clazz === component.component.clazz) return;
        if (component.dependencies.indexOf(d) !== -1) return;
        component.dependencies.push(d);
      });
    });
  };
};
