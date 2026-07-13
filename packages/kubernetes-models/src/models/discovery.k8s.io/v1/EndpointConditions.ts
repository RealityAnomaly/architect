import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/discovery.k8s.io/v1/EndpointConditions.js";

/**
 * EndpointConditions represents the current condition of an endpoint.
 */
export interface IEndpointConditions {
  /**
 * ready indicates that this endpoint is ready to receive traffic, according to whatever system is managing the endpoint. A nil value should be interpreted as "true". In general, an endpoint should be marked ready if it is serving and not terminating, though this can be overridden in some cases, such as when the associated Service has set the publishNotReadyAddresses flag.
 */
"ready"?: boolean;
/**
 * serving indicates that this endpoint is able to receive traffic, according to whatever system is managing the endpoint. For endpoints backed by pods, the EndpointSlice controller will mark the endpoint as serving if the pod's Ready condition is True. A nil value should be interpreted as "true".
 */
"serving"?: boolean;
/**
 * terminating indicates that this endpoint is terminating. A nil value should be interpreted as "false".
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
  IEndpointConditions as IIoK8sApiDiscoveryV1EndpointConditions,
  EndpointConditions as IoK8sApiDiscoveryV1EndpointConditions
};
