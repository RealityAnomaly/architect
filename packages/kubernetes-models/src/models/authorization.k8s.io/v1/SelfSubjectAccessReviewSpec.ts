import { IIoK8sApiAuthorizationV1NonResourceAttributes } from "./NonResourceAttributes.ts";
import { IIoK8sApiAuthorizationV1ResourceAttributes } from "./ResourceAttributes.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authorization.k8s.io/v1/SelfSubjectAccessReviewSpec.js";

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of resourceAttributes and nonResourceAttributes must be set
 */
export interface ISelfSubjectAccessReviewSpec {
  /**
 * nonResourceAttributes describes information for a non-resource access request
 */
"nonResourceAttributes"?: IIoK8sApiAuthorizationV1NonResourceAttributes;
/**
 * resourceAttributes describes information for a resource access request
 */
"resourceAttributes"?: IIoK8sApiAuthorizationV1ResourceAttributes;
}

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of resourceAttributes and nonResourceAttributes must be set
 */
export class SelfSubjectAccessReviewSpec extends Model<ISelfSubjectAccessReviewSpec> implements ISelfSubjectAccessReviewSpec {
  "nonResourceAttributes"?: IIoK8sApiAuthorizationV1NonResourceAttributes;
"resourceAttributes"?: IIoK8sApiAuthorizationV1ResourceAttributes;

constructor(data?: ModelData<ISelfSubjectAccessReviewSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SelfSubjectAccessReviewSpec, validate as ValidateFunc<ISelfSubjectAccessReviewSpec>);

export type {
  ISelfSubjectAccessReviewSpec as IIoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec,
  SelfSubjectAccessReviewSpec as IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec
};
