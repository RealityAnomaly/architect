import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/GlusterfsPersistentVolumeSource.js";

/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
export interface IGlusterfsPersistentVolumeSource {
  /**
 * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
 */
"endpoints": string;
/**
 * endpointsNamespace is the namespace that contains Glusterfs endpoint. If this field is empty, the EndpointNamespace defaults to the same namespace as the bound PVC. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
 */
"endpointsNamespace"?: string;
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
export class GlusterfsPersistentVolumeSource extends Model<IGlusterfsPersistentVolumeSource> implements IGlusterfsPersistentVolumeSource {
  "endpoints": string;
"endpointsNamespace"?: string;
"path": string;
"readOnly"?: boolean;

constructor(data?: ModelData<IGlusterfsPersistentVolumeSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(GlusterfsPersistentVolumeSource, validate as ValidateFunc<IGlusterfsPersistentVolumeSource>);

export type {
  IGlusterfsPersistentVolumeSource as IIoK8sApiCoreV1GlusterfsPersistentVolumeSource,
  GlusterfsPersistentVolumeSource as IoK8sApiCoreV1GlusterfsPersistentVolumeSource
};
