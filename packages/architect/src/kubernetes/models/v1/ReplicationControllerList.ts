import { IIoK8sApiCoreV1ReplicationController } from "./ReplicationController.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ReplicationControllerList.js";

/**
 * ReplicationControllerList is a collection of replication controllers.
 */
export interface IReplicationControllerList extends TypeMeta {
  "apiVersion": "v1";
/**
 * List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
 */
"items": Array<IIoK8sApiCoreV1ReplicationController>;
"kind": "ReplicationControllerList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ReplicationControllerList is a collection of replication controllers.
 */
export class ReplicationControllerList extends Model<IReplicationControllerList> implements IReplicationControllerList {
  "apiVersion": IReplicationControllerList["apiVersion"];
"items": Array<IIoK8sApiCoreV1ReplicationController>;
"kind": IReplicationControllerList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IReplicationControllerList["apiVersion"] = "v1";
static kind: IReplicationControllerList["kind"] = "ReplicationControllerList";
static is = createTypeMetaGuard<IReplicationControllerList>(ReplicationControllerList);

constructor(data?: ModelData<IReplicationControllerList>) {
  super();

  this.setDefinedProps({
    apiVersion: ReplicationControllerList.apiVersion,
    kind: ReplicationControllerList.kind,
    ...data
  } as IReplicationControllerList);
}
}

setValidateFunc(ReplicationControllerList, validate as ValidateFunc<IReplicationControllerList>);

export type {
  IReplicationControllerList as IIoK8sApiCoreV1ReplicationControllerList,
  ReplicationControllerList as IoK8sApiCoreV1ReplicationControllerList
};
