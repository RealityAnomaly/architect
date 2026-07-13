import { IIoK8sApiPolicyV1beta1PodDisruptionBudget } from "./PodDisruptionBudget.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/policy/v1beta1/PodDisruptionBudgetList.js";

/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 */
export interface IPodDisruptionBudgetList extends TypeMeta {
  "apiVersion": "policy/v1beta1";
/**
 * items list individual PodDisruptionBudget objects
 */
"items": Array<IIoK8sApiPolicyV1beta1PodDisruptionBudget>;
"kind": "PodDisruptionBudgetList";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 */
export class PodDisruptionBudgetList extends Model<IPodDisruptionBudgetList> implements IPodDisruptionBudgetList {
  "apiVersion": IPodDisruptionBudgetList["apiVersion"];
"items": Array<IIoK8sApiPolicyV1beta1PodDisruptionBudget>;
"kind": IPodDisruptionBudgetList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPodDisruptionBudgetList["apiVersion"] = "policy/v1beta1";
static kind: IPodDisruptionBudgetList["kind"] = "PodDisruptionBudgetList";
static is: TypeMetaGuard<IPodDisruptionBudgetList> = createTypeMetaGuard<IPodDisruptionBudgetList>(PodDisruptionBudgetList);

constructor(data?: ModelData<IPodDisruptionBudgetList>) {
  super();

  this.setDefinedProps({
    apiVersion: PodDisruptionBudgetList.apiVersion,
    kind: PodDisruptionBudgetList.kind,
    ...data
  } as IPodDisruptionBudgetList);
}
}

setValidateFunc(PodDisruptionBudgetList, validate as ValidateFunc<IPodDisruptionBudgetList>);

export type {
  IPodDisruptionBudgetList as IIoK8sApiPolicyV1beta1PodDisruptionBudgetList,
  PodDisruptionBudgetList as IoK8sApiPolicyV1beta1PodDisruptionBudgetList
};
