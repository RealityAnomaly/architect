import { IIoK8sApiStorageV1CSIDriver } from "./CSIDriver.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storage.k8s.io/v1/CSIDriverList.js";

/**
 * CSIDriverList is a collection of CSIDriver objects.
 */
export interface ICSIDriverList extends TypeMeta {
  "apiVersion": "storage.k8s.io/v1";
/**
 * items is the list of CSIDriver
 */
"items": Array<IIoK8sApiStorageV1CSIDriver>;
"kind": "CSIDriverList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * CSIDriverList is a collection of CSIDriver objects.
 */
export class CSIDriverList extends Model<ICSIDriverList> implements ICSIDriverList {
  "apiVersion": ICSIDriverList["apiVersion"];
"items": Array<IIoK8sApiStorageV1CSIDriver>;
"kind": ICSIDriverList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ICSIDriverList["apiVersion"] = "storage.k8s.io/v1";
static kind: ICSIDriverList["kind"] = "CSIDriverList";
static is: TypeMetaGuard<ICSIDriverList> = createTypeMetaGuard<ICSIDriverList>(CSIDriverList);

constructor(data?: ModelData<ICSIDriverList>) {
  super();

  this.setDefinedProps({
    apiVersion: CSIDriverList.apiVersion,
    kind: CSIDriverList.kind,
    ...data
  } as ICSIDriverList);
}
}

setValidateFunc(CSIDriverList, validate as ValidateFunc<ICSIDriverList>);

export type {
  ICSIDriverList as IIoK8sApiStorageV1CSIDriverList,
  CSIDriverList as IoK8sApiStorageV1CSIDriverList
};
