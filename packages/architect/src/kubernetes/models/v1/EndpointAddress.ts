import { IIoK8sApiCoreV1ObjectReference } from "./ObjectReference.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1EndpointAddress.js";

/**
 * EndpointAddress is a tuple that describes single IP address. Deprecated: This API is deprecated in v1.33+.
 * @deprecated
 */
export interface IEndpointAddress {
  /**
 * The Hostname of this endpoint
 */
"hostname"?: string;
/**
 * The IP of this endpoint. May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10), or link-local multicast (224.0.0.0/24 or ff02::/16).
 */
"ip": string;
/**
 * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
 */
"nodeName"?: string;
/**
 * Reference to object providing the endpoint.
 */
"targetRef"?: IIoK8sApiCoreV1ObjectReference;
}

/**
 * EndpointAddress is a tuple that describes single IP address. Deprecated: This API is deprecated in v1.33+.
 * @deprecated
 */
export class EndpointAddress extends Model<IEndpointAddress> implements IEndpointAddress {
  "hostname"?: string;
"ip": string;
"nodeName"?: string;
"targetRef"?: IIoK8sApiCoreV1ObjectReference;

constructor(data?: ModelData<IEndpointAddress>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(EndpointAddress, validate as ValidateFunc<IEndpointAddress>);

export type {
  IEndpointAddress as IIoK8sApiCoreV1EndpointAddress,
  EndpointAddress as IoK8sApiCoreV1EndpointAddress
};
