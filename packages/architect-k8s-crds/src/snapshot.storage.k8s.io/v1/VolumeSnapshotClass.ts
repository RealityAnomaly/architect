import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "snapshot.storage.k8s.io.v1.VolumeSnapshotClass";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "snapshot.storage.k8s.io/v1"
      ]
    },
    "deletionPolicy": {
      "enum": [
        "Delete",
        "Retain"
      ],
      "type": "string"
    },
    "driver": {
      "type": "string"
    },
    "kind": {
      "type": "string",
      "enum": [
        "VolumeSnapshotClass"
      ]
    },
    "parameters": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object",
      "properties": {},
      "nullable": true
    },
    "metadata": {
      "oneOf": [
        {
          "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "required": [
    "deletionPolicy",
    "driver",
    "apiVersion",
    "kind"
  ]
};

/**
 * VolumeSnapshotClass specifies parameters that a underlying storage system uses when creating a volume snapshot. A specific VolumeSnapshotClass is used by specifying its name in a VolumeSnapshot object. VolumeSnapshotClasses are non-namespaced
 */
export interface IVolumeSnapshotClass {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "snapshot.storage.k8s.io/v1";
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

static apiVersion: IVolumeSnapshotClass["apiVersion"] = "snapshot.storage.k8s.io/v1";
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


setSchema(VolumeSnapshotClass, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
