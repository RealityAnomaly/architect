import { IIoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement } from "../../../apimachinery/apis/meta/v1/LabelSelectorRequirement.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthorizationV1LabelSelectorAttributes.js";

/**
 * LabelSelectorAttributes indicates a label limited access. Webhook authors are encouraged to \* ensure rawSelector and requirements are not both set \* consider the requirements field if set \* not try to parse or consider the rawSelector field if set. This is to avoid another CVE-2022-2880 (i.e. getting different systems to agree on how exactly to parse a query is not something we want), see https://www.oxeye.io/resources/golang-parameter-smuggling-attack for more details. For the \*SubjectAccessReview endpoints of the kube-apiserver: \* If rawSelector is empty and requirements are empty, the request is not limited. \* If rawSelector is present and requirements are empty, the rawSelector will be parsed and limited if the parsing succeeds. \* If rawSelector is empty and requirements are present, the requirements should be honored \* If rawSelector is present and requirements are present, the request is invalid.
 */
export interface ILabelSelectorAttributes {
  /**
 * rawSelector is the serialization of a field selector that would be included in a query parameter. Webhook implementations are encouraged to ignore rawSelector. The kube-apiserver's \*SubjectAccessReview will parse the rawSelector as long as the requirements are not present.
 */
"rawSelector"?: string;
/**
 * requirements is the parsed interpretation of a label selector. All requirements must be met for a resource instance to match the selector. Webhook implementations should handle requirements, but how to handle them is up to the webhook. Since requirements can only limit the request, it is safe to authorize as unlimited request if the requirements are not understood.
 */
"requirements"?: Array<IIoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement>;
}

/**
 * LabelSelectorAttributes indicates a label limited access. Webhook authors are encouraged to \* ensure rawSelector and requirements are not both set \* consider the requirements field if set \* not try to parse or consider the rawSelector field if set. This is to avoid another CVE-2022-2880 (i.e. getting different systems to agree on how exactly to parse a query is not something we want), see https://www.oxeye.io/resources/golang-parameter-smuggling-attack for more details. For the \*SubjectAccessReview endpoints of the kube-apiserver: \* If rawSelector is empty and requirements are empty, the request is not limited. \* If rawSelector is present and requirements are empty, the rawSelector will be parsed and limited if the parsing succeeds. \* If rawSelector is empty and requirements are present, the requirements should be honored \* If rawSelector is present and requirements are present, the request is invalid.
 */
export class LabelSelectorAttributes extends Model<ILabelSelectorAttributes> implements ILabelSelectorAttributes {
  "rawSelector"?: string;
"requirements"?: Array<IIoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement>;

constructor(data?: ModelData<ILabelSelectorAttributes>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LabelSelectorAttributes, validate as ValidateFunc<ILabelSelectorAttributes>);

export type {
  ILabelSelectorAttributes as IIoK8sApiAuthorizationV1LabelSelectorAttributes,
  LabelSelectorAttributes as IoK8sApiAuthorizationV1LabelSelectorAttributes
};
