import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAppsV1beta2DeploymentSpec } from "./DeploymentSpec.ts";
import { IIoK8sApiAppsV1beta2DeploymentStatus } from "./DeploymentStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1beta2/Deployment.js";

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 * @deprecated
 */
export interface IDeployment extends TypeMeta {
  "apiVersion": "apps/v1beta2";
"kind": "Deployment";
/**
 * Standard object metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of the Deployment.
 */
"spec"?: IIoK8sApiAppsV1beta2DeploymentSpec;
/**
 * Most recently observed status of the Deployment.
 */
"status"?: IIoK8sApiAppsV1beta2DeploymentStatus;
}

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 * @deprecated
 */
export class Deployment extends Model<IDeployment> implements IDeployment {
  "apiVersion": IDeployment["apiVersion"];
"kind": IDeployment["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAppsV1beta2DeploymentSpec;
"status"?: IIoK8sApiAppsV1beta2DeploymentStatus;

static apiVersion: IDeployment["apiVersion"] = "apps/v1beta2";
static kind: IDeployment["kind"] = "Deployment";
static is: TypeMetaGuard<IDeployment> = createTypeMetaGuard<IDeployment>(Deployment);

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
  IDeployment as IIoK8sApiAppsV1beta2Deployment,
  Deployment as IoK8sApiAppsV1beta2Deployment
};
