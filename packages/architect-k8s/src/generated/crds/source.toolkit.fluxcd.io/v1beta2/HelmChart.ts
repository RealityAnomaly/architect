import { IObjectMeta } from "npm:@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "npm:@kubernetes-models/base";
import { ValidateFunc } from "npm:@kubernetes-models/validate";
import { validate } from "../../_schemas/SourceToolkitFluxcdIoV1beta2HelmChart.js";

/**
 * HelmChart is the Schema for the helmcharts API.
 */
export interface IHelmChart {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "source.toolkit.fluxcd.io/v1beta2";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "HelmChart";
  "metadata"?: IObjectMeta;
  /**
   * HelmChartSpec specifies the desired state of a Helm chart.
   */
  "spec"?: {
    /**
     * AccessFrom specifies an Access Control List for allowing cross-namespace
     * references to this object.
     * NOTE: Not implemented, provisional as of https://github.com/fluxcd/flux2/pull/2092
     */
    "accessFrom"?: {
      /**
       * NamespaceSelectors is the list of namespace selectors to which this ACL applies.
       * Items in this list are evaluated using a logical OR operation.
       */
      "namespaceSelectors": Array<{
        /**
         * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
         * map is equivalent to an element of matchExpressions, whose key field is "key", the
         * operator is "In", and the values array contains only "value". The requirements are ANDed.
         */
        "matchLabels"?: {
          [key: string]: string;
        };
      }>;
    };
    /**
     * Chart is the name or path the Helm chart is available at in the
     * SourceRef.
     */
    "chart": string;
    /**
     * IgnoreMissingValuesFiles controls whether to silently ignore missing values
     * files rather than failing.
     */
    "ignoreMissingValuesFiles"?: boolean;
    /**
     * Interval at which the HelmChart SourceRef is checked for updates.
     * This interval is approximate and may be subject to jitter to ensure
     * efficient use of resources.
     */
    "interval": string;
    /**
     * ReconcileStrategy determines what enables the creation of a new artifact.
     * Valid values are ('ChartVersion', 'Revision').
     * See the documentation of the values for an explanation on their behavior.
     * Defaults to ChartVersion when omitted.
     */
    "reconcileStrategy"?: "ChartVersion" | "Revision";
    /**
     * SourceRef is the reference to the Source the chart is available at.
     */
    "sourceRef": {
      /**
       * APIVersion of the referent.
       */
      "apiVersion"?: string;
      /**
       * Kind of the referent, valid values are ('HelmRepository', 'GitRepository',
       * 'Bucket').
       */
      "kind": "HelmRepository" | "GitRepository" | "Bucket";
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * Suspend tells the controller to suspend the reconciliation of this
     * source.
     */
    "suspend"?: boolean;
    /**
     * ValuesFile is an alternative values file to use as the default chart
     * values, expected to be a relative path in the SourceRef. Deprecated in
     * favor of ValuesFiles, for backwards compatibility the file specified here
     * is merged before the ValuesFiles items. Ignored when omitted.
     */
    "valuesFile"?: string;
    /**
     * ValuesFiles is an alternative list of values files to use as the chart
     * values (values.yaml is not included by default), expected to be a
     * relative path in the SourceRef.
     * Values files are merged in the order of this list with the last file
     * overriding the first. Ignored when omitted.
     */
    "valuesFiles"?: Array<string>;
    /**
     * Verify contains the secret name containing the trusted public keys
     * used to verify the signature and specifies which provider to use to check
     * whether OCI image is authentic.
     * This field is only supported when using HelmRepository source with spec.type 'oci'.
     * Chart dependencies, which are not bundled in the umbrella chart artifact, are not verified.
     */
    "verify"?: {
      /**
       * MatchOIDCIdentity specifies the identity matching criteria to use
       * while verifying an OCI artifact which was signed using Cosign keyless
       * signing. The artifact's identity is deemed to be verified if any of the
       * specified matchers match against the identity.
       */
      "matchOIDCIdentity"?: Array<{
        /**
         * Issuer specifies the regex pattern to match against to verify
         * the OIDC issuer in the Fulcio certificate. The pattern must be a
         * valid Go regular expression.
         */
        "issuer": string;
        /**
         * Subject specifies the regex pattern to match against to verify
         * the identity subject in the Fulcio certificate. The pattern must
         * be a valid Go regular expression.
         */
        "subject": string;
      }>;
      /**
       * Provider specifies the technology used to sign the OCI Artifact.
       */
      "provider": "cosign" | "notation";
      /**
       * SecretRef specifies the Kubernetes Secret containing the
       * trusted public keys.
       */
      "secretRef"?: {
        /**
         * Name of the referent.
         */
        "name": string;
      };
    };
    /**
     * Version is the chart version semver expression, ignored for charts from
     * GitRepository and Bucket sources. Defaults to latest when omitted.
     */
    "version"?: string;
  };
  /**
   * HelmChartStatus records the observed state of the HelmChart.
   */
  "status"?: {
    /**
     * Artifact represents the output of the last successful reconciliation.
     */
    "artifact"?: {
      /**
       * Digest is the digest of the file in the form of '<algorithm>:<checksum>'.
       */
      "digest"?: string;
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
     * Conditions holds the conditions for the HelmChart.
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
     * LastHandledReconcileAt holds the value of the most recent
     * reconcile request value, so a change of the annotation value
     * can be detected.
     */
    "lastHandledReconcileAt"?: string;
    /**
     * ObservedChartName is the last observed chart name as specified by the
     * resolved chart reference.
     */
    "observedChartName"?: string;
    /**
     * ObservedGeneration is the last observed generation of the HelmChart
     * object.
     */
    "observedGeneration"?: number;
    /**
     * ObservedSourceArtifactRevision is the last observed Artifact.Revision
     * of the HelmChartSpec.SourceRef.
     */
    "observedSourceArtifactRevision"?: string;
    /**
     * ObservedValuesFiles are the observed value files of the last successful
     * reconciliation.
     * It matches the chart in the last successfully reconciled artifact.
     */
    "observedValuesFiles"?: Array<string>;
    /**
     * URL is the dynamic fetch link for the latest Artifact.
     * It is provided on a "best effort" basis, and using the precise
     * BucketStatus.Artifact data is recommended.
     */
    "url"?: string;
  };
}

/**
 * HelmChart is the Schema for the helmcharts API.
 */
export class HelmChart extends Model<IHelmChart> implements IHelmChart {
  "apiVersion": IHelmChart["apiVersion"];
  "kind": IHelmChart["kind"];
  "metadata"?: IHelmChart["metadata"];
  "spec"?: IHelmChart["spec"];
  "status"?: IHelmChart["status"];

static apiVersion: IHelmChart["apiVersion"] = "source.toolkit.fluxcd.io/v1beta2";
static kind: IHelmChart["kind"] = "HelmChart";
static is = createTypeMetaGuard<IHelmChart>(HelmChart);

constructor(data?: ModelData<IHelmChart>) {
  super({
    apiVersion: HelmChart.apiVersion,
    kind: HelmChart.kind,
    ...data
  } as IHelmChart);
}
}


setValidateFunc(HelmChart, validate as ValidateFunc<IHelmChart>);
