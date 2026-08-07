import { IObjectMeta } from "@glassway/kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/FluxcdControlplaneIoV1FluxInstance.js";

/**
 * FluxInstance is the Schema for the fluxinstances API
 */
export interface IFluxInstance {
  /**
 * APIVersion defines the versioned schema of this representation of an object.
 * Servers should convert recognized schemas to the latest internal value, and
 * may reject unrecognized values.
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "fluxcd.controlplane.io/v1";
/**
 * Kind is a string value representing the REST resource this object represents.
 * Servers may infer this from the endpoint the client submits requests to.
 * Cannot be updated.
 * In CamelCase.
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "FluxInstance";
"metadata"?: IObjectMeta;
/**
 * FluxInstanceSpec defines the desired state of FluxInstance
 */
"spec"?: {
  /**
 * Cluster holds the specification of the Kubernetes cluster.
 */
"cluster"?: {
  /**
 * Domain is the cluster domain used for generating the FQDN of services.
 * Defaults to 'cluster.local'.
 */
"domain"?: string;
/**
 * Multitenant enables the multitenancy lockdown. Defaults to false.
 */
"multitenant"?: boolean;
/**
 * MultitenantWorkloadIdentity enables the multitenancy lockdown for
 * workload identity. Defaults to false.
 */
"multitenantWorkloadIdentity"?: boolean;
/**
 * NetworkPolicy restricts network access to the current namespace.
 * Defaults to true.
 */
"networkPolicy"?: boolean;
/**
 * ObjectLevelWorkloadIdentity enables the feature gate
 * required for object-level workload identity.
 * This feature is only available in Flux v2.6.0 and later.
 */
"objectLevelWorkloadIdentity"?: boolean;
/**
 * Size defines the vertical scaling profile of the Flux controllers.
 * The size is used to determine the concurrency and CPU/Memory limits for the Flux controllers.
 * Accepted values are: 'small', 'medium' and 'large'.
 */
"size"?: "small" | "medium" | "large";
/**
 * TenantDefaultDecryptionServiceAccount is the name of the service account
 * to use as default for kustomize-controller SOPS decryption when the
 * multitenant lockdown for workload identity is enabled. Defaults to the
 * 'default' service account from the tenant namespace.
 */
"tenantDefaultDecryptionServiceAccount"?: string;
/**
 * TenantDefaultKubeConfigServiceAccount is the name of the service account
 * to use as default for kustomize-controller and helm-controller remote
 * cluster access via spec.kubeConfig.configMapRef when the multitenant
 * lockdown for workload identity is enabled. Defaults to the 'default'
 * service account from the tenant namespace.
 */
"tenantDefaultKubeConfigServiceAccount"?: string;
/**
 * TenantDefaultServiceAccount is the name of the service account
 * to use as default when the multitenant lockdown is enabled, for
 * kustomize-controller and helm-controller.
 * This field will also be used for multitenant workload identity
 * lockdown for source-controller, notification-controller,
 * image-reflector-controller and image-automation-controller.
 * Defaults to the 'default' service account from the tenant namespace.
 */
"tenantDefaultServiceAccount"?: string;
/**
 * Type specifies the distro of the Kubernetes cluster.
 * Defaults to 'kubernetes'.
 */
"type"?: "kubernetes" | "openshift" | "aws" | "azure" | "gcp";
};
/**
 * CommonMetadata specifies the common labels and annotations that are
 * applied to all resources. Any existing label or annotation will be
 * overridden if its key matches a common one.
 */
"commonMetadata"?: {
  /**
 * Annotations to be added to the object's metadata.
 */
"annotations"?: {
  [key: string]: string;
};
/**
 * Labels to be added to the object's metadata.
 */
"labels"?: {
  [key: string]: string;
};
};
/**
 * Components is the list of controllers to install.
 * Defaults to the core Flux controllers:
 *   - source-controller
 *   - kustomize-controller
 *   - helm-controller
 *   - notification-controller
 */
"components"?: Array<"source-controller" | "kustomize-controller" | "helm-controller" | "notification-controller" | "image-reflector-controller" | "image-automation-controller" | "source-watcher">;
/**
 * Distribution specifies the version and container registry to pull images from.
 */
"distribution": {
  /**
 * Artifact is the URL to the OCI artifact containing
 * the latest Kubernetes manifests for the distribution,
 * e.g. 'oci://ghcr.io/controlplaneio-fluxcd/flux-operator-manifests:latest'.
 */
"artifact"?: string;
/**
 * ArtifactPullSecret is the name of the Kubernetes secret
 * to use for pulling the Kubernetes manifests for the distribution specified in the Artifact field.
 */
"artifactPullSecret"?: string;
/**
 * ImagePullSecret is the name of the Kubernetes secret
 * to use for pulling images.
 */
"imagePullSecret"?: string;
/**
 * Registry address to pull the distribution images from
 * e.g. 'ghcr.io/fluxcd'.
 */
"registry": string;
/**
 * Variant specifies the Flux distribution flavor stored
 * in the registry.
 */
"variant"?: "upstream-alpine" | "enterprise-alpine" | "enterprise-distroless" | "enterprise-distroless-fips";
/**
 * Version semver expression e.g. '2.x', '2.3.x'.
 */
"version": string;
};
/**
 * Kustomize holds a set of patches that can be applied to the
 * Flux installation, to customize the way Flux operates.
 */
"kustomize"?: {
  /**
 * Strategic merge and JSON patches, defined as inline YAML objects,
 * capable of targeting objects based on kind, label and annotation selectors.
 */
"patches"?: Array<{
  /**
 * Patch contains an inline StrategicMerge patch or an inline JSON6902 patch with
 * an array of operation objects.
 */
"patch": string;
/**
 * Target points to the resources that the patch document should be applied to.
 */
"target"?: {
  /**
 * AnnotationSelector is a string that follows the label selection expression
 * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
 * It matches with the resource annotations.
 */
"annotationSelector"?: string;
/**
 * Group is the API group to select resources from.
 * Together with Version and Kind it is capable of unambiguously identifying and/or selecting resources.
 * https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
 */
"group"?: string;
/**
 * Kind of the API Group to select resources from.
 * Together with Group and Version it is capable of unambiguously
 * identifying and/or selecting resources.
 * https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
 */
"kind"?: string;
/**
 * LabelSelector is a string that follows the label selection expression
 * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
 * It matches with the resource labels.
 */
"labelSelector"?: string;
/**
 * Name to match resources with.
 */
"name"?: string;
/**
 * Namespace to select resources from.
 */
"namespace"?: string;
/**
 * Version of the API Group to select resources from.
 * Together with Group and Kind it is capable of unambiguously identifying and/or selecting resources.
 * https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
 */
"version"?: string;
};
}>;
};
/**
 * MigrateResources instructs the controller to migrate the Flux custom resources
 * from the previous version to the latest API version specified in the CRD.
 * Defaults to true.
 */
"migrateResources"?: boolean;
/**
 * Sharding holds the specification of the sharding configuration.
 */
"sharding"?: {
  /**
 * Key is the label key used to shard the resources.
 */
"key"?: string;
/**
 * Shards is the list of shard names.
 */
"shards": Array<string>;
/**
 * Storage defines if the source-controller shards
 * should use an emptyDir or a persistent volume claim for storage.
 * Accepted values are 'ephemeral' or 'persistent', defaults to 'ephemeral'.
 * When set to 'persistent', the '.spec.storage' field must be set.
 */
"storage"?: "ephemeral" | "persistent";
};
/**
 * Storage holds the specification of the source-controller
 * persistent volume claim.
 */
"storage"?: {
  /**
 * Class is the storage class to use for the PVC.
 */
"class": string;
/**
 * Size is the size of the PVC.
 */
"size": string;
};
/**
 * Sync specifies the source for the cluster sync operation.
 * When set, a Flux source (GitRepository, OCIRepository or Bucket)
 * and Flux Kustomization are created to sync the cluster state
 * with the source repository.
 */
"sync"?: {
  /**
 * Interval is the time between syncs.
 */
"interval"?: string;
/**
 * Kind is the kind of the source.
 */
"kind": "OCIRepository" | "GitRepository" | "Bucket";
/**
 * Name is the name of the Flux source and kustomization resources.
 * When not specified, the name is set to the namespace name of the FluxInstance.
 */
"name"?: string;
/**
 * Path is the path to the source directory containing
 * the kustomize overlay or plain Kubernetes manifests.
 */
"path": string;
/**
 * Provider specifies OIDC provider for source authentication.
 * For OCIRepository and Bucket the provider can be set to 'aws', 'azure' or 'gcp'.
 * For GitRepository the provider can be set to 'aws' (requires Flux 2.9 or later),
 * 'azure' or 'github'.
 * To disable OIDC authentication the provider can be set to 'generic' or left empty.
 */
"provider"?: "generic" | "aws" | "azure" | "gcp" | "github";
/**
 * PullSecret specifies the Kubernetes Secret containing the
 * authentication credentials for the source.
 * For Git over HTTP/S sources, the secret must contain username and password fields.
 * For Git over SSH sources, the secret must contain known_hosts and identity fields.
 * For OCI sources, the secret must be of type kubernetes.io/dockerconfigjson.
 * For Bucket sources, the secret must contain accesskey and secretkey fields.
 */
"pullSecret"?: string;
/**
 * Ref is the source reference, can be a Git ref name e.g. 'refs/heads/main',
 * an OCI tag e.g. 'latest' or a bucket name e.g. 'flux'.
 */
"ref": string;
/**
 * URL is the source URL, can be a Git repository HTTP/S or SSH address,
 * an OCI repository address or a Bucket endpoint.
 */
"url": string;
};
/**
 * Wait instructs the controller to check the health of all the reconciled
 * resources. Defaults to true.
 */
"wait"?: boolean;
};
/**
 * FluxInstanceStatus defines the observed state of FluxInstance
 */
"status"?: {
  /**
 * Components contains the container images used by the components.
 */
"components"?: Array<{
  /**
 * Digest of the container image.
 */
"digest"?: string;
/**
 * Name of the component.
 */
"name": string;
/**
 * Repository address of the container image.
 */
"repository": string;
/**
 * Tag of the container image.
 */
"tag": string;
}>;
/**
 * Conditions contains the readiness conditions of the object.
 */
"conditions"?: Array<{
  /**
 * lastTransitionTime is the last time the condition transitioned from one status to another.
 * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
 */
"lastTransitionTime": string;
/**
 * message is a human readable message indicating details about the transition.
 * This may be an empty string.
 */
"message": string;
/**
 * observedGeneration represents the .metadata.generation that the condition was set based upon.
 * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
 * with respect to the current state of the instance.
 */
"observedGeneration"?: number;
/**
 * reason contains a programmatic identifier indicating the reason for the condition's last transition.
 * Producers of specific condition types may define expected values and meanings for this field,
 * and whether the values are considered a guaranteed API.
 * The value should be a CamelCase string.
 * This field may not be empty.
 */
"reason": string;
/**
 * status of the condition, one of True, False, Unknown.
 */
"status": "True" | "False" | "Unknown";
/**
 * type of condition in CamelCase or in foo.example.com/CamelCase.
 */
"type": string;
}>;
/**
 * History contains the reconciliation history of the FluxInstance
 * as a list of snapshots ordered by the last reconciled time.
 */
"history"?: Array<{
  /**
 * Digest is the checksum in the format `<algo>:<hex>` of the resources in this snapshot.
 */
"digest": string;
/**
 * FirstReconciled is the time when this revision was first reconciled to the cluster.
 */
"firstReconciled": string;
/**
 * LastReconciled is the time when this revision was last reconciled to the cluster.
 */
"lastReconciled": string;
/**
 * LastReconciledDuration is time it took to reconcile the resources in this revision.
 */
"lastReconciledDuration": string;
/**
 * LastReconciledStatus is the status of the last reconciliation.
 */
"lastReconciledStatus": string;
/**
 * Metadata contains additional information about the snapshot.
 */
"metadata"?: {
  [key: string]: string;
};
/**
 * TotalReconciliations is the total number of reconciliations that have occurred for this snapshot.
 */
"totalReconciliations": number;
}>;
/**
 * Inventory contains a list of Kubernetes resource object references
 * last applied on the cluster.
 */
"inventory"?: {
  /**
 * Entries of Kubernetes resource object references.
 */
"entries": Array<{
  /**
 * ID is the string representation of the Kubernetes resource object's metadata,
 * in the format '<namespace>_<name>_<group>_<kind>'.
 */
"id": string;
/**
 * Version is the API version of the Kubernetes resource object's kind.
 */
"v": string;
}>;
};
/**
 * LastAppliedRevision is the version and digest of the
 * distribution config that was last reconcile.
 */
"lastAppliedRevision"?: string;
/**
 * LastArtifactRevision is the digest of the last pulled
 * distribution artifact.
 */
"lastArtifactRevision"?: string;
/**
 * LastAttemptedRevision is the version and digest of the
 * distribution config that was last attempted to reconcile.
 */
"lastAttemptedRevision"?: string;
/**
 * LastHandledForceAt holds the value of the most recent
 * force request value, so a change of the annotation value
 * can be detected.
 */
"lastHandledForceAt"?: string;
/**
 * LastHandledReconcileAt holds the value of the most recent
 * reconcile request value, so a change of the annotation value
 * can be detected.
 */
"lastHandledReconcileAt"?: string;
};
}

/**
 * FluxInstance is the Schema for the fluxinstances API
 */
export class FluxInstance extends Model<IFluxInstance> implements IFluxInstance {
  "apiVersion": IFluxInstance["apiVersion"];
"kind": IFluxInstance["kind"];
"metadata"?: IFluxInstance["metadata"];
"spec"?: IFluxInstance["spec"];
"status"?: IFluxInstance["status"];

static apiVersion: IFluxInstance["apiVersion"] = "fluxcd.controlplane.io/v1";
static kind: IFluxInstance["kind"] = "FluxInstance";
static is: TypeMetaGuard<IFluxInstance> = createTypeMetaGuard<IFluxInstance>(FluxInstance);
static scope: string = "Namespaced";

constructor(data?: ModelData<IFluxInstance>) {
  super();

  this.setDefinedProps({
    apiVersion: FluxInstance.apiVersion,
    kind: FluxInstance.kind,
    ...data
  } as IFluxInstance);
}
}


setValidateFunc(FluxInstance, validate as ValidateFunc<IFluxInstance>);
