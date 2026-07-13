import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiNetworkingV1beta1IPAddressSpec } from "./IPAddressSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1beta1IPAddress.js";

/**
 * IPAddress represents a single IP of a single IP Family. The object is designed to be used by APIs that operate on IP addresses. The object is used by the Service core API for allocation of IP addresses. An IP address can be represented in different formats, to guarantee the uniqueness of the IP, the name of the object is the IP address in canonical format, four decimal digits separated by dots suppressing leading zeros for IPv4 and the representation defined by RFC 5952 for IPv6. Valid: 192.168.1.5 or 2001:db8::1 or 2001:db8:aaaa:bbbb:cccc:dddd:eeee:1 Invalid: 10.01.2.3 or 2001:db8:0:0:0::1
 */
export interface IIPAddress extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1beta1";
"kind": "IPAddress";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec is the desired state of the IPAddress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec": IIoK8sApiNetworkingV1beta1IPAddressSpec;
}

/**
 * IPAddress represents a single IP of a single IP Family. The object is designed to be used by APIs that operate on IP addresses. The object is used by the Service core API for allocation of IP addresses. An IP address can be represented in different formats, to guarantee the uniqueness of the IP, the name of the object is the IP address in canonical format, four decimal digits separated by dots suppressing leading zeros for IPv4 and the representation defined by RFC 5952 for IPv6. Valid: 192.168.1.5 or 2001:db8::1 or 2001:db8:aaaa:bbbb:cccc:dddd:eeee:1 Invalid: 10.01.2.3 or 2001:db8:0:0:0::1
 */
export class IPAddress extends Model<IIPAddress> implements IIPAddress {
  "apiVersion": IIPAddress["apiVersion"];
"kind": IIPAddress["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiNetworkingV1beta1IPAddressSpec;

static apiVersion: IIPAddress["apiVersion"] = "networking.k8s.io/v1beta1";
static kind: IIPAddress["kind"] = "IPAddress";
static is = createTypeMetaGuard<IIPAddress>(IPAddress);

constructor(data?: ModelData<IIPAddress>) {
  super();

  this.setDefinedProps({
    apiVersion: IPAddress.apiVersion,
    kind: IPAddress.kind,
    ...data
  } as IIPAddress);
}
}

setValidateFunc(IPAddress, validate as ValidateFunc<IIPAddress>);

export type {
  IIPAddress as IIoK8sApiNetworkingV1beta1IPAddress,
  IPAddress as IoK8sApiNetworkingV1beta1IPAddress
};
