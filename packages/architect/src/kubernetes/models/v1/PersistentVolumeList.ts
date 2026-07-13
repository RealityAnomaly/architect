import { IIoK8sApiCoreV1PersistentVolume } from "./PersistentVolume.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PersistentVolumeList.js";

/**
 * PersistentVolumeList is a list of PersistentVolume items.
 */
export interface IPersistentVolumeList extends TypeMeta {
  "apiVersion": "v1";
/**
 * items is a list of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
"items": Array<IIoK8sApiCoreV1PersistentVolume>;
"kind": "PersistentVolumeList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PersistentVolumeList is a list of PersistentVolume items.
 */
export class PersistentVolumeList extends Model<IPersistentVolumeList> implements IPersistentVolumeList {
  "apiVersion": IPersistentVolumeList["apiVersion"];
"items": Array<IIoK8sApiCoreV1PersistentVolume>;
"kind": IPersistentVolumeList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPersistentVolumeList["apiVersion"] = "v1";
static kind: IPersistentVolumeList["kind"] = "PersistentVolumeList";
static is = createTypeMetaGuard<IPersistentVolumeList>(PersistentVolumeList);

constructor(data?: ModelData<IPersistentVolumeList>) {
  super();

  this.setDefinedProps({
    apiVersion: PersistentVolumeList.apiVersion,
    kind: PersistentVolumeList.kind,
    ...data
  } as IPersistentVolumeList);
}
}

setValidateFunc(PersistentVolumeList, validate as ValidateFunc<IPersistentVolumeList>);

export type {
  IPersistentVolumeList as IIoK8sApiCoreV1PersistentVolumeList,
  PersistentVolumeList as IoK8sApiCoreV1PersistentVolumeList
};
