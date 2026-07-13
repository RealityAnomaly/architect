import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiExtensionsV1beta1ReplicaSetSpec } from "./ReplicaSetSpec.ts";
import { IIoK8sApiExtensionsV1beta1ReplicaSetStatus } from "./ReplicaSetStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/extensions/v1beta1/ReplicaSet.js";

/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 * @deprecated
 */
export interface IReplicaSet extends TypeMeta {
  "apiVersion": "extensions/v1beta1";
"kind": "ReplicaSet";
/**
 * If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiExtensionsV1beta1ReplicaSetSpec;
/**
 * Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiExtensionsV1beta1ReplicaSetStatus;
}

/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 * @deprecated
 */
export class ReplicaSet extends Model<IReplicaSet> implements IReplicaSet {
  "apiVersion": IReplicaSet["apiVersion"];
"kind": IReplicaSet["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiExtensionsV1beta1ReplicaSetSpec;
"status"?: IIoK8sApiExtensionsV1beta1ReplicaSetStatus;

static apiVersion: IReplicaSet["apiVersion"] = "extensions/v1beta1";
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
  IReplicaSet as IIoK8sApiExtensionsV1beta1ReplicaSet,
  ReplicaSet as IoK8sApiExtensionsV1beta1ReplicaSet
};
