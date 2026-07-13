import { IIoK8sApiAuthorizationV1NonResourceAttributes } from "./NonResourceAttributes.ts";
import { IIoK8sApiAuthorizationV1ResourceAttributes } from "./ResourceAttributes.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authorization.k8s.io/v1/SubjectAccessReviewSpec.js";

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of resourceAttributes and nonResourceAttributes must be set
 */
export interface ISubjectAccessReviewSpec {
  /**
 * extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
 */
"extra"?: {
  [key: string]: Array<string>;
};
/**
 * groups is the groups you're testing for.
 */
"groups"?: Array<string>;
/**
 * nonResourceAttributes describes information for a non-resource access request
 */
"nonResourceAttributes"?: IIoK8sApiAuthorizationV1NonResourceAttributes;
/**
 * resourceAttributes describes information for a resource access request
 */
"resourceAttributes"?: IIoK8sApiAuthorizationV1ResourceAttributes;
/**
 * uid information about the requesting user.
 */
"uid"?: string;
/**
 * user is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups
 */
"user"?: string;
}

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of resourceAttributes and nonResourceAttributes must be set
 */
export class SubjectAccessReviewSpec extends Model<ISubjectAccessReviewSpec> implements ISubjectAccessReviewSpec {
  "extra"?: {
  [key: string]: Array<string>;
};
"groups"?: Array<string>;
"nonResourceAttributes"?: IIoK8sApiAuthorizationV1NonResourceAttributes;
"resourceAttributes"?: IIoK8sApiAuthorizationV1ResourceAttributes;
"uid"?: string;
"user"?: string;

constructor(data?: ModelData<ISubjectAccessReviewSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SubjectAccessReviewSpec, validate as ValidateFunc<ISubjectAccessReviewSpec>);

export type {
  ISubjectAccessReviewSpec as IIoK8sApiAuthorizationV1SubjectAccessReviewSpec,
  SubjectAccessReviewSpec as IoK8sApiAuthorizationV1SubjectAccessReviewSpec
};
