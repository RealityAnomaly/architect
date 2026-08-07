import { IObjectMeta } from "@glassway/kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/FluxcdControlplaneIoV1ResourceSet.js";

/**
 * ResourceSet is the Schema for the ResourceSets API.
 */
export interface IResourceSet {
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
"kind": "ResourceSet";
"metadata"?: IObjectMeta;
/**
 * ResourceSetSpec defines the desired state of ResourceSet
 */
"spec"?: {
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
 * DependsOn specifies the list of Kubernetes resources that must
 * exist on the cluster before the reconciliation process starts.
 */
"dependsOn"?: Array<{
  /**
 * APIVersion of the resource to depend on.
 */
"apiVersion": string;
/**
 * Kind of the resource to depend on.
 */
"kind": string;
/**
 * Name of the resource to depend on.
 */
"name": string;
/**
 * Namespace of the resource to depend on.
 */
"namespace"?: string;
/**
 * Ready checks if the resource Ready status condition is true.
 */
"ready"?: boolean;
/**
 * ReadyExpr checks if the resource satisfies the given CEL expression.
 * The expression replaces the default readiness check and
 * is only evaluated if Ready is set to 'true'.
 */
"readyExpr"?: string;
}>;
/**
 * InputStrategy defines how the inputs are combined when multiple
 * input provider objects are used. Defaults to flattening all inputs
 * from all providers into a single list of input sets.
 */
"inputStrategy"?: {
  /**
 * IncludeEmptyProviders controls how input providers that export no
 * inputs are treated. Only applies when Name is Permute. When true, if
 * any provider has zero inputs the resulting permutation set is empty
 * (mathematically correct Cartesian product behavior). When false or
 * unset (default), providers with zero inputs are silently skipped and
 * the remaining providers still permute among themselves.
 */
"includeEmptyProviders"?: boolean;
/**
 * Name defines how the inputs are combined when multiple
 * input provider objects are used. Supported values are:
 * - Flatten: all inputs sets from all input provider objects are
 *   flattened into a single list of input sets.
 * - Permute: all inputs sets from all input provider objects are
 *   combined using a Cartesian product, resulting in a list of input sets
 *   that contains every possible combination of input values.
 *   For example, if provider A has inputs [{x: 1}, {x: 2}] and provider B has
 *   inputs [{y: "a"}, {y: "b"}], the resulting input sets will be:
 *   [{x: 1, y: "a"}, {x: 1, y: "b"}, {x: 2, y: "a"}, {x: 2, y: "b"}].
 *   This strategy can lead to a large number of input sets and should be
 *   used with caution. Users should use filtering features from
 *   ResourceSetInputProvider to limit the amount of exported inputs.
 */
"name": "Flatten" | "Permute";
};
/**
 * Inputs contains the list of ResourceSet inputs.
 */
"inputs"?: Array<{
  [key: string]: any;
}>;
/**
 * InputsFrom contains the list of references to input providers.
 * When set, the inputs are fetched from the providers and concatenated
 * with the in-line inputs defined in the ResourceSet.
 */
"inputsFrom"?: Array<{
  /**
 * APIVersion of the input provider resource.
 * When not set, the APIVersion of the ResourceSet is used.
 */
"apiVersion"?: "fluxcd.controlplane.io/v1";
/**
 * Kind of the input provider resource.
 */
"kind"?: "ResourceSetInputProvider";
/**
 * Name of the input provider resource. Cannot be set
 * when the Selector field is set.
 */
"name"?: string;
/**
 * Selector is a label selector to filter the input provider resources
 * as an alternative to the Name field.
 */
"selector"?: {
  /**
 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
 */
"matchExpressions"?: Array<{
  /**
 * key is the label key that the selector applies to.
 */
"key": string;
/**
 * operator represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists and DoesNotExist.
 */
"operator": string;
/**
 * values is an array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. This array is replaced during a strategic
 * merge patch.
 */
"values"?: Array<string>;
}>;
/**
 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
 * map is equivalent to an element of matchExpressions, whose key field is "key", the
 * operator is "In", and the values array contains only "value". The requirements are ANDed.
 */
"matchLabels"?: {
  [key: string]: string;
};
};
}>;
/**
 * Resources contains the list of Kubernetes resources to reconcile.
 */
"resources"?: Array<{
  }>;
/**
 * ResourcesTemplate is a Go template that generates the list of
 * Kubernetes resources to reconcile. The template is rendered
 * as multi-document YAML, the resources should be separated by '---'.
 * When both Resources and ResourcesTemplate are set, the resulting
 * objects are merged and deduplicated, with the ones from Resources taking precedence.
 */
"resourcesTemplate"?: string;
/**
 * The name of the Kubernetes service account to impersonate
 * when reconciling the generated resources.
 */
"serviceAccountName"?: string;
/**
 * Steps contains an ordered list of named steps to reconcile in sequence.
 * Each step's resources are applied and health-checked before the next
 * step starts. Mutually exclusive with Resources and ResourcesTemplate.
 */
"steps"?: Array<{
  /**
 * Name of the step, must be unique within the ResourceSet.
 */
"name": string;
/**
 * Resources contains the list of Kubernetes resources to reconcile.
 */
"resources"?: Array<{
  }>;
/**
 * ResourcesTemplate is a Go template that generates the list of
 * Kubernetes resources to reconcile. The template is rendered
 * as multi-document YAML, the resources should be separated by '---'.
 * When both Resources and ResourcesTemplate are set, the resulting
 * objects are merged and deduplicated, with the ones from Resources taking precedence.
 */
"resourcesTemplate"?: string;
/**
 * Timeout is the maximum time to wait for the step's resources to
 * become ready. When not set, the ResourceSet reconciliation
 * timeout is used.
 */
"timeout"?: string;
}>;
/**
 * Wait instructs the controller to check the health
 * of all the reconciled resources.
 */
"wait"?: boolean;
};
/**
 * ResourceSetStatus defines the observed state of ResourceSet.
 */
"status"?: {
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
 * ExternalChecksumRefs lists the ConfigMap and Secret references
 * discovered in checksumFrom annotations on the last reconciliation
 * that point to objects not rendered by this ResourceSet. Each entry
 * has the form "Kind/namespace/name". It is used to trigger a
 * reconciliation when one of the referenced objects changes.
 */
"externalChecksumRefs"?: Array<string>;
/**
 * History contains the reconciliation history of the ResourceSet
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
 * LastAppliedRevision is the digest of the
 * generated resources that were last reconcile.
 */
"lastAppliedRevision"?: string;
/**
 * LastHandledReconcileAt holds the value of the most recent
 * reconcile request value, so a change of the annotation value
 * can be detected.
 */
"lastHandledReconcileAt"?: string;
};
}

/**
 * ResourceSet is the Schema for the ResourceSets API.
 */
export class ResourceSet extends Model<IResourceSet> implements IResourceSet {
  "apiVersion": IResourceSet["apiVersion"];
"kind": IResourceSet["kind"];
"metadata"?: IResourceSet["metadata"];
"spec"?: IResourceSet["spec"];
"status"?: IResourceSet["status"];

static apiVersion: IResourceSet["apiVersion"] = "fluxcd.controlplane.io/v1";
static kind: IResourceSet["kind"] = "ResourceSet";
static is: TypeMetaGuard<IResourceSet> = createTypeMetaGuard<IResourceSet>(ResourceSet);
static scope: string = "Namespaced";

constructor(data?: ModelData<IResourceSet>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourceSet.apiVersion,
    kind: ResourceSet.kind,
    ...data
  } as IResourceSet);
}
}


setValidateFunc(ResourceSet, validate as ValidateFunc<IResourceSet>);
