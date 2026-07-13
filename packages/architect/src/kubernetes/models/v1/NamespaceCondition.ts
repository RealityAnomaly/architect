import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NamespaceCondition.js";

/**
 * NamespaceCondition contains details about state of namespace.
 */
export interface INamespaceCondition {
  /**
 * Last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Human-readable message indicating details about last transition.
 */
"message"?: string;
/**
 * Unique, one-word, CamelCase reason for the condition's last transition.
 */
"reason"?: string;
/**
 * Status of the condition, one of True, False, Unknown.
 */
"status": string;
/**
 * Type of namespace controller condition.
 */
"type": string;
}

/**
 * NamespaceCondition contains details about state of namespace.
 */
export class NamespaceCondition extends Model<INamespaceCondition> implements INamespaceCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<INamespaceCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NamespaceCondition, validate as ValidateFunc<INamespaceCondition>);

export type {
  INamespaceCondition as IIoK8sApiCoreV1NamespaceCondition,
  NamespaceCondition as IoK8sApiCoreV1NamespaceCondition
};
