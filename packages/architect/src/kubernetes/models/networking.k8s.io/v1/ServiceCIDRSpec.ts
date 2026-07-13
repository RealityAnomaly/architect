import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1ServiceCIDRSpec.js";

/**
 * ServiceCIDRSpec define the CIDRs the user wants to use for allocating ClusterIPs for Services.
 */
export interface IServiceCIDRSpec {
  /**
 * CIDRs defines the IP blocks in CIDR notation (e.g. "192.168.0.0/24" or "2001:db8::/64") from which to assign service cluster IPs. Max of two CIDRs is allowed, one of each IP family. This field is immutable.
 */
"cidrs"?: Array<string>;
}

/**
 * ServiceCIDRSpec define the CIDRs the user wants to use for allocating ClusterIPs for Services.
 */
export class ServiceCIDRSpec extends Model<IServiceCIDRSpec> implements IServiceCIDRSpec {
  "cidrs"?: Array<string>;

constructor(data?: ModelData<IServiceCIDRSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ServiceCIDRSpec, validate as ValidateFunc<IServiceCIDRSpec>);

export type {
  IServiceCIDRSpec as IIoK8sApiNetworkingV1ServiceCIDRSpec,
  ServiceCIDRSpec as IoK8sApiNetworkingV1ServiceCIDRSpec
};
