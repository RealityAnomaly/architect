import { IIoK8sApiStorageV1beta1StorageClass } from "./StorageClass.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiStorageV1beta1StorageClassList.js";

/**
 * StorageClassList is a collection of storage classes.
 */
export interface IStorageClassList extends TypeMeta {
  "apiVersion": "storage.k8s.io/v1beta1";
/**
 * Items is the list of StorageClasses
 */
"items": Array<IIoK8sApiStorageV1beta1StorageClass>;
"kind": "StorageClassList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * StorageClassList is a collection of storage classes.
 */
export class StorageClassList extends Model<IStorageClassList> implements IStorageClassList {
  "apiVersion": IStorageClassList["apiVersion"];
"items": Array<IIoK8sApiStorageV1beta1StorageClass>;
"kind": IStorageClassList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IStorageClassList["apiVersion"] = "storage.k8s.io/v1beta1";
static kind: IStorageClassList["kind"] = "StorageClassList";
static is = createTypeMetaGuard<IStorageClassList>(StorageClassList);

constructor(data?: ModelData<IStorageClassList>) {
  super();

  this.setDefinedProps({
    apiVersion: StorageClassList.apiVersion,
    kind: StorageClassList.kind,
    ...data
  } as IStorageClassList);
}
}

setValidateFunc(StorageClassList, validate as ValidateFunc<IStorageClassList>);

export type {
  IStorageClassList as IIoK8sApiStorageV1beta1StorageClassList,
  StorageClassList as IoK8sApiStorageV1beta1StorageClassList
};
