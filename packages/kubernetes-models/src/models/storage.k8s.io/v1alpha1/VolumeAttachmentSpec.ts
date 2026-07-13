import { IIoK8sApiStorageV1alpha1VolumeAttachmentSource } from "./VolumeAttachmentSource.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storage.k8s.io/v1alpha1/VolumeAttachmentSpec.js";

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export interface IVolumeAttachmentSpec {
  /**
 * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
 */
"attacher": string;
/**
 * The node that the volume should be attached to.
 */
"nodeName": string;
/**
 * Source represents the volume that should be attached.
 */
"source": IIoK8sApiStorageV1alpha1VolumeAttachmentSource;
}

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export class VolumeAttachmentSpec extends Model<IVolumeAttachmentSpec> implements IVolumeAttachmentSpec {
  "attacher": string;
"nodeName": string;
"source": IIoK8sApiStorageV1alpha1VolumeAttachmentSource;

constructor(data?: ModelData<IVolumeAttachmentSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeAttachmentSpec, validate as ValidateFunc<IVolumeAttachmentSpec>);

export type {
  IVolumeAttachmentSpec as IIoK8sApiStorageV1alpha1VolumeAttachmentSpec,
  VolumeAttachmentSpec as IoK8sApiStorageV1alpha1VolumeAttachmentSpec
};
