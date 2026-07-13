import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1LinuxContainerUser.js";

/**
 * LinuxContainerUser represents user identity information in Linux containers
 */
export interface ILinuxContainerUser {
  /**
 * GID is the primary gid initially attached to the first process in the container
 */
"gid": number;
/**
 * SupplementalGroups are the supplemental groups initially attached to the first process in the container
 */
"supplementalGroups"?: Array<number>;
/**
 * UID is the primary uid initially attached to the first process in the container
 */
"uid": number;
}

/**
 * LinuxContainerUser represents user identity information in Linux containers
 */
export class LinuxContainerUser extends Model<ILinuxContainerUser> implements ILinuxContainerUser {
  "gid": number;
"supplementalGroups"?: Array<number>;
"uid": number;

constructor(data?: ModelData<ILinuxContainerUser>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LinuxContainerUser, validate as ValidateFunc<ILinuxContainerUser>);

export type {
  ILinuxContainerUser as IIoK8sApiCoreV1LinuxContainerUser,
  LinuxContainerUser as IoK8sApiCoreV1LinuxContainerUser
};
