import { IIoK8sApiExtensionsV1beta1RollingUpdateDeployment } from "./RollingUpdateDeployment.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1DeploymentStrategy.js";

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface IDeploymentStrategy {
  /**
 * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
 */
"rollingUpdate"?: IIoK8sApiExtensionsV1beta1RollingUpdateDeployment;
/**
 * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
 */
"type"?: string;
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export class DeploymentStrategy extends Model<IDeploymentStrategy> implements IDeploymentStrategy {
  "rollingUpdate"?: IIoK8sApiExtensionsV1beta1RollingUpdateDeployment;
"type"?: string;

constructor(data?: ModelData<IDeploymentStrategy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeploymentStrategy, validate as ValidateFunc<IDeploymentStrategy>);

export type {
  IDeploymentStrategy as IIoK8sApiExtensionsV1beta1DeploymentStrategy,
  DeploymentStrategy as IoK8sApiExtensionsV1beta1DeploymentStrategy
};
