import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiStorageV1alpha1VolumeAttachmentSpec } from "./VolumeAttachmentSpec.ts";
import { IIoK8sApiStorageV1alpha1VolumeAttachmentStatus } from "./VolumeAttachmentStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storage.k8s.io/v1alpha1/VolumeAttachment.js";

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 */
export interface IVolumeAttachment extends TypeMeta {
  "apiVersion": "storage.k8s.io/v1alpha1";
"kind": "VolumeAttachment";
/**
 * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
 */
"spec": IIoK8sApiStorageV1alpha1VolumeAttachmentSpec;
/**
 * Status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher.
 */
"status"?: IIoK8sApiStorageV1alpha1VolumeAttachmentStatus;
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 */
export class VolumeAttachment extends Model<IVolumeAttachment> implements IVolumeAttachment {
  "apiVersion": IVolumeAttachment["apiVersion"];
"kind": IVolumeAttachment["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiStorageV1alpha1VolumeAttachmentSpec;
"status"?: IIoK8sApiStorageV1alpha1VolumeAttachmentStatus;

static apiVersion: IVolumeAttachment["apiVersion"] = "storage.k8s.io/v1alpha1";
static kind: IVolumeAttachment["kind"] = "VolumeAttachment";
static is: TypeMetaGuard<IVolumeAttachment> = createTypeMetaGuard<IVolumeAttachment>(VolumeAttachment);

constructor(data?: ModelData<IVolumeAttachment>) {
  super();

  this.setDefinedProps({
    apiVersion: VolumeAttachment.apiVersion,
    kind: VolumeAttachment.kind,
    ...data
  } as IVolumeAttachment);
}
}

setValidateFunc(VolumeAttachment, validate as ValidateFunc<IVolumeAttachment>);

export type {
  IVolumeAttachment as IIoK8sApiStorageV1alpha1VolumeAttachment,
  VolumeAttachment as IoK8sApiStorageV1alpha1VolumeAttachment
};
