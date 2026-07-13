import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec } from "./ValidatingAdmissionPolicySpec.ts";
import { IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus } from "./ValidatingAdmissionPolicyStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/admissionregistration.k8s.io/v1beta1/ValidatingAdmissionPolicy.js";

/**
 * ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.
 */
export interface IValidatingAdmissionPolicy extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1beta1";
"kind": "ValidatingAdmissionPolicy";
/**
 * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of the ValidatingAdmissionPolicy.
 */
"spec"?: IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec;
/**
 * The status of the ValidatingAdmissionPolicy, including warnings that are useful to determine if the policy behaves in the expected way. Populated by the system. Read-only.
 */
"status"?: IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus;
}

/**
 * ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.
 */
export class ValidatingAdmissionPolicy extends Model<IValidatingAdmissionPolicy> implements IValidatingAdmissionPolicy {
  "apiVersion": IValidatingAdmissionPolicy["apiVersion"];
"kind": IValidatingAdmissionPolicy["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec;
"status"?: IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus;

static apiVersion: IValidatingAdmissionPolicy["apiVersion"] = "admissionregistration.k8s.io/v1beta1";
static kind: IValidatingAdmissionPolicy["kind"] = "ValidatingAdmissionPolicy";
static is: TypeMetaGuard<IValidatingAdmissionPolicy> = createTypeMetaGuard<IValidatingAdmissionPolicy>(ValidatingAdmissionPolicy);

constructor(data?: ModelData<IValidatingAdmissionPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: ValidatingAdmissionPolicy.apiVersion,
    kind: ValidatingAdmissionPolicy.kind,
    ...data
  } as IValidatingAdmissionPolicy);
}
}

setValidateFunc(ValidatingAdmissionPolicy, validate as ValidateFunc<IValidatingAdmissionPolicy>);

export type {
  IValidatingAdmissionPolicy as IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy,
  ValidatingAdmissionPolicy as IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy
};
