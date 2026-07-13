import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiStorageV1alpha1VolumeAttributesClass.js";

/**
 * VolumeAttributesClass represents a specification of mutable volume attributes defined by the CSI driver. The class can be specified during dynamic provisioning of PersistentVolumeClaims, and changed in the PersistentVolumeClaim spec after provisioning.
 */
export interface IVolumeAttributesClass extends TypeMeta {
  "apiVersion": "storage.k8s.io/v1alpha1";
/**
 * Name of the CSI driver This field is immutable.
 */
"driverName": string;
"kind": "VolumeAttributesClass";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * parameters hold volume attributes defined by the CSI driver. These values are opaque to the Kubernetes and are passed directly to the CSI driver. The underlying storage provider supports changing these attributes on an existing volume, however the parameters field itself is immutable. To invoke a volume update, a new VolumeAttributesClass should be created with new parameters, and the PersistentVolumeClaim should be updated to reference the new VolumeAttributesClass.
 * 
 * This field is required and must contain at least one key/value pair. The keys cannot be empty, and the maximum number of parameters is 512, with a cumulative max size of 256K. If the CSI driver rejects invalid parameters, the target PersistentVolumeClaim will be set to an "Infeasible" state in the modifyVolumeStatus field.
 */
"parameters"?: {
  [key: string]: string;
};
}

/**
 * VolumeAttributesClass represents a specification of mutable volume attributes defined by the CSI driver. The class can be specified during dynamic provisioning of PersistentVolumeClaims, and changed in the PersistentVolumeClaim spec after provisioning.
 */
export class VolumeAttributesClass extends Model<IVolumeAttributesClass> implements IVolumeAttributesClass {
  "apiVersion": IVolumeAttributesClass["apiVersion"];
"driverName": string;
"kind": IVolumeAttributesClass["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"parameters"?: {
  [key: string]: string;
};

static apiVersion: IVolumeAttributesClass["apiVersion"] = "storage.k8s.io/v1alpha1";
static kind: IVolumeAttributesClass["kind"] = "VolumeAttributesClass";
static is = createTypeMetaGuard<IVolumeAttributesClass>(VolumeAttributesClass);

constructor(data?: ModelData<IVolumeAttributesClass>) {
  super();

  this.setDefinedProps({
    apiVersion: VolumeAttributesClass.apiVersion,
    kind: VolumeAttributesClass.kind,
    ...data
  } as IVolumeAttributesClass);
}
}

setValidateFunc(VolumeAttributesClass, validate as ValidateFunc<IVolumeAttributesClass>);

export type {
  IVolumeAttributesClass as IIoK8sApiStorageV1alpha1VolumeAttributesClass,
  VolumeAttributesClass as IoK8sApiStorageV1alpha1VolumeAttributesClass
};
