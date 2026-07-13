import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1GroupSubject.js";

/**
 * GroupSubject holds detailed information for group-kind subject.
 */
export interface IGroupSubject {
  /**
 * name is the user group that matches, or "\*" to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required.
 */
"name": string;
}

/**
 * GroupSubject holds detailed information for group-kind subject.
 */
export class GroupSubject extends Model<IGroupSubject> implements IGroupSubject {
  "name": string;

constructor(data?: ModelData<IGroupSubject>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(GroupSubject, validate as ValidateFunc<IGroupSubject>);

export type {
  IGroupSubject as IIoK8sApiFlowcontrolV1GroupSubject,
  GroupSubject as IoK8sApiFlowcontrolV1GroupSubject
};
