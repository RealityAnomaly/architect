import { IIoK8sApiStorageV1alpha1CSIStorageCapacity } from "./CSIStorageCapacity.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storage.k8s.io/v1alpha1/CSIStorageCapacityList.js";

/**
 * CSIStorageCapacityList is a collection of CSIStorageCapacity objects.
 */
export interface ICSIStorageCapacityList extends TypeMeta {
  "apiVersion": "storage.k8s.io/v1alpha1";
/**
 * Items is the list of CSIStorageCapacity objects.
 */
"items": Array<IIoK8sApiStorageV1alpha1CSIStorageCapacity>;
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
"items": Array<IIoK8sApiStorageV1alpha1CSIStorageCapacity>;
"kind": ICSIStorageCapacityList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ICSIStorageCapacityList["apiVersion"] = "storage.k8s.io/v1alpha1";
static kind: ICSIStorageCapacityList["kind"] = "CSIStorageCapacityList";
static is: TypeMetaGuard<ICSIStorageCapacityList> = createTypeMetaGuard<ICSIStorageCapacityList>(CSIStorageCapacityList);

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
  ICSIStorageCapacityList as IIoK8sApiStorageV1alpha1CSIStorageCapacityList,
  CSIStorageCapacityList as IoK8sApiStorageV1alpha1CSIStorageCapacityList
};
