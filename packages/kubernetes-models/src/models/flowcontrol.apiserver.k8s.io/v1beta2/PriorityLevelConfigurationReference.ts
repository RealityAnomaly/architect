import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/flowcontrol.apiserver.k8s.io/v1beta2/PriorityLevelConfigurationReference.js";

/**
 * PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.
 */
export interface IPriorityLevelConfigurationReference {
  /**
 * `name` is the name of the priority level configuration being referenced Required.
 */
"name": string;
}

/**
 * PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.
 */
export class PriorityLevelConfigurationReference extends Model<IPriorityLevelConfigurationReference> implements IPriorityLevelConfigurationReference {
  "name": string;

constructor(data?: ModelData<IPriorityLevelConfigurationReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PriorityLevelConfigurationReference, validate as ValidateFunc<IPriorityLevelConfigurationReference>);

export type {
  IPriorityLevelConfigurationReference as IIoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReference,
  PriorityLevelConfigurationReference as IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReference
};
