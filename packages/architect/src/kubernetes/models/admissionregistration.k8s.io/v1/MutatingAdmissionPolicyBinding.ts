import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSpec } from "./MutatingAdmissionPolicyBindingSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBinding.js";

/**
 * MutatingAdmissionPolicyBinding binds the MutatingAdmissionPolicy with parametrized resources. MutatingAdmissionPolicyBinding and the optional parameter resource together define how cluster administrators configure policies for clusters.
 * 
 * For a given admission request, each binding will cause its policy to be evaluated N times, where N is 1 for policies/bindings that don't use params, otherwise N is the number of parameters selected by the binding. Each evaluation is constrained by a [runtime cost budget](https://kubernetes.io/docs/reference/using-api/cel/#runtime-cost-budget).
 * 
 * Adding/removing policies, bindings, or params can not affect whether a given (policy, binding, param) combination is within its own CEL budget.
 */
export interface IMutatingAdmissionPolicyBinding extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1";
"kind": "MutatingAdmissionPolicyBinding";
/**
 * metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec defines the desired behavior of the MutatingAdmissionPolicyBinding.
 */
"spec"?: IIoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSpec;
}

/**
 * MutatingAdmissionPolicyBinding binds the MutatingAdmissionPolicy with parametrized resources. MutatingAdmissionPolicyBinding and the optional parameter resource together define how cluster administrators configure policies for clusters.
 * 
 * For a given admission request, each binding will cause its policy to be evaluated N times, where N is 1 for policies/bindings that don't use params, otherwise N is the number of parameters selected by the binding. Each evaluation is constrained by a [runtime cost budget](https://kubernetes.io/docs/reference/using-api/cel/#runtime-cost-budget).
 * 
 * Adding/removing policies, bindings, or params can not affect whether a given (policy, binding, param) combination is within its own CEL budget.
 */
export class MutatingAdmissionPolicyBinding extends Model<IMutatingAdmissionPolicyBinding> implements IMutatingAdmissionPolicyBinding {
  "apiVersion": IMutatingAdmissionPolicyBinding["apiVersion"];
"kind": IMutatingAdmissionPolicyBinding["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSpec;

static apiVersion: IMutatingAdmissionPolicyBinding["apiVersion"] = "admissionregistration.k8s.io/v1";
static kind: IMutatingAdmissionPolicyBinding["kind"] = "MutatingAdmissionPolicyBinding";
static is = createTypeMetaGuard<IMutatingAdmissionPolicyBinding>(MutatingAdmissionPolicyBinding);

constructor(data?: ModelData<IMutatingAdmissionPolicyBinding>) {
  super();

  this.setDefinedProps({
    apiVersion: MutatingAdmissionPolicyBinding.apiVersion,
    kind: MutatingAdmissionPolicyBinding.kind,
    ...data
  } as IMutatingAdmissionPolicyBinding);
}
}

setValidateFunc(MutatingAdmissionPolicyBinding, validate as ValidateFunc<IMutatingAdmissionPolicyBinding>);

export type {
  IMutatingAdmissionPolicyBinding as IIoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBinding,
  MutatingAdmissionPolicyBinding as IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBinding
};
