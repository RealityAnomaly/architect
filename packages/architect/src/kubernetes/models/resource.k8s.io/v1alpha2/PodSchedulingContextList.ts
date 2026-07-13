import { IIoK8sApiResourceV1alpha2PodSchedulingContext } from "./PodSchedulingContext.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha2PodSchedulingContextList.js";

/**
 * PodSchedulingContextList is a collection of Pod scheduling objects.
 */
export interface IPodSchedulingContextList extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1alpha2";
/**
 * Items is the list of PodSchedulingContext objects.
 */
"items": Array<IIoK8sApiResourceV1alpha2PodSchedulingContext>;
"kind": "PodSchedulingContextList";
/**
 * Standard list metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodSchedulingContextList is a collection of Pod scheduling objects.
 */
export class PodSchedulingContextList extends Model<IPodSchedulingContextList> implements IPodSchedulingContextList {
  "apiVersion": IPodSchedulingContextList["apiVersion"];
"items": Array<IIoK8sApiResourceV1alpha2PodSchedulingContext>;
"kind": IPodSchedulingContextList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPodSchedulingContextList["apiVersion"] = "resource.k8s.io/v1alpha2";
static kind: IPodSchedulingContextList["kind"] = "PodSchedulingContextList";
static is = createTypeMetaGuard<IPodSchedulingContextList>(PodSchedulingContextList);

constructor(data?: ModelData<IPodSchedulingContextList>) {
  super();

  this.setDefinedProps({
    apiVersion: PodSchedulingContextList.apiVersion,
    kind: PodSchedulingContextList.kind,
    ...data
  } as IPodSchedulingContextList);
}
}

setValidateFunc(PodSchedulingContextList, validate as ValidateFunc<IPodSchedulingContextList>);

export type {
  IPodSchedulingContextList as IIoK8sApiResourceV1alpha2PodSchedulingContextList,
  PodSchedulingContextList as IoK8sApiResourceV1alpha2PodSchedulingContextList
};
