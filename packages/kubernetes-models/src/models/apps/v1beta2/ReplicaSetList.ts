import { IIoK8sApiAppsV1beta2ReplicaSet } from "./ReplicaSet.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1beta2/ReplicaSetList.js";

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export interface IReplicaSetList extends TypeMeta {
  "apiVersion": "apps/v1beta2";
/**
 * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
 */
"items": Array<IIoK8sApiAppsV1beta2ReplicaSet>;
"kind": "ReplicaSetList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export class ReplicaSetList extends Model<IReplicaSetList> implements IReplicaSetList {
  "apiVersion": IReplicaSetList["apiVersion"];
"items": Array<IIoK8sApiAppsV1beta2ReplicaSet>;
"kind": IReplicaSetList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IReplicaSetList["apiVersion"] = "apps/v1beta2";
static kind: IReplicaSetList["kind"] = "ReplicaSetList";
static is: TypeMetaGuard<IReplicaSetList> = createTypeMetaGuard<IReplicaSetList>(ReplicaSetList);

constructor(data?: ModelData<IReplicaSetList>) {
  super();

  this.setDefinedProps({
    apiVersion: ReplicaSetList.apiVersion,
    kind: ReplicaSetList.kind,
    ...data
  } as IReplicaSetList);
}
}

setValidateFunc(ReplicaSetList, validate as ValidateFunc<IReplicaSetList>);

export type {
  IReplicaSetList as IIoK8sApiAppsV1beta2ReplicaSetList,
  ReplicaSetList as IoK8sApiAppsV1beta2ReplicaSetList
};
