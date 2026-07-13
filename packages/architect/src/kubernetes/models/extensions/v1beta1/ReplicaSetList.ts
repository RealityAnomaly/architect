import { IIoK8sApiExtensionsV1beta1ReplicaSet } from "./ReplicaSet.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1ReplicaSetList.js";

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export interface IReplicaSetList extends TypeMeta {
  "apiVersion": "extensions/v1beta1";
/**
 * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
 */
"items": Array<IIoK8sApiExtensionsV1beta1ReplicaSet>;
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
"items": Array<IIoK8sApiExtensionsV1beta1ReplicaSet>;
"kind": IReplicaSetList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IReplicaSetList["apiVersion"] = "extensions/v1beta1";
static kind: IReplicaSetList["kind"] = "ReplicaSetList";
static is = createTypeMetaGuard<IReplicaSetList>(ReplicaSetList);

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
  IReplicaSetList as IIoK8sApiExtensionsV1beta1ReplicaSetList,
  ReplicaSetList as IoK8sApiExtensionsV1beta1ReplicaSetList
};
