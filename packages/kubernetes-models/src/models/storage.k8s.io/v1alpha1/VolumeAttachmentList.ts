import { IIoK8sApiStorageV1alpha1VolumeAttachment } from "./VolumeAttachment.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storage.k8s.io/v1alpha1/VolumeAttachmentList.js";

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export interface IVolumeAttachmentList extends TypeMeta {
  "apiVersion": "storage.k8s.io/v1alpha1";
/**
 * Items is the list of VolumeAttachments
 */
"items": Array<IIoK8sApiStorageV1alpha1VolumeAttachment>;
"kind": "VolumeAttachmentList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export class VolumeAttachmentList extends Model<IVolumeAttachmentList> implements IVolumeAttachmentList {
  "apiVersion": IVolumeAttachmentList["apiVersion"];
"items": Array<IIoK8sApiStorageV1alpha1VolumeAttachment>;
"kind": IVolumeAttachmentList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IVolumeAttachmentList["apiVersion"] = "storage.k8s.io/v1alpha1";
static kind: IVolumeAttachmentList["kind"] = "VolumeAttachmentList";
static is: TypeMetaGuard<IVolumeAttachmentList> = createTypeMetaGuard<IVolumeAttachmentList>(VolumeAttachmentList);

constructor(data?: ModelData<IVolumeAttachmentList>) {
  super();

  this.setDefinedProps({
    apiVersion: VolumeAttachmentList.apiVersion,
    kind: VolumeAttachmentList.kind,
    ...data
  } as IVolumeAttachmentList);
}
}

setValidateFunc(VolumeAttachmentList, validate as ValidateFunc<IVolumeAttachmentList>);

export type {
  IVolumeAttachmentList as IIoK8sApiStorageV1alpha1VolumeAttachmentList,
  VolumeAttachmentList as IoK8sApiStorageV1alpha1VolumeAttachmentList
};
