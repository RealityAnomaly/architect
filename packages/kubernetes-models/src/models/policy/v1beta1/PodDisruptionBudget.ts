import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiPolicyV1beta1PodDisruptionBudgetSpec } from "./PodDisruptionBudgetSpec.ts";
import { IIoK8sApiPolicyV1beta1PodDisruptionBudgetStatus } from "./PodDisruptionBudgetStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/policy/v1beta1/PodDisruptionBudget.js";

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export interface IPodDisruptionBudget extends TypeMeta {
  "apiVersion": "policy/v1beta1";
"kind": "PodDisruptionBudget";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of the PodDisruptionBudget.
 */
"spec"?: IIoK8sApiPolicyV1beta1PodDisruptionBudgetSpec;
/**
 * Most recently observed status of the PodDisruptionBudget.
 */
"status"?: IIoK8sApiPolicyV1beta1PodDisruptionBudgetStatus;
}

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export class PodDisruptionBudget extends Model<IPodDisruptionBudget> implements IPodDisruptionBudget {
  "apiVersion": IPodDisruptionBudget["apiVersion"];
"kind": IPodDisruptionBudget["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiPolicyV1beta1PodDisruptionBudgetSpec;
"status"?: IIoK8sApiPolicyV1beta1PodDisruptionBudgetStatus;

static apiVersion: IPodDisruptionBudget["apiVersion"] = "policy/v1beta1";
static kind: IPodDisruptionBudget["kind"] = "PodDisruptionBudget";
static is: TypeMetaGuard<IPodDisruptionBudget> = createTypeMetaGuard<IPodDisruptionBudget>(PodDisruptionBudget);

constructor(data?: ModelData<IPodDisruptionBudget>) {
  super();

  this.setDefinedProps({
    apiVersion: PodDisruptionBudget.apiVersion,
    kind: PodDisruptionBudget.kind,
    ...data
  } as IPodDisruptionBudget);
}
}

setValidateFunc(PodDisruptionBudget, validate as ValidateFunc<IPodDisruptionBudget>);

export type {
  IPodDisruptionBudget as IIoK8sApiPolicyV1beta1PodDisruptionBudget,
  PodDisruptionBudget as IoK8sApiPolicyV1beta1PodDisruptionBudget
};
