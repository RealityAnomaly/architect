import { IIoK8sApiStorageV1beta1CSINode } from "./CSINode.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storage.k8s.io/v1beta1/CSINodeList.js";

/**
 * CSINodeList is a collection of CSINode objects.
 */
export interface ICSINodeList extends TypeMeta {
  "apiVersion": "storage.k8s.io/v1beta1";
/**
 * items is the list of CSINode
 */
"items": Array<IIoK8sApiStorageV1beta1CSINode>;
"kind": "CSINodeList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * CSINodeList is a collection of CSINode objects.
 */
export class CSINodeList extends Model<ICSINodeList> implements ICSINodeList {
  "apiVersion": ICSINodeList["apiVersion"];
"items": Array<IIoK8sApiStorageV1beta1CSINode>;
"kind": ICSINodeList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ICSINodeList["apiVersion"] = "storage.k8s.io/v1beta1";
static kind: ICSINodeList["kind"] = "CSINodeList";
static is: TypeMetaGuard<ICSINodeList> = createTypeMetaGuard<ICSINodeList>(CSINodeList);

constructor(data?: ModelData<ICSINodeList>) {
  super();

  this.setDefinedProps({
    apiVersion: CSINodeList.apiVersion,
    kind: CSINodeList.kind,
    ...data
  } as ICSINodeList);
}
}

setValidateFunc(CSINodeList, validate as ValidateFunc<ICSINodeList>);

export type {
  ICSINodeList as IIoK8sApiStorageV1beta1CSINodeList,
  CSINodeList as IoK8sApiStorageV1beta1CSINodeList
};
