import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthorizationV1beta1NonResourceRule.js";

/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export interface INonResourceRule {
  /**
 * NonResourceURLs is a set of partial urls that a user should have access to.  \*s are allowed, but only as the full, final step in the path.  "\*" means all.
 */
"nonResourceURLs"?: Array<string>;
/**
 * Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "\*" means all.
 */
"verbs": Array<string>;
}

/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export class NonResourceRule extends Model<INonResourceRule> implements INonResourceRule {
  "nonResourceURLs"?: Array<string>;
"verbs": Array<string>;

constructor(data?: ModelData<INonResourceRule>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NonResourceRule, validate as ValidateFunc<INonResourceRule>);

export type {
  INonResourceRule as IIoK8sApiAuthorizationV1beta1NonResourceRule,
  NonResourceRule as IoK8sApiAuthorizationV1beta1NonResourceRule
};
