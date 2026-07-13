import { IIoK8sApiDiscoveryV1beta1Endpoint } from "./Endpoint.ts";
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiDiscoveryV1beta1EndpointPort } from "./EndpointPort.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiDiscoveryV1beta1EndpointSlice.js";

/**
 * EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
 */
export interface IEndpointSlice extends TypeMeta {
  /**
 * addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: \* IPv4: Represents an IPv4 Address. \* IPv6: Represents an IPv6 Address. \* FQDN: Represents a Fully Qualified Domain Name.
 */
"addressType": string;
"apiVersion": "discovery.k8s.io/v1beta1";
/**
 * endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints.
 */
"endpoints": Array<IIoK8sApiDiscoveryV1beta1Endpoint>;
"kind": "EndpointSlice";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates "all ports". Each slice may include a maximum of 100 ports.
 */
"ports"?: Array<IIoK8sApiDiscoveryV1beta1EndpointPort>;
}

/**
 * EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
 */
export class EndpointSlice extends Model<IEndpointSlice> implements IEndpointSlice {
  "addressType": string;
"apiVersion": IEndpointSlice["apiVersion"];
"endpoints": Array<IIoK8sApiDiscoveryV1beta1Endpoint>;
"kind": IEndpointSlice["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"ports"?: Array<IIoK8sApiDiscoveryV1beta1EndpointPort>;

static apiVersion: IEndpointSlice["apiVersion"] = "discovery.k8s.io/v1beta1";
static kind: IEndpointSlice["kind"] = "EndpointSlice";
static is = createTypeMetaGuard<IEndpointSlice>(EndpointSlice);

constructor(data?: ModelData<IEndpointSlice>) {
  super();

  this.setDefinedProps({
    apiVersion: EndpointSlice.apiVersion,
    kind: EndpointSlice.kind,
    ...data
  } as IEndpointSlice);
}
}

setValidateFunc(EndpointSlice, validate as ValidateFunc<IEndpointSlice>);

export type {
  IEndpointSlice as IIoK8sApiDiscoveryV1beta1EndpointSlice,
  EndpointSlice as IoK8sApiDiscoveryV1beta1EndpointSlice
};
