import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "../../../apimachinery/util/intstr/IntOrString.ts";
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/policy/v1beta1/PodDisruptionBudgetSpec.js";

/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 */
export interface IPodDisruptionBudgetSpec {
  /**
 * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
 */
"maxUnavailable"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
/**
 * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
 */
"minAvailable"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
/**
 * Label query over pods whose evictions are managed by the disruption budget. A null selector selects no pods. An empty selector ({}) also selects no pods, which differs from standard behavior of selecting all pods. In policy/v1, an empty selector will select all pods in the namespace.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 */
export class PodDisruptionBudgetSpec extends Model<IPodDisruptionBudgetSpec> implements IPodDisruptionBudgetSpec {
  "maxUnavailable"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
"minAvailable"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

constructor(data?: ModelData<IPodDisruptionBudgetSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodDisruptionBudgetSpec, validate as ValidateFunc<IPodDisruptionBudgetSpec>);

export type {
  IPodDisruptionBudgetSpec as IIoK8sApiPolicyV1beta1PodDisruptionBudgetSpec,
  PodDisruptionBudgetSpec as IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec
};
