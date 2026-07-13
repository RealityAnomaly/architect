import { IIoK8sApiStorageV1beta1CSIStorageCapacity } from "./CSIStorageCapacity.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiStorageV1beta1CSIStorageCapacityList.js";

/**
 * CSIStorageCapacityList is a collection of CSIStorageCapacity objects.
 */
export interface ICSIStorageCapacityList extends TypeMeta {
  "apiVersion": "storage.k8s.io/v1beta1";
/**
 * Items is the list of CSIStorageCapacity objects.
 */
"items": Array<IIoK8sApiStorageV1beta1CSIStorageCapacity>;
"kind": "CSIStorageCapacityList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * CSIStorageCapacityList is a collection of CSIStorageCapacity objects.
 */
export class CSIStorageCapacityList extends Model<ICSIStorageCapacityList> implements ICSIStorageCapacityList {
  "apiVersion": ICSIStorageCapacityList["apiVersion"];
"items": Array<IIoK8sApiStorageV1beta1CSIStorageCapacity>;
"kind": ICSIStorageCapacityList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ICSIStorageCapacityList["apiVersion"] = "storage.k8s.io/v1beta1";
static kind: ICSIStorageCapacityList["kind"] = "CSIStorageCapacityList";
static is = createTypeMetaGuard<ICSIStorageCapacityList>(CSIStorageCapacityList);

constructor(data?: ModelData<ICSIStorageCapacityList>) {
  super();

  this.setDefinedProps({
    apiVersion: CSIStorageCapacityList.apiVersion,
    kind: CSIStorageCapacityList.kind,
    ...data
  } as ICSIStorageCapacityList);
}
}

setValidateFunc(CSIStorageCapacityList, validate as ValidateFunc<ICSIStorageCapacityList>);

export type {
  ICSIStorageCapacityList as IIoK8sApiStorageV1beta1CSIStorageCapacityList,
  CSIStorageCapacityList as IoK8sApiStorageV1beta1CSIStorageCapacityList
};
