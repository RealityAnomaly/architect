import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta1UserSubject.js";

/**
 * UserSubject holds detailed information for user-kind subject.
 */
export interface IUserSubject {
  /**
 * `name` is the username that matches, or "\*" to match all usernames. Required.
 */
"name": string;
}

/**
 * UserSubject holds detailed information for user-kind subject.
 */
export class UserSubject extends Model<IUserSubject> implements IUserSubject {
  "name": string;

constructor(data?: ModelData<IUserSubject>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(UserSubject, validate as ValidateFunc<IUserSubject>);

export type {
  IUserSubject as IIoK8sApiFlowcontrolV1beta1UserSubject,
  UserSubject as IoK8sApiFlowcontrolV1beta1UserSubject
};
