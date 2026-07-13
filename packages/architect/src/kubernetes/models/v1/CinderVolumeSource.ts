import { IIoK8sApiCoreV1LocalObjectReference } from "./LocalObjectReference.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1CinderVolumeSource.js";

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
export interface ICinderVolumeSource {
  /**
 * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
 */
"fsType"?: string;
/**
 * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
 */
"readOnly"?: boolean;
/**
 * secretRef is optional: points to a secret object containing parameters used to connect to OpenStack.
 */
"secretRef"?: IIoK8sApiCoreV1LocalObjectReference;
/**
 * volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
 */
"volumeID": string;
}

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
export class CinderVolumeSource extends Model<ICinderVolumeSource> implements ICinderVolumeSource {
  "fsType"?: string;
"readOnly"?: boolean;
"secretRef"?: IIoK8sApiCoreV1LocalObjectReference;
"volumeID": string;

constructor(data?: ModelData<ICinderVolumeSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CinderVolumeSource, validate as ValidateFunc<ICinderVolumeSource>);

export type {
  ICinderVolumeSource as IIoK8sApiCoreV1CinderVolumeSource,
  CinderVolumeSource as IoK8sApiCoreV1CinderVolumeSource
};
