import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicySpec } from "./MutatingAdmissionPolicySpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/admissionregistration.k8s.io/v1alpha1/MutatingAdmissionPolicy.js";

/**
 * MutatingAdmissionPolicy describes the definition of an admission mutation policy that mutates the object coming into admission chain.
 */
export interface IMutatingAdmissionPolicy extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1alpha1";
"kind": "MutatingAdmissionPolicy";
/**
 * metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec defines the desired behavior of the MutatingAdmissionPolicy.
 */
"spec"?: IIoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicySpec;
}

/**
 * MutatingAdmissionPolicy describes the definition of an admission mutation policy that mutates the object coming into admission chain.
 */
export class MutatingAdmissionPolicy extends Model<IMutatingAdmissionPolicy> implements IMutatingAdmissionPolicy {
  "apiVersion": IMutatingAdmissionPolicy["apiVersion"];
"kind": IMutatingAdmissionPolicy["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicySpec;

static apiVersion: IMutatingAdmissionPolicy["apiVersion"] = "admissionregistration.k8s.io/v1alpha1";
static kind: IMutatingAdmissionPolicy["kind"] = "MutatingAdmissionPolicy";
static is: TypeMetaGuard<IMutatingAdmissionPolicy> = createTypeMetaGuard<IMutatingAdmissionPolicy>(MutatingAdmissionPolicy);

constructor(data?: ModelData<IMutatingAdmissionPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: MutatingAdmissionPolicy.apiVersion,
    kind: MutatingAdmissionPolicy.kind,
    ...data
  } as IMutatingAdmissionPolicy);
}
}

setValidateFunc(MutatingAdmissionPolicy, validate as ValidateFunc<IMutatingAdmissionPolicy>);

export type {
  IMutatingAdmissionPolicy as IIoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicy,
  MutatingAdmissionPolicy as IoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicy
};
