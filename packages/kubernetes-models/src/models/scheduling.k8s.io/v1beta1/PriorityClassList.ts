import { IIoK8sApiSchedulingV1beta1PriorityClass } from "./PriorityClass.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/scheduling.k8s.io/v1beta1/PriorityClassList.js";

/**
 * PriorityClassList is a collection of priority classes.
 */
export interface IPriorityClassList extends TypeMeta {
  "apiVersion": "scheduling.k8s.io/v1beta1";
/**
 * items is the list of PriorityClasses
 */
"items": Array<IIoK8sApiSchedulingV1beta1PriorityClass>;
"kind": "PriorityClassList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PriorityClassList is a collection of priority classes.
 */
export class PriorityClassList extends Model<IPriorityClassList> implements IPriorityClassList {
  "apiVersion": IPriorityClassList["apiVersion"];
"items": Array<IIoK8sApiSchedulingV1beta1PriorityClass>;
"kind": IPriorityClassList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPriorityClassList["apiVersion"] = "scheduling.k8s.io/v1beta1";
static kind: IPriorityClassList["kind"] = "PriorityClassList";
static is: TypeMetaGuard<IPriorityClassList> = createTypeMetaGuard<IPriorityClassList>(PriorityClassList);

constructor(data?: ModelData<IPriorityClassList>) {
  super();

  this.setDefinedProps({
    apiVersion: PriorityClassList.apiVersion,
    kind: PriorityClassList.kind,
    ...data
  } as IPriorityClassList);
}
}

setValidateFunc(PriorityClassList, validate as ValidateFunc<IPriorityClassList>);

export type {
  IPriorityClassList as IIoK8sApiSchedulingV1beta1PriorityClassList,
  PriorityClassList as IoK8sApiSchedulingV1beta1PriorityClassList
};
