import { IIoK8sApiResourceV1ExactDeviceRequest } from "./ExactDeviceRequest.ts";
import { IIoK8sApiResourceV1DeviceSubRequest } from "./DeviceSubRequest.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1DeviceRequest.js";

/**
 * DeviceRequest is a request for devices required for a claim. This is typically a request for a single resource like a device, but can also ask for several identical devices. With FirstAvailable it is also possible to provide a prioritized list of requests.
 */
export interface IDeviceRequest {
  /**
 * Exactly specifies the details for a single request that must be met exactly for the request to be satisfied.
 * 
 * One of Exactly or FirstAvailable must be set.
 */
"exactly"?: IIoK8sApiResourceV1ExactDeviceRequest;
/**
 * FirstAvailable contains subrequests, of which exactly one will be selected by the scheduler. It tries to satisfy them in the order in which they are listed here. So if there are two entries in the list, the scheduler will only check the second one if it determines that the first one can not be used.
 * 
 * DRA does not yet implement scoring, so the scheduler will select the first set of devices that satisfies all the requests in the claim. And if the requirements can be satisfied on more than one node, other scheduling features will determine which node is chosen. This means that the set of devices allocated to a claim might not be the optimal set available to the cluster. Scoring will be implemented later.
 */
"firstAvailable"?: Array<IIoK8sApiResourceV1DeviceSubRequest>;
/**
 * Name can be used to reference this request in a pod.spec.containers[].resources.claims entry and in a constraint of the claim.
 * 
 * References using the name in the DeviceRequest will uniquely identify a request when the Exactly field is set. When the FirstAvailable field is set, a reference to the name of the DeviceRequest will match whatever subrequest is chosen by the scheduler.
 * 
 * Must be a DNS label.
 */
"name": string;
}

/**
 * DeviceRequest is a request for devices required for a claim. This is typically a request for a single resource like a device, but can also ask for several identical devices. With FirstAvailable it is also possible to provide a prioritized list of requests.
 */
export class DeviceRequest extends Model<IDeviceRequest> implements IDeviceRequest {
  "exactly"?: IIoK8sApiResourceV1ExactDeviceRequest;
"firstAvailable"?: Array<IIoK8sApiResourceV1DeviceSubRequest>;
"name": string;

constructor(data?: ModelData<IDeviceRequest>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceRequest, validate as ValidateFunc<IDeviceRequest>);

export type {
  IDeviceRequest as IIoK8sApiResourceV1DeviceRequest,
  DeviceRequest as IoK8sApiResourceV1DeviceRequest
};
