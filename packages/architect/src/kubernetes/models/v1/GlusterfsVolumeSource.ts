import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1GlusterfsVolumeSource.js";

/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
export interface IGlusterfsVolumeSource {
  /**
 * endpoints is the endpoint name that details Glusterfs topology.
 */
"endpoints": string;
/**
 * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
 */
"path": string;
/**
 * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
 */
"readOnly"?: boolean;
}

/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
export class GlusterfsVolumeSource extends Model<IGlusterfsVolumeSource> implements IGlusterfsVolumeSource {
  "endpoints": string;
"path": string;
"readOnly"?: boolean;

constructor(data?: ModelData<IGlusterfsVolumeSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(GlusterfsVolumeSource, validate as ValidateFunc<IGlusterfsVolumeSource>);

export type {
  IGlusterfsVolumeSource as IIoK8sApiCoreV1GlusterfsVolumeSource,
  GlusterfsVolumeSource as IoK8sApiCoreV1GlusterfsVolumeSource
};
