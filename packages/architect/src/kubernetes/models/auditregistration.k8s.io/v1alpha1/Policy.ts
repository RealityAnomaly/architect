import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuditregistrationV1alpha1Policy.js";

/**
 * Policy defines the configuration of how audit events are logged
 */
export interface IPolicy {
  /**
 * The Level that all requests are recorded at. available options: None, Metadata, Request, RequestResponse required
 */
"level": string;
/**
 * Stages is a list of stages for which events are created.
 */
"stages"?: Array<string>;
}

/**
 * Policy defines the configuration of how audit events are logged
 */
export class Policy extends Model<IPolicy> implements IPolicy {
  "level": string;
"stages"?: Array<string>;

constructor(data?: ModelData<IPolicy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Policy, validate as ValidateFunc<IPolicy>);

export type {
  IPolicy as IIoK8sApiAuditregistrationV1alpha1Policy,
  Policy as IoK8sApiAuditregistrationV1alpha1Policy
};
