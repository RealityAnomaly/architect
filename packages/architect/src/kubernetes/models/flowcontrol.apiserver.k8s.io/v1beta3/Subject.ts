import { IIoK8sApiFlowcontrolV1beta3GroupSubject } from "./GroupSubject.ts";
import { IIoK8sApiFlowcontrolV1beta3ServiceAccountSubject } from "./ServiceAccountSubject.ts";
import { IIoK8sApiFlowcontrolV1beta3UserSubject } from "./UserSubject.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta3Subject.js";

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 */
export interface ISubject {
  /**
 * `group` matches based on user group name.
 */
"group"?: IIoK8sApiFlowcontrolV1beta3GroupSubject;
/**
 * `kind` indicates which one of the other fields is non-empty. Required
 */
"kind": string;
/**
 * `serviceAccount` matches ServiceAccounts.
 */
"serviceAccount"?: IIoK8sApiFlowcontrolV1beta3ServiceAccountSubject;
/**
 * `user` matches based on username.
 */
"user"?: IIoK8sApiFlowcontrolV1beta3UserSubject;
}

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 */
export class Subject extends Model<ISubject> implements ISubject {
  "group"?: IIoK8sApiFlowcontrolV1beta3GroupSubject;
"kind": ISubject["kind"];
"serviceAccount"?: IIoK8sApiFlowcontrolV1beta3ServiceAccountSubject;
"user"?: IIoK8sApiFlowcontrolV1beta3UserSubject;

constructor(data?: ModelData<ISubject>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Subject, validate as ValidateFunc<ISubject>);

export type {
  ISubject as IIoK8sApiFlowcontrolV1beta3Subject,
  Subject as IoK8sApiFlowcontrolV1beta3Subject
};
