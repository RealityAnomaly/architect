import { IIoK8sApiFlowcontrolV1beta3NonResourcePolicyRule } from "./NonResourcePolicyRule.ts";
import { IIoK8sApiFlowcontrolV1beta3ResourcePolicyRule } from "./ResourcePolicyRule.ts";
import { IIoK8sApiFlowcontrolV1beta3Subject } from "./Subject.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/flowcontrol.apiserver.k8s.io/v1beta3/PolicyRulesWithSubjects.js";

/**
 * PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
 */
export interface IPolicyRulesWithSubjects {
  /**
 * `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
 */
"nonResourceRules"?: Array<IIoK8sApiFlowcontrolV1beta3NonResourcePolicyRule>;
/**
 * `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
 */
"resourceRules"?: Array<IIoK8sApiFlowcontrolV1beta3ResourcePolicyRule>;
/**
 * subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
 */
"subjects": Array<IIoK8sApiFlowcontrolV1beta3Subject>;
}

/**
 * PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
 */
export class PolicyRulesWithSubjects extends Model<IPolicyRulesWithSubjects> implements IPolicyRulesWithSubjects {
  "nonResourceRules"?: Array<IIoK8sApiFlowcontrolV1beta3NonResourcePolicyRule>;
"resourceRules"?: Array<IIoK8sApiFlowcontrolV1beta3ResourcePolicyRule>;
"subjects": Array<IIoK8sApiFlowcontrolV1beta3Subject>;

constructor(data?: ModelData<IPolicyRulesWithSubjects>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PolicyRulesWithSubjects, validate as ValidateFunc<IPolicyRulesWithSubjects>);

export type {
  IPolicyRulesWithSubjects as IIoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects,
  PolicyRulesWithSubjects as IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects
};
