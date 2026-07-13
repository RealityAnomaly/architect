import { IIoK8sApiResourceV1alpha1PodScheduling } from "./PodScheduling.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha1/PodSchedulingList.js";

/**
 * PodSchedulingList is a collection of Pod scheduling objects.
 */
export interface IPodSchedulingList extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1alpha1";
/**
 * Items is the list of PodScheduling objects.
 */
"items": Array<IIoK8sApiResourceV1alpha1PodScheduling>;
"kind": "PodSchedulingList";
/**
 * Standard list metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodSchedulingList is a collection of Pod scheduling objects.
 */
export class PodSchedulingList extends Model<IPodSchedulingList> implements IPodSchedulingList {
  "apiVersion": IPodSchedulingList["apiVersion"];
"items": Array<IIoK8sApiResourceV1alpha1PodScheduling>;
"kind": IPodSchedulingList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPodSchedulingList["apiVersion"] = "resource.k8s.io/v1alpha1";
static kind: IPodSchedulingList["kind"] = "PodSchedulingList";
static is: TypeMetaGuard<IPodSchedulingList> = createTypeMetaGuard<IPodSchedulingList>(PodSchedulingList);

constructor(data?: ModelData<IPodSchedulingList>) {
  super();

  this.setDefinedProps({
    apiVersion: PodSchedulingList.apiVersion,
    kind: PodSchedulingList.kind,
    ...data
  } as IPodSchedulingList);
}
}

setValidateFunc(PodSchedulingList, validate as ValidateFunc<IPodSchedulingList>);

export type {
  IPodSchedulingList as IIoK8sApiResourceV1alpha1PodSchedulingList,
  PodSchedulingList as IoK8sApiResourceV1alpha1PodSchedulingList
};
