import { IIoK8sApiDiscoveryV1beta1ForZone } from "./ForZone.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/discovery.k8s.io/v1beta1/EndpointHints.js";

/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 */
export interface IEndpointHints {
  /**
 * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing. May contain a maximum of 8 entries.
 */
"forZones"?: Array<IIoK8sApiDiscoveryV1beta1ForZone>;
}

/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 */
export class EndpointHints extends Model<IEndpointHints> implements IEndpointHints {
  "forZones"?: Array<IIoK8sApiDiscoveryV1beta1ForZone>;

constructor(data?: ModelData<IEndpointHints>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(EndpointHints, validate as ValidateFunc<IEndpointHints>);

export type {
  IEndpointHints as IIoK8sApiDiscoveryV1beta1EndpointHints,
  EndpointHints as IoK8sApiDiscoveryV1beta1EndpointHints
};
