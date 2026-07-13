import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceCondition.js";

/**
 * APIServiceCondition describes the state of an APIService at a particular point
 */
export interface IAPIServiceCondition {
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
 * Status is the status of the condition. Can be True, False, Unknown.
 */
"status": string;
/**
 * Type is the type of the condition.
 */
"type": string;
}

/**
 * APIServiceCondition describes the state of an APIService at a particular point
 */
export class APIServiceCondition extends Model<IAPIServiceCondition> implements IAPIServiceCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<IAPIServiceCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(APIServiceCondition, validate as ValidateFunc<IAPIServiceCondition>);

export type {
  IAPIServiceCondition as IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceCondition,
  APIServiceCondition as IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceCondition
};
