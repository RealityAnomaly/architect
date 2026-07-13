import { IIoK8sApiExtensionsV1beta1RollbackConfig } from "./RollbackConfig.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/extensions/v1beta1/DeploymentRollback.js";

/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 * @deprecated
 */
export interface IDeploymentRollback extends TypeMeta {
  "apiVersion": "extensions/v1beta1";
"kind": "DeploymentRollback";
/**
 * Required: This must match the Name of a deployment.
 */
"name": string;
/**
 * The config of this deployment rollback.
 */
"rollbackTo": IIoK8sApiExtensionsV1beta1RollbackConfig;
/**
 * The annotations to be updated to a deployment
 */
"updatedAnnotations"?: {
  [key: string]: string;
};
}

/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 * @deprecated
 */
export class DeploymentRollback extends Model<IDeploymentRollback> implements IDeploymentRollback {
  "apiVersion": IDeploymentRollback["apiVersion"];
"kind": IDeploymentRollback["kind"];
"name": string;
"rollbackTo": IIoK8sApiExtensionsV1beta1RollbackConfig;
"updatedAnnotations"?: {
  [key: string]: string;
};

static apiVersion: IDeploymentRollback["apiVersion"] = "extensions/v1beta1";
static kind: IDeploymentRollback["kind"] = "DeploymentRollback";
static is: TypeMetaGuard<IDeploymentRollback> = createTypeMetaGuard<IDeploymentRollback>(DeploymentRollback);

constructor(data?: ModelData<IDeploymentRollback>) {
  super();

  this.setDefinedProps({
    apiVersion: DeploymentRollback.apiVersion,
    kind: DeploymentRollback.kind,
    ...data
  } as IDeploymentRollback);
}
}

setValidateFunc(DeploymentRollback, validate as ValidateFunc<IDeploymentRollback>);

export type {
  IDeploymentRollback as IIoK8sApiExtensionsV1beta1DeploymentRollback,
  DeploymentRollback as IoK8sApiExtensionsV1beta1DeploymentRollback
};
