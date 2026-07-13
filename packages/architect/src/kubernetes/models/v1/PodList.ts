import { IIoK8sApiCoreV1Pod } from "./Pod.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PodList.js";

/**
 * PodList is a list of Pods.
 */
export interface IPodList extends TypeMeta {
  "apiVersion": "v1";
/**
 * List of pods. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
 */
"items": Array<IIoK8sApiCoreV1Pod>;
"kind": "PodList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodList is a list of Pods.
 */
export class PodList extends Model<IPodList> implements IPodList {
  "apiVersion": IPodList["apiVersion"];
"items": Array<IIoK8sApiCoreV1Pod>;
"kind": IPodList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPodList["apiVersion"] = "v1";
static kind: IPodList["kind"] = "PodList";
static is = createTypeMetaGuard<IPodList>(PodList);

constructor(data?: ModelData<IPodList>) {
  super();

  this.setDefinedProps({
    apiVersion: PodList.apiVersion,
    kind: PodList.kind,
    ...data
  } as IPodList);
}
}

setValidateFunc(PodList, validate as ValidateFunc<IPodList>);

export type {
  IPodList as IIoK8sApiCoreV1PodList,
  PodList as IoK8sApiCoreV1PodList
};
