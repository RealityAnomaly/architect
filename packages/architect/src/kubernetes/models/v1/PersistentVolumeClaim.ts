import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoreV1PersistentVolumeClaimSpec } from "./PersistentVolumeClaimSpec.ts";
import { IIoK8sApiCoreV1PersistentVolumeClaimStatus } from "./PersistentVolumeClaimStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PersistentVolumeClaim.js";

/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 */
export interface IPersistentVolumeClaim extends TypeMeta {
  "apiVersion": "v1";
"kind": "PersistentVolumeClaim";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
 */
"spec"?: IIoK8sApiCoreV1PersistentVolumeClaimSpec;
/**
 * status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
 */
"status"?: IIoK8sApiCoreV1PersistentVolumeClaimStatus;
}

/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 */
export class PersistentVolumeClaim extends Model<IPersistentVolumeClaim> implements IPersistentVolumeClaim {
  "apiVersion": IPersistentVolumeClaim["apiVersion"];
"kind": IPersistentVolumeClaim["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiCoreV1PersistentVolumeClaimSpec;
"status"?: IIoK8sApiCoreV1PersistentVolumeClaimStatus;

static apiVersion: IPersistentVolumeClaim["apiVersion"] = "v1";
static kind: IPersistentVolumeClaim["kind"] = "PersistentVolumeClaim";
static is = createTypeMetaGuard<IPersistentVolumeClaim>(PersistentVolumeClaim);

constructor(data?: ModelData<IPersistentVolumeClaim>) {
  super();

  this.setDefinedProps({
    apiVersion: PersistentVolumeClaim.apiVersion,
    kind: PersistentVolumeClaim.kind,
    ...data
  } as IPersistentVolumeClaim);
}
}

setValidateFunc(PersistentVolumeClaim, validate as ValidateFunc<IPersistentVolumeClaim>);

export type {
  IPersistentVolumeClaim as IIoK8sApiCoreV1PersistentVolumeClaim,
  PersistentVolumeClaim as IoK8sApiCoreV1PersistentVolumeClaim
};
