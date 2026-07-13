import { IIoK8sApiFlowcontrolV1beta3QueuingConfiguration } from "./QueuingConfiguration.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta3LimitResponse.js";

/**
 * LimitResponse defines how to handle requests that can not be executed right now.
 */
export interface ILimitResponse {
  /**
 * `queuing` holds the configuration parameters for queuing. This field may be non-empty only if `type` is `"Queue"`.
 */
"queuing"?: IIoK8sApiFlowcontrolV1beta3QueuingConfiguration;
/**
 * `type` is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required.
 */
"type": string;
}

/**
 * LimitResponse defines how to handle requests that can not be executed right now.
 */
export class LimitResponse extends Model<ILimitResponse> implements ILimitResponse {
  "queuing"?: IIoK8sApiFlowcontrolV1beta3QueuingConfiguration;
"type": string;

constructor(data?: ModelData<ILimitResponse>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LimitResponse, validate as ValidateFunc<ILimitResponse>);

export type {
  ILimitResponse as IIoK8sApiFlowcontrolV1beta3LimitResponse,
  LimitResponse as IoK8sApiFlowcontrolV1beta3LimitResponse
};
