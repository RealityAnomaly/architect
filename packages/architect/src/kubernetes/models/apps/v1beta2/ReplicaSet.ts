import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAppsV1beta2ReplicaSetSpec } from "./ReplicaSetSpec.ts";
import { IIoK8sApiAppsV1beta2ReplicaSetStatus } from "./ReplicaSetStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta2ReplicaSet.js";

/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 * @deprecated
 */
export interface IReplicaSet extends TypeMeta {
  "apiVersion": "apps/v1beta2";
"kind": "ReplicaSet";
/**
 * If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiAppsV1beta2ReplicaSetSpec;
/**
 * Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiAppsV1beta2ReplicaSetStatus;
}

/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 * @deprecated
 */
export class ReplicaSet extends Model<IReplicaSet> implements IReplicaSet {
  "apiVersion": IReplicaSet["apiVersion"];
"kind": IReplicaSet["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAppsV1beta2ReplicaSetSpec;
"status"?: IIoK8sApiAppsV1beta2ReplicaSetStatus;

static apiVersion: IReplicaSet["apiVersion"] = "apps/v1beta2";
static kind: IReplicaSet["kind"] = "ReplicaSet";
static is = createTypeMetaGuard<IReplicaSet>(ReplicaSet);

constructor(data?: ModelData<IReplicaSet>) {
  super();

  this.setDefinedProps({
    apiVersion: ReplicaSet.apiVersion,
    kind: ReplicaSet.kind,
    ...data
  } as IReplicaSet);
}
}

setValidateFunc(ReplicaSet, validate as ValidateFunc<IReplicaSet>);

export type {
  IReplicaSet as IIoK8sApiAppsV1beta2ReplicaSet,
  ReplicaSet as IoK8sApiAppsV1beta2ReplicaSet
};
