import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/flowcontrol.apiserver.k8s.io/v1beta3/ExemptPriorityLevelConfiguration.js";

/**
 * ExemptPriorityLevelConfiguration describes the configurable aspects of the handling of exempt requests. In the mandatory exempt configuration object the values in the fields here can be modified by authorized users, unlike the rest of the `spec`.
 */
export interface IExemptPriorityLevelConfiguration {
  /**
 * `lendablePercent` prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels.  This value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.
 * 
 * LendableCL(i) = round( NominalCL(i) \* lendablePercent(i)/100.0 )
 */
"lendablePercent"?: number;
/**
 * `nominalConcurrencyShares` (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats nominally reserved for this priority level. This DOES NOT limit the dispatching from this priority level but affects the other priority levels through the borrowing mechanism. The server's concurrency limit (ServerCL) is divided among all the priority levels in proportion to their NCS values:
 * 
 * NominalCL(i)  = ceil( ServerCL \* NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)
 * 
 * Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of zero.
 */
"nominalConcurrencyShares"?: number;
}

/**
 * ExemptPriorityLevelConfiguration describes the configurable aspects of the handling of exempt requests. In the mandatory exempt configuration object the values in the fields here can be modified by authorized users, unlike the rest of the `spec`.
 */
export class ExemptPriorityLevelConfiguration extends Model<IExemptPriorityLevelConfiguration> implements IExemptPriorityLevelConfiguration {
  "lendablePercent"?: number;
"nominalConcurrencyShares"?: number;

constructor(data?: ModelData<IExemptPriorityLevelConfiguration>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ExemptPriorityLevelConfiguration, validate as ValidateFunc<IExemptPriorityLevelConfiguration>);

export type {
  IExemptPriorityLevelConfiguration as IIoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration,
  ExemptPriorityLevelConfiguration as IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration
};
