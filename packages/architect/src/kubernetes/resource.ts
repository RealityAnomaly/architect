import { IObjectMeta } from "@glassway/kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import * as toolkit from "@es-toolkit/es-toolkit";
import { GVK } from './types/index.ts';

/**
 * Non-exhaustive blacklist of Kubernetes resources that may not have attached namespaces
 */
const RESOURCE_NAMESPACE_BLACKLIST: string[] = [
  // kubernetes API
  // kubectl api-resources --namespaced=false
  "ComponentStatus",
  "Namespace",
  "Node",
  "PersistentVolume",
  "MutatingAdmissionPolicy",
  "MutatingAdmissionPolicyBinding",
  "MutatingWebhookConfiguration",
  "ValidatingAdmissionPolicy",
  "ValidatingAdmissionPolicyBinding",
  "ValidatingWebhookConfiguration",
  "CustomResourceDefinition",
  "APIService",
  "SelfServiceReview",
  "TokenReview",
  "SelfSubjectAccessReview",
  "SelfSubjectRulesReview",
  "SubjectAccessReview",
  "CertificateSigningRequest",
  "FlowSchema",
  "PriorityLevelConfiguration",
  "IngressClass",
  "IPAddress",
  "ServiceCIDR",
  "RuntimeClass",
  "ClusterRoleBinding",
  "ClusterRole",
  "DeviceClass",
  "ResourceSlice",
  "PriorityClass",
  "CSIDriver",
  "CSINode",
  "StorageClass",
  "VolumeAttachment",
  "VolumeAttributesClass"
];

/**
 * Represents the full API kind of Kubernetes API resource
 */
export interface KubeResourceKind {
  apiVersion: string;
  kind: string;
}

/**
 * Represents a full Kubernetes API object
 */
export interface KubeResource extends KubeResourceKind {
  metadata?: IObjectMeta;
  spec?: unknown;
  status?: unknown;
}

/**
 * Resource with unknown optional keys
 */
export interface KubeUnkResource extends KubeResource {
  [key: string]: unknown;
}

/**
 * Represents the constructor of a resource
 */
export interface KubeResourceConstructor {
  new (data: KubeResource): KubeResource;
  scope: 'Cluster' | 'Namespaced' | '\\*';
}

/**
 * Represents a recursive set or map of resources
 */
export type KubeResourceTree =
  | KubeResource
  | KubeResource[]
  | Record<string, KubeResource>;

export interface KubeResourceFilter {
  /**
   * List of cluster-wide resource types to permit
   */
  clusterTypes?: string[];

  /**
   * List of external namespaces to permit
   */
  namespaces?: string[];
}

export class KubeResourceUtilities {
  /**
   * Returns whether this anonymous value is a resource
   */
  static isResource(value: object): value is KubeUnkResource {
    return (
      Object.hasOwn(value, "apiVersion") &&
      Object.hasOwn(value, "kind")
    );
  }

  /**
   * Returns the cluster-unique resource identifier of the specified resource
   */
  static resourceId(data: KubeResource): string {
    const builder: string[] = [];
    const components = [
      data.apiVersion,
      data.kind,
      data.metadata?.namespace,
      data.metadata?.name,
    ];
    components.forEach((c) => {
      if (c === undefined || c === null) return;
      builder.push(c.toLowerCase().replace("/", "_"));
    });

    return builder.join(".");
  }

  static resourceName(data: KubeResource): string {
    return `${data.kind} ${data.metadata?.namespace ?? "default"}/${data.metadata?.name}`;
  }

  /**
   * Normalises a recursive list or set of potential resources into a flat list of resources.
   */
  static normaliseResources(value: unknown): KubeResource[] {
    if (value === undefined || value === null) return [];

    let result: KubeResource[];
    if (Array.isArray(value)) {
      result = value.map((v) => KubeResourceUtilities.normaliseResources(v))
        .flat();
    } else if (KubeResourceUtilities.isResource(value)) {
      result = [value];
    } else {
      result = KubeResourceUtilities.normaliseResources(Object.values(value));
    }

    return result;
  }

