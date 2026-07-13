import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/discovery.k8s.io/v1beta1/EndpointConditions.js";

/**
 * EndpointConditions represents the current condition of an endpoint.
 */
export interface IEndpointConditions {
  /**
 * ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready. For compatibility reasons, ready should never be "true" for terminating endpoints.
 */
"ready"?: boolean;
/**
 * serving is identical to ready except that it is set regardless of the terminating state of endpoints. This condition should be set to true for a ready endpoint that is terminating. If nil, consumers should defer to the ready condition. This field can be enabled with the EndpointSliceTerminatingCondition feature gate.
 */
"serving"?: boolean;
/**
 * terminating indicates that this endpoint is terminating. A nil value indicates an unknown state. Consumers should interpret this unknown state to mean that the endpoint is not terminating. This field can be enabled with the EndpointSliceTerminatingCondition feature gate.
 */
"terminating"?: boolean;
}

/**
 * EndpointConditions represents the current condition of an endpoint.
 */
export class EndpointConditions extends Model<IEndpointConditions> implements IEndpointConditions {
  "ready"?: boolean;
"serving"?: boolean;
"terminating"?: boolean;

constructor(data?: ModelData<IEndpointConditions>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(EndpointConditions, validate as ValidateFunc<IEndpointConditions>);

export type {
  IEndpointConditions as IIoK8sApiDiscoveryV1beta1EndpointConditions,
  EndpointConditions as IoK8sApiDiscoveryV1beta1EndpointConditions
};
