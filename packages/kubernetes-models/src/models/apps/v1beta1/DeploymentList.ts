import { IIoK8sApiAppsV1beta1Deployment } from "./Deployment.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1beta1/DeploymentList.js";

/**
 * DeploymentList is a list of Deployments.
 */
export interface IDeploymentList extends TypeMeta {
  "apiVersion": "apps/v1beta1";
/**
 * Items is the list of Deployments.
 */
"items": Array<IIoK8sApiAppsV1beta1Deployment>;
"kind": "DeploymentList";
/**
 * Standard list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * DeploymentList is a list of Deployments.
 */
export class DeploymentList extends Model<IDeploymentList> implements IDeploymentList {
  "apiVersion": IDeploymentList["apiVersion"];
"items": Array<IIoK8sApiAppsV1beta1Deployment>;
"kind": IDeploymentList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IDeploymentList["apiVersion"] = "apps/v1beta1";
static kind: IDeploymentList["kind"] = "DeploymentList";
static is: TypeMetaGuard<IDeploymentList> = createTypeMetaGuard<IDeploymentList>(DeploymentList);

constructor(data?: ModelData<IDeploymentList>) {
  super();

  this.setDefinedProps({
    apiVersion: DeploymentList.apiVersion,
    kind: DeploymentList.kind,
    ...data
  } as IDeploymentList);
}
}

setValidateFunc(DeploymentList, validate as ValidateFunc<IDeploymentList>);

export type {
  IDeploymentList as IIoK8sApiAppsV1beta1DeploymentList,
  DeploymentList as IoK8sApiAppsV1beta1DeploymentList
};
