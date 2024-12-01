import { IObjectMeta } from '@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta';
import _ from 'lodash';

/**
 * Non-exhaustive blacklist of Kubernetes resources that may not have attached namespaces
 */
const RESOURCE_NAMESPACE_BLACKLIST: string[] = [
  // kubernetes API
  'ComponentStatus', 'Namespace', 'Node', 'PersistentVolume',
  'MutatingWebhookConfiguration', 'ValidatingWebhookConfiguration', 'CustomResourceDefinition',
  'APIService', 'TokenReview', 'SelfSubjectAccessReview', 'SelfSubjectRulesReview', 'SubjectAccessReview',
  'CertificateSigningRequest', 'FlowSchema', 'PriorityLevelConfiguration', 'NodeMetrics',
  'IngressClass', 'RuntimeClass', 'PodSecurityPolicy', 'ClusterRoleBinding', 'ClusterRole', 'PriorityClass',
  'VolumeSnapshotClass', 'VolumeSnapshotContent', 'CSIDriver', 'CSINode', 'StorageClass', 'VolumeAttachment',

  // HACK: from CRDs (these should ideally be moved)
  // Could we extract this information from the CRD models?
  'CDIConfig', 'CDI', 'ObjectTransfer', 'StorageProfile', 'ClusterIssuer',
  'CiliumClusterwideNetworkPolicy', 'CiliumEgressNATPolicy', 'CiliumExternalWorkload', 'CiliumIdentity', 'CiliumNode',
  'ServerBinding', 'ClusterPolicy', 'ClusterReportChangeRequest', 'Environment', 'ServerClass', 'Server',
  'NetworkAddonsConfig', 'ClusterPolicyReport',
];

/**
 * Represents the full API kind of a Kubernetes API resource
 */
export interface KubeResourceKind {
  apiVersion: string;
  kind: string;
};

/**
 * Represents a full Kubernetes API object
 */
export interface KubeResource extends KubeResourceKind {
  metadata?: IObjectMeta;
  spec?: unknown;
};

/**
 * Resource with unknown optional keys
 */
export interface KubeUnkResource extends KubeResource {
  [key: string]: unknown;
};

/**
 * Represents the constructor of a resource
 */
export type KubeResourceConstructor = new (data: KubeResource) => KubeResource;

/**
 * Represents a recursive set or map of resources
 */
export type KubeResourceTree = KubeResource | KubeResource[] | Record<string, KubeResource>;

export class KubeResourceUtilities {
  /**
   * Returns whether this anonymous value is a resource
   */
  static isResource(value: object): value is KubeUnkResource {
    return (
      Object.hasOwn(value, 'apiVersion') &&
      Object.hasOwn(value, 'kind')
    );
  };

  /**
   * Returns the cluster-unique resource identifier of the specified resource
   */
  static resourceId(data: KubeResource): string {
    const builder: string[] = [];
    const components = [data.apiVersion, data.kind, data.metadata?.namespace, data.metadata?.name];
    components.forEach(c => {
      if (c === undefined || c === null) return;
      builder.push(c.toLowerCase().replace('/', '_'));
    });

    return builder.join('.');
  };

  /**
   * Normalises a recursive list or set of potential resources into a flat list of resources.
   */
  static normaliseResources(value: unknown): KubeResource[] {
    if (value === undefined || value === null) return [];

    let result: KubeResource[];
    if (Array.isArray(value)) {
      result = value.map(v => KubeResourceUtilities.normaliseResources(v)).flat();
    } else if (KubeResourceUtilities.isResource(value)) {
      result = [value];
    } else {
      result = KubeResourceUtilities.normaliseResources(Object.values(value));
    };

    return result;
  };

  /**
   * Applies a default namespace to a resource if it is namespaced and does not already have one defined
   */
  static defaultNamespace(resource: KubeResource, def: string): KubeResource {
    if (RESOURCE_NAMESPACE_BLACKLIST.includes(resource.kind)) {
      return resource;
    };

    const namespace = resource.metadata?.namespace;
    if (namespace === null || namespace === undefined) {
      resource = _.merge(resource, {
        metadata: { namespace: def },
      });
    };

    return resource;
  };

  /**
   * Runs fixup actions on API objects
   */
  static fixupResource(resource: KubeResource): KubeResource {
    const metadata: IObjectMeta = {};

    // appends our identifier label
    // metadata.labels = {
    //   'k8s.ark.alex0.net/defined': 'true',
    // };

    // disables pruning on CRDs and PVCs (CRITICAL to not break stuff when Kustomizations are deleted)
    // TODO: only append this when FluxCD is actually being used
    if (resource.kind === 'CustomResourceDefinition' || resource.kind === 'PersistentVolumeClaim') {
      if (metadata.annotations == null) {
        metadata.annotations = {};
      };

      metadata.annotations['kustomize.toolkit.fluxcd.io/prune'] = 'disabled';
    };

    resource = _.merge(resource, { metadata: metadata });

    // removes null annotations/labels
    if (resource.metadata?.annotations !== undefined && resource.metadata.annotations === null) {
      delete resource.metadata.annotations;
    };

    if (resource.metadata?.labels !== undefined && resource.metadata.labels === null) {
      delete resource.metadata.labels;
    };

    // removes null creationTimestamp (works around problem with some specific crds)
    if (resource.metadata?.creationTimestamp !== undefined && resource.metadata?.creationTimestamp === null) {
      delete resource.metadata.creationTimestamp;
    }

    // removes null `data` on config maps (Helm will sometimes break this)
    if (resource.kind === 'ConfigMap') {
      const obj = resource as object;
      if ('data' in obj && obj.data === null) {
        delete obj.data;
      };
    };

    // removes namespaces from resources that are not namespaced
    if (resource.metadata?.namespace !== undefined && RESOURCE_NAMESPACE_BLACKLIST.includes(resource.kind)) {
      delete resource.metadata.namespace;
    };

    return resource;
  };
};
