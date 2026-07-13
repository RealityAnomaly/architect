import { IIoK8sApiDiscoveryV1ForNode } from "./ForNode.ts";
import { IIoK8sApiDiscoveryV1ForZone } from "./ForZone.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/discovery.k8s.io/v1/EndpointHints.js";

/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 */
export interface IEndpointHints {
  /**
 * forNodes indicates the node(s) this endpoint should be consumed by when using topology aware routing. May contain a maximum of 8 entries.
 */
"forNodes"?: Array<IIoK8sApiDiscoveryV1ForNode>;
/**
 * forZones indicates the zone(s) this endpoint should be consumed by when using topology aware routing. May contain a maximum of 8 entries.
 */
"forZones"?: Array<IIoK8sApiDiscoveryV1ForZone>;
}

/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 */
export class EndpointHints extends Model<IEndpointHints> implements IEndpointHints {
  "forNodes"?: Array<IIoK8sApiDiscoveryV1ForNode>;
"forZones"?: Array<IIoK8sApiDiscoveryV1ForZone>;

constructor(data?: ModelData<IEndpointHints>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(EndpointHints, validate as ValidateFunc<IEndpointHints>);

export type {
  IEndpointHints as IIoK8sApiDiscoveryV1EndpointHints,
  EndpointHints as IoK8sApiDiscoveryV1EndpointHints
};
