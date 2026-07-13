import { IIoK8sApiAdmissionregistrationV1alpha1ExpressionWarning } from "./ExpressionWarning.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/admissionregistration.k8s.io/v1alpha1/TypeChecking.js";

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 */
export interface ITypeChecking {
  /**
 * The type checking warnings for each expression.
 */
"expressionWarnings"?: Array<IIoK8sApiAdmissionregistrationV1alpha1ExpressionWarning>;
}

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 */
export class TypeChecking extends Model<ITypeChecking> implements ITypeChecking {
  "expressionWarnings"?: Array<IIoK8sApiAdmissionregistrationV1alpha1ExpressionWarning>;

constructor(data?: ModelData<ITypeChecking>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(TypeChecking, validate as ValidateFunc<ITypeChecking>);

export type {
  ITypeChecking as IIoK8sApiAdmissionregistrationV1alpha1TypeChecking,
  TypeChecking as IoK8sApiAdmissionregistrationV1alpha1TypeChecking
};
