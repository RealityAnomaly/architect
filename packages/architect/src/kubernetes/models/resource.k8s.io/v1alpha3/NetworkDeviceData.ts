import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha3NetworkDeviceData.js";

/**
 * NetworkDeviceData provides network-related details for the allocated device. This information may be filled by drivers or other components to configure or identify the device within a network context.
 */
export interface INetworkDeviceData {
  /**
 * HardwareAddress represents the hardware address (e.g. MAC Address) of the device's network interface.
 * 
 * Must not be longer than 128 characters.
 */
"hardwareAddress"?: string;
/**
 * InterfaceName specifies the name of the network interface associated with the allocated device. This might be the name of a physical or virtual network interface being configured in the pod.
 * 
 * Must not be longer than 256 characters.
 */
"interfaceName"?: string;
/**
 * IPs lists the network addresses assigned to the device's network interface. This can include both IPv4 and IPv6 addresses. The IPs are in the CIDR notation, which includes both the address and the associated subnet mask. e.g.: "192.0.2.5/24" for IPv4 and "2001:db8::5/64" for IPv6.
 */
"ips"?: Array<string>;
}

/**
 * NetworkDeviceData provides network-related details for the allocated device. This information may be filled by drivers or other components to configure or identify the device within a network context.
 */
export class NetworkDeviceData extends Model<INetworkDeviceData> implements INetworkDeviceData {
  "hardwareAddress"?: string;
"interfaceName"?: string;
"ips"?: Array<string>;

constructor(data?: ModelData<INetworkDeviceData>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NetworkDeviceData, validate as ValidateFunc<INetworkDeviceData>);

export type {
  INetworkDeviceData as IIoK8sApiResourceV1alpha3NetworkDeviceData,
  NetworkDeviceData as IoK8sApiResourceV1alpha3NetworkDeviceData
};
