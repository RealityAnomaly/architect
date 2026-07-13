import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition.js";

/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export interface ICustomResourceDefinitionCondition {
  /**
 * lastTransitionTime last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * message is a human-readable message indicating details about last transition.
 */
"message"?: string;
/**
 * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
 */
"observedGeneration"?: number;
/**
 * reason is a unique, one-word, CamelCase reason for the condition's last transition.
 */
"reason"?: string;
/**
 * status is the status of the condition. Can be True, False, Unknown.
 */
"status": string;
/**
 * type is the type of the condition. Types include Established, NamesAccepted and Terminating.
 */
"type": string;
}

/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export class CustomResourceDefinitionCondition extends Model<ICustomResourceDefinitionCondition> implements ICustomResourceDefinitionCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"observedGeneration"?: number;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<ICustomResourceDefinitionCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CustomResourceDefinitionCondition, validate as ValidateFunc<ICustomResourceDefinitionCondition>);

export type {
  ICustomResourceDefinitionCondition as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition,
  CustomResourceDefinitionCondition as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition
};
