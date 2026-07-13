import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthenticationV1beta1UserInfo.js";

/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export interface IUserInfo {
  /**
 * Any additional information provided by the authenticator.
 */
"extra"?: {
  [key: string]: Array<string>;
};
/**
 * The names of groups this user is a part of.
 */
"groups"?: Array<string>;
/**
 * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
 */
"uid"?: string;
/**
 * The name that uniquely identifies this user among all active users.
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
  IUserInfo as IIoK8sApiAuthenticationV1beta1UserInfo,
  UserInfo as IoK8sApiAuthenticationV1beta1UserInfo
};
