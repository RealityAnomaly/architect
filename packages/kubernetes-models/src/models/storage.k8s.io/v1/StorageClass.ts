import { IIoK8sApiCoreV1TopologySelectorTerm } from "../../v1/TopologySelectorTerm.ts";
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storage.k8s.io/v1/StorageClass.js";

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 * 
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export interface IStorageClass extends TypeMeta {
  /**
 * allowVolumeExpansion shows whether the storage class allow volume expand.
 */
"allowVolumeExpansion"?: boolean;
/**
 * allowedTopologies restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
 */
"allowedTopologies"?: Array<IIoK8sApiCoreV1TopologySelectorTerm>;
"apiVersion": "storage.k8s.io/v1";
"kind": "StorageClass";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * mountOptions controls the mountOptions for dynamically provisioned PersistentVolumes of this storage class. e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid.
 */
"mountOptions"?: Array<string>;
/**
 * parameters holds the parameters for the provisioner that should create volumes of this storage class.
 */
"parameters"?: {
  [key: string]: string;
};
/**
 * provisioner indicates the type of the provisioner.
 */
"provisioner": string;
/**
 * reclaimPolicy controls the reclaimPolicy for dynamically provisioned PersistentVolumes of this storage class. Defaults to Delete.
 */
"reclaimPolicy"?: string;
/**
 * volumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.
 */
"volumeBindingMode"?: string;
}

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 * 
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export class StorageClass extends Model<IStorageClass> implements IStorageClass {
  "allowVolumeExpansion"?: boolean;
"allowedTopologies"?: Array<IIoK8sApiCoreV1TopologySelectorTerm>;
"apiVersion": IStorageClass["apiVersion"];
"kind": IStorageClass["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"mountOptions"?: Array<string>;
"parameters"?: {
  [key: string]: string;
};
"provisioner": string;
"reclaimPolicy"?: string;
"volumeBindingMode"?: string;

static apiVersion: IStorageClass["apiVersion"] = "storage.k8s.io/v1";
static kind: IStorageClass["kind"] = "StorageClass";
static is: TypeMetaGuard<IStorageClass> = createTypeMetaGuard<IStorageClass>(StorageClass);

constructor(data?: ModelData<IStorageClass>) {
  super();

  this.setDefinedProps({
    apiVersion: StorageClass.apiVersion,
    kind: StorageClass.kind,
    ...data
  } as IStorageClass);
}
}

setValidateFunc(StorageClass, validate as ValidateFunc<IStorageClass>);

export type {
  IStorageClass as IIoK8sApiStorageV1StorageClass,
  StorageClass as IoK8sApiStorageV1StorageClass
};
