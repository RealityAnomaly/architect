import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SnapshotStorageK8sIoV1beta1VolumeSnapshot.js";

/**
 * VolumeSnapshot is a user's request for either creating a point-in-time snapshot of a persistent volume, or binding to a pre-existing snapshot.
 */
export interface IVolumeSnapshot {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "snapshot.storage.k8s.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "VolumeSnapshot";
  /**
   * spec defines the desired characteristics of a snapshot requested by a user. More info: https://kubernetes.io/docs/concepts/storage/volume-snapshots#volumesnapshots Required.
   */
  "spec": {
    /**
     * source specifies where a snapshot will be created from. This field is immutable after creation. Required.
     */
    "source": {
      /**
       * persistentVolumeClaimName specifies the name of the PersistentVolumeClaim object representing the volume from which a snapshot should be created. This PVC is assumed to be in the same namespace as the VolumeSnapshot object. This field should be set if the snapshot does not exists, and needs to be created. This field is immutable.
       */
      "persistentVolumeClaimName"?: string;
      /**
       * volumeSnapshotContentName specifies the name of a pre-existing VolumeSnapshotContent object representing an existing volume snapshot. This field should be set if the snapshot already exists and only needs a representation in Kubernetes. This field is immutable.
       */
      "volumeSnapshotContentName"?: string;
    };
    /**
     * VolumeSnapshotClassName is the name of the VolumeSnapshotClass requested by the VolumeSnapshot. VolumeSnapshotClassName may be left nil to indicate that the default SnapshotClass should be used. A given cluster may have multiple default Volume SnapshotClasses: one default per CSI Driver. If a VolumeSnapshot does not specify a SnapshotClass, VolumeSnapshotSource will be checked to figure out what the associated CSI Driver is, and the default VolumeSnapshotClass associated with that CSI Driver will be used. If more than one VolumeSnapshotClass exist for a given CSI Driver and more than one have been marked as default, CreateSnapshot will fail and generate an event. Empty string is not allowed for this field.
     */
    "volumeSnapshotClassName"?: string;
  };
  /**
   * status represents the current information of a snapshot. Consumers must verify binding between VolumeSnapshot and VolumeSnapshotContent objects is successful (by validating that both VolumeSnapshot and VolumeSnapshotContent point at each other) before using this object.
   */
  "status"?: {
    /**
     * boundVolumeSnapshotContentName is the name of the VolumeSnapshotContent object to which this VolumeSnapshot object intends to bind to. If not specified, it indicates that the VolumeSnapshot object has not been successfully bound to a VolumeSnapshotContent object yet. NOTE: To avoid possible security issues, consumers must verify binding between VolumeSnapshot and VolumeSnapshotContent objects is successful (by validating that both VolumeSnapshot and VolumeSnapshotContent point at each other) before using this object.
     */
    "boundVolumeSnapshotContentName"?: string;
    /**
     * creationTime is the timestamp when the point-in-time snapshot is taken by the underlying storage system. In dynamic snapshot creation case, this field will be filled in by the snapshot controller with the "creation_time" value returned from CSI "CreateSnapshot" gRPC call. For a pre-existing snapshot, this field will be filled with the "creation_time" value returned from the CSI "ListSnapshots" gRPC call if the driver supports it. If not specified, it may indicate that the creation time of the snapshot is unknown.
     */
    "creationTime"?: string;
    /**
     * error is the last observed error during snapshot creation, if any. This field could be helpful to upper level controllers(i.e., application controller) to decide whether they should continue on waiting for the snapshot to be created based on the type of error reported. The snapshot controller will keep retrying when an error occurs during the snapshot creation. Upon success, this error field will be cleared.
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
     * readyToUse indicates if the snapshot is ready to be used to restore a volume. In dynamic snapshot creation case, this field will be filled in by the snapshot controller with the "ready_to_use" value returned from CSI "CreateSnapshot" gRPC call. For a pre-existing snapshot, this field will be filled with the "ready_to_use" value returned from the CSI "ListSnapshots" gRPC call if the driver supports it, otherwise, this field will be set to "True". If not specified, it means the readiness of a snapshot is unknown.
     */
    "readyToUse"?: boolean;
    /**
     * restoreSize represents the minimum size of volume required to create a volume from this snapshot. In dynamic snapshot creation case, this field will be filled in by the snapshot controller with the "size_bytes" value returned from CSI "CreateSnapshot" gRPC call. For a pre-existing snapshot, this field will be filled with the "size_bytes" value returned from the CSI "ListSnapshots" gRPC call if the driver supports it. When restoring a volume from this snapshot, the size of the volume MUST NOT be smaller than the restoreSize if it is specified, otherwise the restoration will fail. If not specified, it indicates that the size is unknown.
     */
    "restoreSize"?: string;
  };
  "metadata"?: IObjectMeta;
}

/**
 * VolumeSnapshot is a user's request for either creating a point-in-time snapshot of a persistent volume, or binding to a pre-existing snapshot.
 */
export class VolumeSnapshot extends Model<IVolumeSnapshot> implements IVolumeSnapshot {
  "apiVersion": IVolumeSnapshot["apiVersion"];
  "kind": IVolumeSnapshot["kind"];
  "spec": IVolumeSnapshot["spec"];
  "status"?: IVolumeSnapshot["status"];
  "metadata"?: IVolumeSnapshot["metadata"];

static apiVersion: IVolumeSnapshot["apiVersion"] = "snapshot.storage.k8s.io/v1beta1";
static kind: IVolumeSnapshot["kind"] = "VolumeSnapshot";
static is = createTypeMetaGuard<IVolumeSnapshot>(VolumeSnapshot);

constructor(data?: ModelData<IVolumeSnapshot>) {
  super({
    apiVersion: VolumeSnapshot.apiVersion,
    kind: VolumeSnapshot.kind,
    ...data
  } as IVolumeSnapshot);
}
}


setValidateFunc(VolumeSnapshot, validate as ValidateFunc<IVolumeSnapshot>);
