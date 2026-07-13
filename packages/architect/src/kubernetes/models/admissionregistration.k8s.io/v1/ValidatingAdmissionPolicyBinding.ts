import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec } from "./ValidatingAdmissionPolicyBindingSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBinding.js";

/**
 * ValidatingAdmissionPolicyBinding binds the ValidatingAdmissionPolicy with paramerized resources. ValidatingAdmissionPolicyBinding and parameter CRDs together define how cluster administrators configure policies for clusters.
 * 
 * For a given admission request, each binding will cause its policy to be evaluated N times, where N is 1 for policies/bindings that don't use params, otherwise N is the number of parameters selected by the binding.
 * 
 * The CEL expressions of a policy must have a computed CEL cost below the maximum CEL budget. Each evaluation of the policy is given an independent CEL cost budget. Adding/removing policies, bindings, or params can not affect whether a given (policy, binding, param) combination is within its own CEL budget.
 */
export interface IValidatingAdmissionPolicyBinding extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1";
"kind": "ValidatingAdmissionPolicyBinding";
/**
 * metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec defines the desired behavior of the ValidatingAdmissionPolicyBinding.
 */
"spec": IIoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec;
}

/**
 * ValidatingAdmissionPolicyBinding binds the ValidatingAdmissionPolicy with paramerized resources. ValidatingAdmissionPolicyBinding and parameter CRDs together define how cluster administrators configure policies for clusters.
 * 
 * For a given admission request, each binding will cause its policy to be evaluated N times, where N is 1 for policies/bindings that don't use params, otherwise N is the number of parameters selected by the binding.
 * 
 * The CEL expressions of a policy must have a computed CEL cost below the maximum CEL budget. Each evaluation of the policy is given an independent CEL cost budget. Adding/removing policies, bindings, or params can not affect whether a given (policy, binding, param) combination is within its own CEL budget.
 */
export class ValidatingAdmissionPolicyBinding extends Model<IValidatingAdmissionPolicyBinding> implements IValidatingAdmissionPolicyBinding {
  "apiVersion": IValidatingAdmissionPolicyBinding["apiVersion"];
"kind": IValidatingAdmissionPolicyBinding["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec;

static apiVersion: IValidatingAdmissionPolicyBinding["apiVersion"] = "admissionregistration.k8s.io/v1";
static kind: IValidatingAdmissionPolicyBinding["kind"] = "ValidatingAdmissionPolicyBinding";
static is = createTypeMetaGuard<IValidatingAdmissionPolicyBinding>(ValidatingAdmissionPolicyBinding);

constructor(data?: ModelData<IValidatingAdmissionPolicyBinding>) {
  super();

  this.setDefinedProps({
    apiVersion: ValidatingAdmissionPolicyBinding.apiVersion,
    kind: ValidatingAdmissionPolicyBinding.kind,
    ...data
  } as IValidatingAdmissionPolicyBinding);
}
}

setValidateFunc(ValidatingAdmissionPolicyBinding, validate as ValidateFunc<IValidatingAdmissionPolicyBinding>);

export type {
  IValidatingAdmissionPolicyBinding as IIoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  ValidatingAdmissionPolicyBinding as IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBinding
};
