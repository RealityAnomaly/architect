import { IObjectMeta } from "@glassway/architect/kubernetes/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/SourceExtensionsFluxcdIoV1beta1ArtifactGenerator.js";

/**
 * ArtifactGenerator is the Schema for the artifactgenerators API.
 */
export interface IArtifactGenerator {
  /**
 * APIVersion defines the versioned schema of this representation of an object.
 * Servers should convert recognized schemas to the latest internal value, and
 * may reject unrecognized values.
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "source.extensions.fluxcd.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents.
 * Servers may infer this from the endpoint the client submits requests to.
 * Cannot be updated.
 * In CamelCase.
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ArtifactGenerator";
"metadata"?: IObjectMeta;
/**
 * ArtifactGeneratorSpec defines the desired state of ArtifactGenerator.
 */
"spec"?: {
  /**
 * OutputArtifacts is a list of output artifacts to be generated.
 */
"artifacts": Array<{
  /**
 * Copy defines a list of copy operations to perform from the sources to the generated artifact.
 * The copy operations are performed in the order they are listed with existing files
 * being overwritten by later copy operations.
 */
"copy": Array<{
  /**
 * Exclude specifies a list of glob patterns to exclude
 * files and dirs matched by the 'From' field. Patterns are matched
 * against paths relative to the source alias root or to the non-glob
 * prefix of 'From'. Patterns without a separator (e.g. "\*.md") match
 * the file name at any depth.
 */
"exclude"?: Array<string>;
/**
 * From specifies the source (by alias) and the glob pattern to match files.
 * The format is "@<alias>/<glob-pattern>". When pathPattern is set,
 * the path may use capture placeholders such as "{app}".
 */
"from": string;
/**
 * Strategy specifies the copy strategy to use.
 * 'Overwrite' will overwrite existing files in the destination.
 * 'Merge' is for merging YAML files using Helm values merge strategy.
 * 'Extract' is for extracting the contents of tarball archives (.tar.gz, .tgz)
 * When using glob patterns, non-tarball files are silently skipped. For single file sources,
 * the file must be a tarball or an error is returned. Directories are not supported.
 * If not specified, defaults to 'Overwrite'.
 */
"strategy"?: "Overwrite" | "Merge" | "Extract";
/**
 * To specifies the destination path within the artifact.
 * The format is "@artifact/path", the alias "artifact"
 * refers to the root path of the generated artifact. When pathPattern
 * is set, the path may use capture placeholders such as "{app}".
 */
"to": string;
}>;
/**
 * Name is the name of the generated artifact.
 * When pathPattern is set, this field may use capture placeholders such as "{app}".
 */
"name": string;
/**
 * OriginRevision is used to set the 'org.opencontainers.image.revision'
 * annotation on the generated artifact metadata.
 * If specified, it must point to an existing source alias in the format "@<alias>".
 * If the referenced source has an origin revision (e.g. a Git commit SHA),
 * it will be used to set the annotation on the generated artifact.
 * If the referenced source does not have an origin revision, the field is ignored.
 */
"originRevision"?: string;
/**
 * Revision is the revision of the generated artifact.
 * If specified, it must point to an existing source alias in the format "@<alias>".
 * If not specified, the revision is automatically set to the digest of the artifact content.
 */
"revision"?: string;
}>;
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
 * PathPattern specifies a directory traversal pattern to match within the sources.
 * The format is "@<alias>/<pattern>". Named captures in the pattern (e.g. "{app}")
 * can be used as placeholders in OutputArtifacts fields.
 */
"pathPattern"?: string;
/**
 * Sources is a list of references to the Flux source-controller
 * resources that will be used to generate the artifact.
 */
"sources": Array<{
  /**
 * Alias of the source within the ArtifactGenerator context.
 * The alias must be unique per ArtifactGenerator, and must consist
 * of lower case alphanumeric characters, underscores, and hyphens.
 * It must start and end with an alphanumeric character.
 */
"alias": string;
/**
 * Kind of the source.
 */
"kind": "Bucket" | "GitRepository" | "OCIRepository" | "HelmChart" | "ExternalArtifact";
/**
 * Name of the source.
 */
"name": string;
/**
 * Namespace of the source.
 * If not provided, defaults to the same namespace as the ArtifactGenerator.
 */
"namespace"?: string;
}>;
};
/**
 * ArtifactGeneratorStatus defines the observed state of ArtifactGenerator.
 */
"status"?: {
  /**
 * Conditions holds the conditions for the ArtifactGenerator.
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
 * Inventory contains the list of generated ExternalArtifact references.
 */
"inventory"?: Array<{
  /**
 * Digest of the referent artifact.
 */
"digest": string;
/**
 * Filename is the name of the artifact file.
 */
"filename": string;
/**
 * Name of the referent artifact.
 */
"name": string;
/**
 * Namespace of the referent artifact.
 */
"namespace": string;
}>;
/**
 * LastHandledReconcileAt holds the value of the most recent
 * reconcile request value, so a change of the annotation value
 * can be detected.
 */
"lastHandledReconcileAt"?: string;
/**
 * ObservedSourcesDigest is a hash representing the current state of
 * all the sources referenced by the ArtifactGenerator.
 */
"observedSourcesDigest"?: string;
};
}

/**
 * ArtifactGenerator is the Schema for the artifactgenerators API.
 */
export class ArtifactGenerator extends Model<IArtifactGenerator> implements IArtifactGenerator {
  "apiVersion": IArtifactGenerator["apiVersion"];
"kind": IArtifactGenerator["kind"];
"metadata"?: IArtifactGenerator["metadata"];
"spec"?: IArtifactGenerator["spec"];
"status"?: IArtifactGenerator["status"];

static apiVersion: IArtifactGenerator["apiVersion"] = "source.extensions.fluxcd.io/v1beta1";
static kind: IArtifactGenerator["kind"] = "ArtifactGenerator";
static is: TypeMetaGuard<IArtifactGenerator> = createTypeMetaGuard<IArtifactGenerator>(ArtifactGenerator);

constructor(data?: ModelData<IArtifactGenerator>) {
  super();

  this.setDefinedProps({
    apiVersion: ArtifactGenerator.apiVersion,
    kind: ArtifactGenerator.kind,
    ...data
  } as IArtifactGenerator);
}
}


setValidateFunc(ArtifactGenerator, validate as ValidateFunc<IArtifactGenerator>);
