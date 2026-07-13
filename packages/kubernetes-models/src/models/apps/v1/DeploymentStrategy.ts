import { IIoK8sApiAppsV1RollingUpdateDeployment } from "./RollingUpdateDeployment.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1/DeploymentStrategy.js";

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface IDeploymentStrategy {
  /**
 * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
 */
"rollingUpdate"?: IIoK8sApiAppsV1RollingUpdateDeployment;
/**
 * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
 */
"type"?: string;
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export class DeploymentStrategy extends Model<IDeploymentStrategy> implements IDeploymentStrategy {
  "rollingUpdate"?: IIoK8sApiAppsV1RollingUpdateDeployment;
"type"?: string;

constructor(data?: ModelData<IDeploymentStrategy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeploymentStrategy, validate as ValidateFunc<IDeploymentStrategy>);

export type {
  IDeploymentStrategy as IIoK8sApiAppsV1DeploymentStrategy,
  DeploymentStrategy as IoK8sApiAppsV1DeploymentStrategy
};
