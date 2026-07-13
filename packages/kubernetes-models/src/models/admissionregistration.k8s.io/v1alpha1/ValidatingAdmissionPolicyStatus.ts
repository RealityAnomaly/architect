import { IIoK8sApimachineryPkgApisMetaV1Condition } from "../../../apimachinery/apis/meta/v1/Condition.ts";
import { IIoK8sApiAdmissionregistrationV1alpha1TypeChecking } from "./TypeChecking.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/admissionregistration.k8s.io/v1alpha1/ValidatingAdmissionPolicyStatus.js";

/**
 * ValidatingAdmissionPolicyStatus represents the status of a ValidatingAdmissionPolicy.
 */
export interface IValidatingAdmissionPolicyStatus {
  /**
 * The conditions represent the latest available observations of a policy's current state.
 */
"conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
/**
 * The generation observed by the controller.
 */
"observedGeneration"?: number;
/**
 * The results of type checking for each expression. Presence of this field indicates the completion of the type checking.
 */
"typeChecking"?: IIoK8sApiAdmissionregistrationV1alpha1TypeChecking;
}

/**
 * ValidatingAdmissionPolicyStatus represents the status of a ValidatingAdmissionPolicy.
 */
export class ValidatingAdmissionPolicyStatus extends Model<IValidatingAdmissionPolicyStatus> implements IValidatingAdmissionPolicyStatus {
  "conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
"observedGeneration"?: number;
"typeChecking"?: IIoK8sApiAdmissionregistrationV1alpha1TypeChecking;

constructor(data?: ModelData<IValidatingAdmissionPolicyStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ValidatingAdmissionPolicyStatus, validate as ValidateFunc<IValidatingAdmissionPolicyStatus>);

export type {
  IValidatingAdmissionPolicyStatus as IIoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus,
  ValidatingAdmissionPolicyStatus as IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus
};