  static filterResources(resources: KubeResource[], namespace: string | undefined, context: string, filter?: KubeResourceFilter, throws: boolean = true): KubeResource[] {
    if (!namespace) {
      if (throws) {
        throw new Error(`${context} has filtering enabled but no namespace was provided for validation`);
      }

      return resources;
    }

    // Ensure all namespaced resources have a default namespace
    resources = resources.map(r => KubeResourceUtilities.defaultNamespace(r, namespace));

    return resources.filter(resource => {
      const name = KubeResourceUtilities.resourceName(resource);

      if (!this.isNamespaced(resource)) {
        if (!filter?.clusterTypes?.includes(resource.kind)) {
          if (throws) throw new Error(`${context} creates disallowed cluster-wide resource: ${name}`);
          return false;
        }
      } else if (resource.metadata?.namespace !== namespace) {
        if (!filter?.namespaces?.includes(resource.metadata!.namespace!)) {
          if (throws) throw new Error(`${context} creates resource outside its namespace: ${name} (expected ${namespace}, got ${resource.metadata?.namespace})`);
          return false;
        }
      }

      return true;
    });
  }

  static isNamespaced(resource: KubeResource): boolean {
    // find the CRD by the GVK and check its scope
    const gvk = GVK.fromResource(resource);
    if (gvk.isAPIModel() && RESOURCE_NAMESPACE_BLACKLIST.includes(resource.kind)) return false;

    const ctor = resource.constructor as KubeResourceConstructor;
    return !(ctor.scope && ctor.scope === 'Cluster');
  }

  /**
   * Applies a default namespace to a resource if it is namespaced and does not already have one defined
   */
  static defaultNamespace(resource: KubeResource, def?: string): KubeResource {
    if (!this.isNamespaced(resource)) return resource;

    const namespace = resource.metadata?.namespace;
    if (namespace === null || namespace === undefined) {
      resource = toolkit.merge(resource, {
        metadata: { namespace: def ?? 'default' },
      });
    }

    return resource;
  }

  /**
   * Runs fixup actions on API objects
   */
  static fixupResource(resource: KubeResource): KubeResource {
    const metadata: IObjectMeta = {};

    // disables pruning on CRDs and PVCs (CRITICAL to not break stuff when Kustomizations are deleted)
    // TODO: only append this when FluxCD is actually being used
    if (
      resource.kind === "CustomResourceDefinition" ||
      resource.kind === "PersistentVolumeClaim"
    ) {
      if (metadata.annotations == null) {
        metadata.annotations = {};
      }

      metadata.annotations["kustomize.toolkit.fluxcd.io/prune"] = "disabled";
    }

    resource = toolkit.merge(resource, { metadata: metadata });

    // removes null annotations/labels
    if (
      resource.metadata?.annotations !== undefined &&
      resource.metadata.annotations === null
    ) {
      delete resource.metadata.annotations;
    }

    if (
      resource.metadata?.labels !== undefined &&
      resource.metadata.labels === null
    ) {
      delete resource.metadata.labels;
    }

    // removes null creationTimestamp (works around problem with some specific crds)
    if (
      resource.metadata?.creationTimestamp !== undefined &&
      resource.metadata?.creationTimestamp === null
    ) {
      delete resource.metadata.creationTimestamp;
    }

    // removes null `data` on config maps (Helm will sometimes break this)
    if (resource.kind === "ConfigMap") {
      const obj = resource as object;
      if ("data" in obj) {
        if (obj.data === undefined || obj.data === null) {
          delete obj.data;
        } else {
          for (
            const [k, v] of Object.entries(obj.data as Record<string, unknown>)
          ) {
            if (v === undefined || v === null) {
              delete (obj.data as Record<string, unknown>)[k];
            }
          }
        }
      }
    }

    // removes namespaces from resources that are not namespaced
    if (
      resource.metadata?.namespace !== undefined &&
      RESOURCE_NAMESPACE_BLACKLIST.includes(resource.kind)
    ) {
      delete resource.metadata.namespace;
    }

    return resource;
  }
}
