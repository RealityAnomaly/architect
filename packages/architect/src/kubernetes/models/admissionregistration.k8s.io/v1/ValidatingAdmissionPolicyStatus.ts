import { IIoK8sApimachineryPkgApisMetaV1Condition } from "../../../apimachinery/apis/meta/v1/Condition.ts";
import { IIoK8sApiAdmissionregistrationV1TypeChecking } from "./TypeChecking.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus.js";

/**
 * ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.
 */
export interface IValidatingAdmissionPolicyStatus {
  /**
 * conditions represent the latest available observations of a policy's current state.
 */
"conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
/**
 * observedGeneration is the generation observed by the controller.
 */
"observedGeneration"?: number;
/**
 * typeChecking contains the results of type checking for each expression. Presence of this field indicates the completion of the type checking.
 */
"typeChecking"?: IIoK8sApiAdmissionregistrationV1TypeChecking;
}

/**
 * ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.
 */
export class ValidatingAdmissionPolicyStatus extends Model<IValidatingAdmissionPolicyStatus> implements IValidatingAdmissionPolicyStatus {
  "conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
"observedGeneration"?: number;
"typeChecking"?: IIoK8sApiAdmissionregistrationV1TypeChecking;

constructor(data?: ModelData<IValidatingAdmissionPolicyStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ValidatingAdmissionPolicyStatus, validate as ValidateFunc<IValidatingAdmissionPolicyStatus>);

export type {
  IValidatingAdmissionPolicyStatus as IIoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus,
  ValidatingAdmissionPolicyStatus as IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus
};
