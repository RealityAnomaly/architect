import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SnapshotStorageK8sIoV1beta1VolumeSnapshotContent.js";

/**
 * VolumeSnapshotContent represents the actual "on-disk" snapshot object in the underlying storage system
 */
export interface IVolumeSnapshotContent {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "snapshot.storage.k8s.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "VolumeSnapshotContent";
  /**
   * spec defines properties of a VolumeSnapshotContent created by the underlying storage system. Required.
   */
  "spec": {
    /**
     * deletionPolicy determines whether this VolumeSnapshotContent and its physical snapshot on the underlying storage system should be deleted when its bound VolumeSnapshot is deleted. Supported values are "Retain" and "Delete". "Retain" means that the VolumeSnapshotContent and its physical snapshot on underlying storage system are kept. "Delete" means that the VolumeSnapshotContent and its physical snapshot on underlying storage system are deleted. For dynamically provisioned snapshots, this field will automatically be filled in by the CSI snapshotter sidecar with the "DeletionPolicy" field defined in the corresponding VolumeSnapshotClass. For pre-existing snapshots, users MUST specify this field when creating the  VolumeSnapshotContent object. Required.
     */
    "deletionPolicy": "Delete" | "Retain";
    /**
     * driver is the name of the CSI driver used to create the physical snapshot on the underlying storage system. This MUST be the same as the name returned by the CSI GetPluginName() call for that driver. Required.
     */
    "driver": string;
    /**
     * source specifies whether the snapshot is (or should be) dynamically provisioned or already exists, and just requires a Kubernetes object representation. This field is immutable after creation. Required.
     */
    "source": {
      /**
       * snapshotHandle specifies the CSI "snapshot_id" of a pre-existing snapshot on the underlying storage system for which a Kubernetes object representation was (or should be) created. This field is immutable.
       */
      "snapshotHandle"?: string;
      /**
       * volumeHandle specifies the CSI "volume_id" of the volume from which a snapshot should be dynamically taken from. This field is immutable.
       */
      "volumeHandle"?: string;
    };
    /**
     * name of the VolumeSnapshotClass from which this snapshot was (or will be) created. Note that after provisioning, the VolumeSnapshotClass may be deleted or recreated with different set of values, and as such, should not be referenced post-snapshot creation.
     */
    "volumeSnapshotClassName"?: string;
    /**
     * volumeSnapshotRef specifies the VolumeSnapshot object to which this VolumeSnapshotContent object is bound. VolumeSnapshot.Spec.VolumeSnapshotContentName field must reference to this VolumeSnapshotContent's name for the bidirectional binding to be valid. For a pre-existing VolumeSnapshotContent object, name and namespace of the VolumeSnapshot object MUST be provided for binding to happen. This field is immutable after creation. Required.
     */
    "volumeSnapshotRef": {
      /**
       * API version of the referent.
       */
      "apiVersion"?: string;
      /**
       * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
       */
      "fieldPath"?: string;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      "kind"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
      /**
       * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
       */
      "resourceVersion"?: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
       */
      "uid"?: string;
    };
  };
  /**
   * status represents the current information of a snapshot.
   */
  "status"?: {
    /**
     * creationTime is the timestamp when the point-in-time snapshot is taken by the underlying storage system. In dynamic snapshot creation case, this field will be filled in by the CSI snapshotter sidecar with the "creation_time" value returned from CSI "CreateSnapshot" gRPC call. For a pre-existing snapshot, this field will be filled with the "creation_time" value returned from the CSI "ListSnapshots" gRPC call if the driver supports it. If not specified, it indicates the creation time is unknown. The format of this field is a Unix nanoseconds time encoded as an int64. On Unix, the command `date +%s%N` returns the current time in nanoseconds since 1970-01-01 00:00:00 UTC.
     */
    "creationTime"?: number;
    /**
     * error is the last observed error during snapshot creation, if any. Upon success after retry, this error field will be cleared.
     */
    "error"?: {
      /**
       * message is a string detailing the encountered error during snapshot creation if specified. NOTE: message may be logged, and it should not contain sensitive information.
       */
      "message"?: string;
      /**
       * time is the timestamp when the error was encountered.
       */
      "time"?: string;
    };
    /**
     * readyToUse indicates if a snapshot is ready to be used to restore a volume. In dynamic snapshot creation case, this field will be filled in by the CSI snapshotter sidecar with the "ready_to_use" value returned from CSI "CreateSnapshot" gRPC call. For a pre-existing snapshot, this field will be filled with the "ready_to_use" value returned from the CSI "ListSnapshots" gRPC call if the driver supports it, otherwise, this field will be set to "True". If not specified, it means the readiness of a snapshot is unknown.
     */
    "readyToUse"?: boolean;
    /**
     * restoreSize represents the complete size of the snapshot in bytes. In dynamic snapshot creation case, this field will be filled in by the CSI snapshotter sidecar with the "size_bytes" value returned from CSI "CreateSnapshot" gRPC call. For a pre-existing snapshot, this field will be filled with the "size_bytes" value returned from the CSI "ListSnapshots" gRPC call if the driver supports it. When restoring a volume from this snapshot, the size of the volume MUST NOT be smaller than the restoreSize if it is specified, otherwise the restoration will fail. If not specified, it indicates that the size is unknown.
     */
    "restoreSize"?: number;
    /**
     * snapshotHandle is the CSI "snapshot_id" of a snapshot on the underlying storage system. If not specified, it indicates that dynamic snapshot creation has either failed or it is still in progress.
     */
    "snapshotHandle"?: string;
  };
  "metadata"?: IObjectMeta;
}

/**
 * VolumeSnapshotContent represents the actual "on-disk" snapshot object in the underlying storage system
 */
export class VolumeSnapshotContent extends Model<IVolumeSnapshotContent> implements IVolumeSnapshotContent {
  "apiVersion": IVolumeSnapshotContent["apiVersion"];
  "kind": IVolumeSnapshotContent["kind"];
  "spec": IVolumeSnapshotContent["spec"];
  "status"?: IVolumeSnapshotContent["status"];
  "metadata"?: IVolumeSnapshotContent["metadata"];

static apiVersion: IVolumeSnapshotContent["apiVersion"] = "snapshot.storage.k8s.io/v1beta1";
static kind: IVolumeSnapshotContent["kind"] = "VolumeSnapshotContent";
static is = createTypeMetaGuard<IVolumeSnapshotContent>(VolumeSnapshotContent);

constructor(data?: ModelData<IVolumeSnapshotContent>) {
  super({
    apiVersion: VolumeSnapshotContent.apiVersion,
    kind: VolumeSnapshotContent.kind,
    ...data
  } as IVolumeSnapshotContent);
}
}


setValidateFunc(VolumeSnapshotContent, validate as ValidateFunc<IVolumeSnapshotContent>);
