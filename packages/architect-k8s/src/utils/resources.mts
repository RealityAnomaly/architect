import { IObjectMeta } from '@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta';
import _ from 'lodash';

import { isResource, Resource } from '../resource.mts';

/**
 * Non-exhaustive blacklist of Kubernetes resources that may not have attached namespaces
 */
const namespaceBlacklist: string[] = [
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
 * Normalises a recursive list or set of potential resources into a flat list of resources.
 */
export function normaliseResources(value: unknown): Resource[] {
  if (value === undefined || value === null) return [];

  let result: Resource[];
  if (Array.isArray(value)) {
    result = value.map(v => normaliseResources(v)).flat();
  } else if (isResource(value)) {
    result = [value];
  } else {
    result = normaliseResources(Object.values(value));
  };

  return result;
};

/**
 * Runs fixup actions on API objects
 */
export function fixupResource(resource: Resource): Resource {
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
  if (resource.metadata?.namespace !== undefined && namespaceBlacklist.includes(resource.kind)) {
    delete resource.metadata.namespace;
  };

  return resource;
};

/**
 * Applies a default namespace to a resource if it is namespaced and does not already have one defined
 */
export function defaultNamespace(resource: Resource, def: string): Resource {
  if (namespaceBlacklist.includes(resource.kind)) {
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

interface Validator {
  validate(): void | Promise<void>;
};

export function isValidator(value: unknown): value is Validator {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return !!value && typeof (value as any).validate === 'function';
};
