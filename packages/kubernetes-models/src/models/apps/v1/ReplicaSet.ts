import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAppsV1ReplicaSetSpec } from "./ReplicaSetSpec.ts";
import { IIoK8sApiAppsV1ReplicaSetStatus } from "./ReplicaSetStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1/ReplicaSet.js";

/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export interface IReplicaSet extends TypeMeta {
  "apiVersion": "apps/v1";
"kind": "ReplicaSet";
/**
 * If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiAppsV1ReplicaSetSpec;
/**
 * Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiAppsV1ReplicaSetStatus;
}

/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export class ReplicaSet extends Model<IReplicaSet> implements IReplicaSet {
  "apiVersion": IReplicaSet["apiVersion"];
"kind": IReplicaSet["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAppsV1ReplicaSetSpec;
"status"?: IIoK8sApiAppsV1ReplicaSetStatus;

static apiVersion: IReplicaSet["apiVersion"] = "apps/v1";
static kind: IReplicaSet["kind"] = "ReplicaSet";
static is: TypeMetaGuard<IReplicaSet> = createTypeMetaGuard<IReplicaSet>(ReplicaSet);

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
  IReplicaSet as IIoK8sApiAppsV1ReplicaSet,
  ReplicaSet as IoK8sApiAppsV1ReplicaSet
};
