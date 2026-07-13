import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1ExpressionWarning.js";

/**
 * ExpressionWarning is a warning information that targets a specific expression.
 */
export interface IExpressionWarning {
  /**
 * fieldRef is the path to the field that refers to the expression. For example, the reference to the expression of the first item of validations is "spec.validations[0].expression"
 */
"fieldRef": string;
/**
 * warning contains the content of type checking information in a human-readable form. Each line of the warning contains the type that the expression is checked against, followed by the type check error from the compiler.
 */
"warning": string;
}

/**
 * ExpressionWarning is a warning information that targets a specific expression.
 */
export class ExpressionWarning extends Model<IExpressionWarning> implements IExpressionWarning {
  "fieldRef": string;
"warning": string;

constructor(data?: ModelData<IExpressionWarning>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ExpressionWarning, validate as ValidateFunc<IExpressionWarning>);

export type {
  IExpressionWarning as IIoK8sApiAdmissionregistrationV1ExpressionWarning,
  ExpressionWarning as IoK8sApiAdmissionregistrationV1ExpressionWarning
};
