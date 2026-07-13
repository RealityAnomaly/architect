import { IIoK8sApiAdmissionregistrationV1alpha1MatchCondition } from "./MatchCondition.ts";
import { IIoK8sApiAdmissionregistrationV1alpha1MatchResources } from "./MatchResources.ts";
import { IIoK8sApiAdmissionregistrationV1alpha1Mutation } from "./Mutation.ts";
import { IIoK8sApiAdmissionregistrationV1alpha1ParamKind } from "./ParamKind.ts";
import { IIoK8sApiAdmissionregistrationV1alpha1Variable } from "./Variable.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicySpec.js";

/**
 * MutatingAdmissionPolicySpec is the specification of the desired behavior of the admission policy.
 */
export interface IMutatingAdmissionPolicySpec {
  /**
 * failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.
 * 
 * A policy is invalid if paramKind refers to a non-existent Kind. A binding is invalid if paramRef.name refers to a non-existent resource.
 * 
 * failurePolicy does not define how validations that evaluate to false are handled.
 * 
 * Allowed values are Ignore or Fail. Defaults to Fail.
 */
"failurePolicy"?: string;
/**
 * matchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the matchConstraints. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.
 * 
 * If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.
 * 
 * The exact matching logic is (in order):
 *   1. If ANY matchCondition evaluates to FALSE, the policy is skipped.
 *   2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.
 *   3. If any matchCondition evaluates to an error (but none are FALSE):
 *      - If failurePolicy=Fail, reject the request
 *      - If failurePolicy=Ignore, the policy is skipped
 */
"matchConditions"?: Array<IIoK8sApiAdmissionregistrationV1alpha1MatchCondition>;
/**
 * matchConstraints specifies what resources this policy is designed to validate. The MutatingAdmissionPolicy cares about a request if it matches _all_ Constraints. However, in order to prevent clusters from being put into an unstable state that cannot be recovered from via the API MutatingAdmissionPolicy cannot match MutatingAdmissionPolicy and MutatingAdmissionPolicyBinding. The CREATE, UPDATE and CONNECT operations are allowed.  The DELETE operation may not be matched. '\*' matches CREATE, UPDATE and CONNECT. Required.
 */
"matchConstraints"?: IIoK8sApiAdmissionregistrationV1alpha1MatchResources;
/**
 * mutations contain operations to perform on matching objects. mutations may not be empty; a minimum of one mutation is required. mutations are evaluated in order, and are reinvoked according to the reinvocationPolicy. The mutations of a policy are invoked for each binding of this policy and reinvocation of mutations occurs on a per binding basis.
 */
"mutations"?: Array<IIoK8sApiAdmissionregistrationV1alpha1Mutation>;
/**
 * paramKind specifies the kind of resources used to parameterize this policy. If absent, there are no parameters for this policy and the param CEL variable will not be provided to validation expressions. If paramKind refers to a non-existent kind, this policy definition is mis-configured and the FailurePolicy is applied. If paramKind is specified but paramRef is unset in MutatingAdmissionPolicyBinding, the params variable will be null.
 */
"paramKind"?: IIoK8sApiAdmissionregistrationV1alpha1ParamKind;
/**
 * reinvocationPolicy indicates whether mutations may be called multiple times per MutatingAdmissionPolicyBinding as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".
 * 
 * Never: These mutations will not be called more than once per binding in a single admission evaluation.
 * 
 * IfNeeded: These mutations may be invoked more than once per binding for a single admission request and there is no guarantee of order with respect to other admission plugins, admission webhooks, bindings of this policy and admission policies.  Mutations are only reinvoked when mutations change the object after this mutation is invoked. Required.
 */
"reinvocationPolicy"?: string;
/**
 * variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except matchConditions because matchConditions are evaluated before the rest of the policy.
 * 
 * The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, variables must be sorted by the order of first appearance and acyclic.
 */
"variables"?: Array<IIoK8sApiAdmissionregistrationV1alpha1Variable>;
}

/**
 * MutatingAdmissionPolicySpec is the specification of the desired behavior of the admission policy.
 */
export class MutatingAdmissionPolicySpec extends Model<IMutatingAdmissionPolicySpec> implements IMutatingAdmissionPolicySpec {
  "failurePolicy"?: string;
"matchConditions"?: Array<IIoK8sApiAdmissionregistrationV1alpha1MatchCondition>;
"matchConstraints"?: IIoK8sApiAdmissionregistrationV1alpha1MatchResources;
"mutations"?: Array<IIoK8sApiAdmissionregistrationV1alpha1Mutation>;
"paramKind"?: IIoK8sApiAdmissionregistrationV1alpha1ParamKind;
"reinvocationPolicy"?: string;
"variables"?: Array<IIoK8sApiAdmissionregistrationV1alpha1Variable>;

constructor(data?: ModelData<IMutatingAdmissionPolicySpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(MutatingAdmissionPolicySpec, validate as ValidateFunc<IMutatingAdmissionPolicySpec>);

export type {
  IMutatingAdmissionPolicySpec as IIoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicySpec,
  MutatingAdmissionPolicySpec as IoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicySpec
};
