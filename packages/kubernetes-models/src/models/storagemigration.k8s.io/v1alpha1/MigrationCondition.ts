import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storagemigration.k8s.io/v1alpha1/MigrationCondition.js";

/**
 * Describes the state of a migration at a certain point.
 */
export interface IMigrationCondition {
  /**
 * The last time this condition was updated.
 */
"lastUpdateTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * A human readable message indicating details about the transition.
 */
"message"?: string;
/**
 * The reason for the condition's last transition.
 */
"reason"?: string;
/**
 * Status of the condition, one of True, False, Unknown.
 */
"status": string;
/**
 * Type of the condition.
 */
"type": string;
}

/**
 * Describes the state of a migration at a certain point.
 */
export class MigrationCondition extends Model<IMigrationCondition> implements IMigrationCondition {
  "lastUpdateTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<IMigrationCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(MigrationCondition, validate as ValidateFunc<IMigrationCondition>);

export type {
  IMigrationCondition as IIoK8sApiStoragemigrationV1alpha1MigrationCondition,
  MigrationCondition as IoK8sApiStoragemigrationV1alpha1MigrationCondition
};
