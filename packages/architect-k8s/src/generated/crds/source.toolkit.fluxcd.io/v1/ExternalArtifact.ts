import { IObjectMeta } from "@glassway/architect/kubernetes/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/SourceToolkitFluxcdIoV1ExternalArtifact.js";

/**
 * ExternalArtifact is the Schema for the external artifacts API
 */
export interface IExternalArtifact {
  /**
 * APIVersion defines the versioned schema of this representation of an object.
 * Servers should convert recognized schemas to the latest internal value, and
 * may reject unrecognized values.
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "source.toolkit.fluxcd.io/v1";
/**
 * Kind is a string value representing the REST resource this object represents.
 * Servers may infer this from the endpoint the client submits requests to.
 * Cannot be updated.
 * In CamelCase.
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ExternalArtifact";
"metadata"?: IObjectMeta;
/**
 * ExternalArtifactSpec defines the desired state of ExternalArtifact
 */
"spec"?: {
  /**
 * SourceRef points to the Kubernetes custom resource for
 * which the artifact is generated.
 */
"sourceRef"?: {
  /**
 * API version of the referent, if not specified the Kubernetes preferred version will be used.
 */
"apiVersion"?: string;
/**
 * Kind of the referent.
 */
"kind": string;
/**
 * Name of the referent.
 */
"name": string;
/**
 * Namespace of the referent, when not specified it acts as LocalObjectReference.
 */
"namespace"?: string;
};
};
/**
 * ExternalArtifactStatus defines the observed state of ExternalArtifact
 */
"status"?: {
  /**
 * Artifact represents the output of an ExternalArtifact reconciliation.
 */
"artifact"?: {
  /**
 * Digest is the digest of the file in the form of '<algorithm>:<checksum>'.
 */
"digest": string;
/**
 * LastUpdateTime is the timestamp corresponding to the last update of the
 * Artifact.
 */
"lastUpdateTime": string;
/**
 * Metadata holds upstream information such as OCI annotations.
 */
"metadata"?: {
  [key: string]: string;
};
/**
 * Path is the relative file path of the Artifact. It can be used to locate
 * the file in the root of the Artifact storage on the local file system of
 * the controller managing the Source.
 */
"path": string;
/**
 * Revision is a human-readable identifier traceable in the origin source
 * system. It can be a Git commit SHA, Git tag, a Helm chart version, etc.
 */
"revision": string;
/**
 * Size is the number of bytes in the file.
 */
"size"?: number;
/**
 * URL is the HTTP address of the Artifact as exposed by the controller
 * managing the Source. It can be used to retrieve the Artifact for
 * consumption, e.g. by another controller applying the Artifact contents.
 */
"url": string;
};
/**
 * Conditions holds the conditions for the ExternalArtifact.
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
};
}

/**
 * ExternalArtifact is the Schema for the external artifacts API
 */
export class ExternalArtifact extends Model<IExternalArtifact> implements IExternalArtifact {
  "apiVersion": IExternalArtifact["apiVersion"];
"kind": IExternalArtifact["kind"];
"metadata"?: IExternalArtifact["metadata"];
"spec"?: IExternalArtifact["spec"];
"status"?: IExternalArtifact["status"];

static apiVersion: IExternalArtifact["apiVersion"] = "source.toolkit.fluxcd.io/v1";
static kind: IExternalArtifact["kind"] = "ExternalArtifact";
static is: TypeMetaGuard<IExternalArtifact> = createTypeMetaGuard<IExternalArtifact>(ExternalArtifact);

constructor(data?: ModelData<IExternalArtifact>) {
  super();

  this.setDefinedProps({
    apiVersion: ExternalArtifact.apiVersion,
    kind: ExternalArtifact.kind,
    ...data
  } as IExternalArtifact);
}
}


setValidateFunc(ExternalArtifact, validate as ValidateFunc<IExternalArtifact>);
