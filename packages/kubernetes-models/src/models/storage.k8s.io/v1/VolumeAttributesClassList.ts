import { IIoK8sApiStorageV1VolumeAttributesClass } from "./VolumeAttributesClass.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storage.k8s.io/v1/VolumeAttributesClassList.js";

/**
 * VolumeAttributesClassList is a collection of VolumeAttributesClass objects.
 */
export interface IVolumeAttributesClassList extends TypeMeta {
  "apiVersion": "storage.k8s.io/v1";
/**
 * items is the list of VolumeAttributesClass objects.
 */
"items": Array<IIoK8sApiStorageV1VolumeAttributesClass>;
"kind": "VolumeAttributesClassList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * VolumeAttributesClassList is a collection of VolumeAttributesClass objects.
 */
export class VolumeAttributesClassList extends Model<IVolumeAttributesClassList> implements IVolumeAttributesClassList {
  "apiVersion": IVolumeAttributesClassList["apiVersion"];
"items": Array<IIoK8sApiStorageV1VolumeAttributesClass>;
"kind": IVolumeAttributesClassList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IVolumeAttributesClassList["apiVersion"] = "storage.k8s.io/v1";
static kind: IVolumeAttributesClassList["kind"] = "VolumeAttributesClassList";
static is: TypeMetaGuard<IVolumeAttributesClassList> = createTypeMetaGuard<IVolumeAttributesClassList>(VolumeAttributesClassList);

constructor(data?: ModelData<IVolumeAttributesClassList>) {
  super();

  this.setDefinedProps({
    apiVersion: VolumeAttributesClassList.apiVersion,
    kind: VolumeAttributesClassList.kind,
    ...data
  } as IVolumeAttributesClassList);
}
}

setValidateFunc(VolumeAttributesClassList, validate as ValidateFunc<IVolumeAttributesClassList>);

export type {
  IVolumeAttributesClassList as IIoK8sApiStorageV1VolumeAttributesClassList,
  VolumeAttributesClassList as IoK8sApiStorageV1VolumeAttributesClassList
};
