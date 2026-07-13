import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ComponentCondition.js";

/**
 * Information about the condition of a component.
 */
export interface IComponentCondition {
  /**
 * Condition error code for a component. For example, a health check error code.
 */
"error"?: string;
/**
 * Message about the condition for a component. For example, information about a health check.
 */
"message"?: string;
/**
 * Status of the condition for a component. Valid values for "Healthy": "True", "False", or "Unknown".
 */
"status": string;
/**
 * Type of condition for a component. Valid value: "Healthy"
 */
"type": string;
}

/**
 * Information about the condition of a component.
 */
export class ComponentCondition extends Model<IComponentCondition> implements IComponentCondition {
  "error"?: string;
"message"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<IComponentCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ComponentCondition, validate as ValidateFunc<IComponentCondition>);

export type {
  IComponentCondition as IIoK8sApiCoreV1ComponentCondition,
  ComponentCondition as IoK8sApiCoreV1ComponentCondition
};
