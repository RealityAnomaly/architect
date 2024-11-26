import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SnapshotStorageK8sIoV1beta1VolumeSnapshotClass.js";

/**
 * VolumeSnapshotClass specifies parameters that a underlying storage system uses when creating a volume snapshot. A specific VolumeSnapshotClass is used by specifying its name in a VolumeSnapshot object. VolumeSnapshotClasses are non-namespaced
 */
export interface IVolumeSnapshotClass {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "snapshot.storage.k8s.io/v1beta1";
  /**
   * deletionPolicy determines whether a VolumeSnapshotContent created through the VolumeSnapshotClass should be deleted when its bound VolumeSnapshot is deleted. Supported values are "Retain" and "Delete". "Retain" means that the VolumeSnapshotContent and its physical snapshot on underlying storage system are kept. "Delete" means that the VolumeSnapshotContent and its physical snapshot on underlying storage system are deleted. Required.
   */
  "deletionPolicy": "Delete" | "Retain";
  /**
   * driver is the name of the storage driver that handles this VolumeSnapshotClass. Required.
   */
  "driver": string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "VolumeSnapshotClass";
  /**
   * parameters is a key-value map with storage driver specific parameters for creating snapshots. These values are opaque to Kubernetes.
   */
  "parameters"?: {
    [key: string]: string;
  };
  "metadata"?: IObjectMeta;
}

/**
 * VolumeSnapshotClass specifies parameters that a underlying storage system uses when creating a volume snapshot. A specific VolumeSnapshotClass is used by specifying its name in a VolumeSnapshot object. VolumeSnapshotClasses are non-namespaced
 */
export class VolumeSnapshotClass extends Model<IVolumeSnapshotClass> implements IVolumeSnapshotClass {
  "apiVersion": IVolumeSnapshotClass["apiVersion"];
  "deletionPolicy": IVolumeSnapshotClass["deletionPolicy"];
  "driver": IVolumeSnapshotClass["driver"];
  "kind": IVolumeSnapshotClass["kind"];
  "parameters"?: IVolumeSnapshotClass["parameters"];
  "metadata"?: IVolumeSnapshotClass["metadata"];

static apiVersion: IVolumeSnapshotClass["apiVersion"] = "snapshot.storage.k8s.io/v1beta1";
static kind: IVolumeSnapshotClass["kind"] = "VolumeSnapshotClass";
static is = createTypeMetaGuard<IVolumeSnapshotClass>(VolumeSnapshotClass);

constructor(data?: ModelData<IVolumeSnapshotClass>) {
  super({
    apiVersion: VolumeSnapshotClass.apiVersion,
    kind: VolumeSnapshotClass.kind,
    ...data
  } as IVolumeSnapshotClass);
}
}


setValidateFunc(VolumeSnapshotClass, validate as ValidateFunc<IVolumeSnapshotClass>);
