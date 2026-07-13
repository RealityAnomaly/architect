import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAppsV1DeploymentSpec } from "./DeploymentSpec.ts";
import { IIoK8sApiAppsV1DeploymentStatus } from "./DeploymentStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1Deployment.js";

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export interface IDeployment extends TypeMeta {
  "apiVersion": "apps/v1";
"kind": "Deployment";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of the Deployment.
 */
"spec"?: IIoK8sApiAppsV1DeploymentSpec;
/**
 * Most recently observed status of the Deployment.
 */
"status"?: IIoK8sApiAppsV1DeploymentStatus;
}

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export class Deployment extends Model<IDeployment> implements IDeployment {
  "apiVersion": IDeployment["apiVersion"];
"kind": IDeployment["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAppsV1DeploymentSpec;
"status"?: IIoK8sApiAppsV1DeploymentStatus;

static apiVersion: IDeployment["apiVersion"] = "apps/v1";
static kind: IDeployment["kind"] = "Deployment";
static is = createTypeMetaGuard<IDeployment>(Deployment);

constructor(data?: ModelData<IDeployment>) {
  super();

  this.setDefinedProps({
    apiVersion: Deployment.apiVersion,
    kind: Deployment.kind,
    ...data
  } as IDeployment);
}
}

setValidateFunc(Deployment, validate as ValidateFunc<IDeployment>);

export type {
  IDeployment as IIoK8sApiAppsV1Deployment,
  Deployment as IoK8sApiAppsV1Deployment
};
