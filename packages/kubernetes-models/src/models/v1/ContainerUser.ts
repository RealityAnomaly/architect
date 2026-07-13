import { IIoK8sApiCoreV1LinuxContainerUser } from "./LinuxContainerUser.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ContainerUser.js";

/**
 * ContainerUser represents user identity information
 */
export interface IContainerUser {
  /**
 * Linux holds user identity information initially attached to the first process of the containers in Linux. Note that the actual running identity can be changed if the process has enough privilege to do so.
 */
"linux"?: IIoK8sApiCoreV1LinuxContainerUser;
}

/**
 * ContainerUser represents user identity information
 */
export class ContainerUser extends Model<IContainerUser> implements IContainerUser {
  "linux"?: IIoK8sApiCoreV1LinuxContainerUser;

constructor(data?: ModelData<IContainerUser>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerUser, validate as ValidateFunc<IContainerUser>);

export type {
  IContainerUser as IIoK8sApiCoreV1ContainerUser,
  ContainerUser as IoK8sApiCoreV1ContainerUser
};
