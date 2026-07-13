import { IIoK8sApiCoreV1EndpointAddress } from "./EndpointAddress.ts";
import { IIoK8sApiCoreV1EndpointPort } from "./EndpointPort.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/EndpointSubset.js";

/**
 * EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
 * 
 * 	{
 * 	  Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 * 	  Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 * 	}
 * 
 * The resulting set of endpoints can be viewed as:
 * 
 * 	a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
 * 	b: [ 10.10.1.1:309, 10.10.2.2:309 ]
 * 
 * Deprecated: This API is deprecated in v1.33+.
 * @deprecated
 */
export interface IEndpointSubset {
  /**
 * IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
 */
"addresses"?: Array<IIoK8sApiCoreV1EndpointAddress>;
/**
 * IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
 */
"notReadyAddresses"?: Array<IIoK8sApiCoreV1EndpointAddress>;
/**
 * Port numbers available on the related IP addresses.
 */
"ports"?: Array<IIoK8sApiCoreV1EndpointPort>;
}

/**
 * EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
 * 
 * 	{
 * 	  Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 * 	  Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 * 	}
 * 
 * The resulting set of endpoints can be viewed as:
 * 
 * 	a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
 * 	b: [ 10.10.1.1:309, 10.10.2.2:309 ]
 * 
 * Deprecated: This API is deprecated in v1.33+.
 * @deprecated
 */
export class EndpointSubset extends Model<IEndpointSubset> implements IEndpointSubset {
  "addresses"?: Array<IIoK8sApiCoreV1EndpointAddress>;
"notReadyAddresses"?: Array<IIoK8sApiCoreV1EndpointAddress>;
"ports"?: Array<IIoK8sApiCoreV1EndpointPort>;

constructor(data?: ModelData<IEndpointSubset>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(EndpointSubset, validate as ValidateFunc<IEndpointSubset>);

export type {
  IEndpointSubset as IIoK8sApiCoreV1EndpointSubset,
  EndpointSubset as IoK8sApiCoreV1EndpointSubset
};
