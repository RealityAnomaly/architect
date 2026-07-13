import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authentication.k8s.io/v1/UserInfo.js";

/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export interface IUserInfo {
  /**
 * extra is any additional information provided by the authenticator.
 */
"extra"?: {
  [key: string]: Array<string>;
};
/**
 * groups is the names of groups this user is a part of.
 */
"groups"?: Array<string>;
/**
 * uid is a unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
 */
"uid"?: string;
/**
 * username is the name that uniquely identifies this user among all active users.
 */
"username"?: string;
}

/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export class UserInfo extends Model<IUserInfo> implements IUserInfo {
  "extra"?: {
  [key: string]: Array<string>;
};
"groups"?: Array<string>;
"uid"?: string;
"username"?: string;

constructor(data?: ModelData<IUserInfo>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(UserInfo, validate as ValidateFunc<IUserInfo>);

export type {
  IUserInfo as IIoK8sApiAuthenticationV1UserInfo,
  UserInfo as IoK8sApiAuthenticationV1UserInfo
};
