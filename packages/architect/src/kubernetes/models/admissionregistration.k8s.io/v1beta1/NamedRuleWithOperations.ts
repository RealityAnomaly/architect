import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations.js";

/**
 * NamedRuleWithOperations is a tuple of Operations and Resources with ResourceNames.
 */
export interface INamedRuleWithOperations {
  /**
 * apiGroups is the API groups the resources belong to. '\*' is all groups. If '\*' is present, the length of the slice must be one. Required.
 */
"apiGroups"?: Array<string>;
/**
 * apiVersions is the API versions the resources belong to. '\*' is all versions. If '\*' is present, the length of the slice must be one. Required.
 */
"apiVersions"?: Array<string>;
/**
 * operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or \* for all of those operations and any future admission operations that are added. If '\*' is present, the length of the slice must be one. Required.
 */
"operations"?: Array<string>;
/**
 * resourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
 */
"resourceNames"?: Array<string>;
/**
 * resources is a list of resources this rule applies to.
 * 
 * For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '\*' means all resources, but not subresources. 'pods/\*' means all subresources of pods. '\*\/scale' means all scale subresources. '\*\/\*' means all resources and their subresources.
 * 
 * If wildcard is present, the validation rule will ensure resources do not overlap with each other.
 * 
 * Depending on the enclosing object, subresources might not be allowed. Required.
 */
"resources"?: Array<string>;
/**
 * scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "\*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "\*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "\*".
 */
"scope"?: string;
}

/**
 * NamedRuleWithOperations is a tuple of Operations and Resources with ResourceNames.
 */
export class NamedRuleWithOperations extends Model<INamedRuleWithOperations> implements INamedRuleWithOperations {
  "apiGroups"?: Array<string>;
"apiVersions"?: Array<string>;
"operations"?: Array<string>;
"resourceNames"?: Array<string>;
"resources"?: Array<string>;
"scope"?: string;

constructor(data?: ModelData<INamedRuleWithOperations>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NamedRuleWithOperations, validate as ValidateFunc<INamedRuleWithOperations>);

export type {
  INamedRuleWithOperations as IIoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations,
  NamedRuleWithOperations as IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations
};
