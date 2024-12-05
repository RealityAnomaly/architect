import { IObjectMeta } from "npm:@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "npm:@kubernetes-models/base";
import { ValidateFunc } from "npm:@kubernetes-models/validate";
import { validate } from "../../_schemas/SourceToolkitFluxcdIoV1beta1HelmChart.js";

/**
 * HelmChart is the Schema for the helmcharts API
 */
export interface IHelmChart {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "source.toolkit.fluxcd.io/v1beta1";
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
   * HelmChartSpec defines the desired state of a Helm chart.
   */
  "spec"?: {
    /**
     * AccessFrom defines an Access Control List for allowing cross-namespace references to this object.
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
     * The name or path the Helm chart is available at in the SourceRef.
     */
    "chart": string;
    /**
     * The interval at which to check the Source for updates.
     */
    "interval": string;
    /**
     * Determines what enables the creation of a new artifact. Valid values are
     * ('ChartVersion', 'Revision').
     * See the documentation of the values for an explanation on their behavior.
     * Defaults to ChartVersion when omitted.
     */
    "reconcileStrategy"?: "ChartVersion" | "Revision";
    /**
     * The reference to the Source the chart is available at.
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
     * This flag tells the controller to suspend the reconciliation of this source.
     */
    "suspend"?: boolean;
    /**
     * Alternative values file to use as the default chart values, expected to
     * be a relative path in the SourceRef. Deprecated in favor of ValuesFiles,
     * for backwards compatibility the file defined here is merged before the
     * ValuesFiles items. Ignored when omitted.
     */
    "valuesFile"?: string;
    /**
     * Alternative list of values files to use as the chart values (values.yaml
     * is not included by default), expected to be a relative path in the SourceRef.
     * Values files are merged in the order of this list with the last file overriding
     * the first. Ignored when omitted.
     */
    "valuesFiles"?: Array<string>;
    /**
     * The chart version semver expression, ignored for charts from GitRepository
     * and Bucket sources. Defaults to latest when omitted.
     */
    "version"?: string;
  };
  /**
   * HelmChartStatus defines the observed state of the HelmChart.
   */
  "status"?: {
    /**
     * Artifact represents the output of the last successful chart sync.
     */
    "artifact"?: {
      /**
       * Checksum is the SHA256 checksum of the artifact.
       */
      "checksum"?: string;
      /**
       * LastUpdateTime is the timestamp corresponding to the last update of this
       * artifact.
       */
      "lastUpdateTime": string;
      /**
       * Path is the relative file path of this artifact.
       */
      "path": string;
      /**
       * Revision is a human readable identifier traceable in the origin source
       * system. It can be a Git commit SHA, Git tag, a Helm index timestamp, a Helm
       * chart version, etc.
       */
      "revision"?: string;
      /**
       * URL is the HTTP address of this artifact.
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
     * ObservedGeneration is the last observed generation.
     */
    "observedGeneration"?: number;
    /**
     * URL is the download link for the last chart pulled.
     */
    "url"?: string;
  };
}

/**
 * HelmChart is the Schema for the helmcharts API
 */
export class HelmChart extends Model<IHelmChart> implements IHelmChart {
  "apiVersion": IHelmChart["apiVersion"];
  "kind": IHelmChart["kind"];
  "metadata"?: IHelmChart["metadata"];
  "spec"?: IHelmChart["spec"];
  "status"?: IHelmChart["status"];

static apiVersion: IHelmChart["apiVersion"] = "source.toolkit.fluxcd.io/v1beta1";
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
