import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/admissionregistration.k8s.io/v1alpha1/Variable.js";

/**
 * Variable is the definition of a variable that is used for composition.
 */
export interface IVariable {
  /**
 * expression is the expression that will be evaluated as the value of the variable. The CEL expression has access to the same identifiers as the CEL expressions in Validation.
 */
"expression": string;
/**
 * name is the name of the variable. The name must be a valid CEL identifier and unique among all variables. The variable can be accessed in other expressions through `variables` For example, if name is "foo", the variable will be available as `variables.foo`
 */
"name": string;
}

/**
 * Variable is the definition of a variable that is used for composition.
 */
export class Variable extends Model<IVariable> implements IVariable {
  "expression": string;
"name": string;

constructor(data?: ModelData<IVariable>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Variable, validate as ValidateFunc<IVariable>);

export type {
  IVariable as IIoK8sApiAdmissionregistrationV1alpha1Variable,
  Variable as IoK8sApiAdmissionregistrationV1alpha1Variable
};
