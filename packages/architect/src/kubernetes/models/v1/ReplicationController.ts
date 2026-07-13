import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoreV1ReplicationControllerSpec } from "./ReplicationControllerSpec.ts";
import { IIoK8sApiCoreV1ReplicationControllerStatus } from "./ReplicationControllerStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ReplicationController.js";

/**
 * ReplicationController represents the configuration of a replication controller.
 */
export interface IReplicationController extends TypeMeta {
  "apiVersion": "v1";
"kind": "ReplicationController";
/**
 * If the Labels of a ReplicationController are empty, they are defaulted to be the same as the Pod(s) that the replication controller manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the specification of the desired behavior of the replication controller. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1ReplicationControllerSpec;
/**
 * Status is the most recently observed status of the replication controller. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiCoreV1ReplicationControllerStatus;
}

/**
 * ReplicationController represents the configuration of a replication controller.
 */
export class ReplicationController extends Model<IReplicationController> implements IReplicationController {
  "apiVersion": IReplicationController["apiVersion"];
"kind": IReplicationController["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiCoreV1ReplicationControllerSpec;
"status"?: IIoK8sApiCoreV1ReplicationControllerStatus;

static apiVersion: IReplicationController["apiVersion"] = "v1";
static kind: IReplicationController["kind"] = "ReplicationController";
static is = createTypeMetaGuard<IReplicationController>(ReplicationController);

constructor(data?: ModelData<IReplicationController>) {
  super();

  this.setDefinedProps({
    apiVersion: ReplicationController.apiVersion,
    kind: ReplicationController.kind,
    ...data
  } as IReplicationController);
}
}

setValidateFunc(ReplicationController, validate as ValidateFunc<IReplicationController>);

export type {
  IReplicationController as IIoK8sApiCoreV1ReplicationController,
  ReplicationController as IoK8sApiCoreV1ReplicationController
};
