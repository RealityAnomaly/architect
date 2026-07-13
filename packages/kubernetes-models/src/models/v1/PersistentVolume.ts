import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoreV1PersistentVolumeSpec } from "./PersistentVolumeSpec.ts";
import { IIoK8sApiCoreV1PersistentVolumeStatus } from "./PersistentVolumeStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PersistentVolume.js";

/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
export interface IPersistentVolume extends TypeMeta {
  "apiVersion": "v1";
"kind": "PersistentVolume";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec defines a specification of a persistent volume owned by the cluster. Provisioned by an administrator. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
 */
"spec"?: IIoK8sApiCoreV1PersistentVolumeSpec;
/**
 * status represents the current information/status for the persistent volume. Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
 */
"status"?: IIoK8sApiCoreV1PersistentVolumeStatus;
}

/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
export class PersistentVolume extends Model<IPersistentVolume> implements IPersistentVolume {
  "apiVersion": IPersistentVolume["apiVersion"];
"kind": IPersistentVolume["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiCoreV1PersistentVolumeSpec;
"status"?: IIoK8sApiCoreV1PersistentVolumeStatus;

static apiVersion: IPersistentVolume["apiVersion"] = "v1";
static kind: IPersistentVolume["kind"] = "PersistentVolume";
static is: TypeMetaGuard<IPersistentVolume> = createTypeMetaGuard<IPersistentVolume>(PersistentVolume);

constructor(data?: ModelData<IPersistentVolume>) {
  super();

  this.setDefinedProps({
    apiVersion: PersistentVolume.apiVersion,
    kind: PersistentVolume.kind,
    ...data
  } as IPersistentVolume);
}
}

setValidateFunc(PersistentVolume, validate as ValidateFunc<IPersistentVolume>);

export type {
  IPersistentVolume as IIoK8sApiCoreV1PersistentVolume,
  PersistentVolume as IoK8sApiCoreV1PersistentVolume
};
