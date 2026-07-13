import { IIoK8sApiAdmissionregistrationV1ExpressionWarning } from "./ExpressionWarning.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1TypeChecking.js";

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 */
export interface ITypeChecking {
  /**
 * expressionWarnings contains the type checking warnings for each expression.
 */
"expressionWarnings"?: Array<IIoK8sApiAdmissionregistrationV1ExpressionWarning>;
}

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 */
export class TypeChecking extends Model<ITypeChecking> implements ITypeChecking {
  "expressionWarnings"?: Array<IIoK8sApiAdmissionregistrationV1ExpressionWarning>;

constructor(data?: ModelData<ITypeChecking>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(TypeChecking, validate as ValidateFunc<ITypeChecking>);

export type {
  ITypeChecking as IIoK8sApiAdmissionregistrationV1TypeChecking,
  TypeChecking as IoK8sApiAdmissionregistrationV1TypeChecking
};
