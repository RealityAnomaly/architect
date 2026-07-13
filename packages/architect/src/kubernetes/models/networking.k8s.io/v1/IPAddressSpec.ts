import { IIoK8sApiNetworkingV1ParentReference } from "./ParentReference.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1IPAddressSpec.js";

/**
 * IPAddressSpec describe the attributes in an IP Address.
 */
export interface IIPAddressSpec {
  /**
 * ParentRef references the resource that an IPAddress is attached to. An IPAddress must reference a parent object.
 */
"parentRef": IIoK8sApiNetworkingV1ParentReference;
}

/**
 * IPAddressSpec describe the attributes in an IP Address.
 */
export class IPAddressSpec extends Model<IIPAddressSpec> implements IIPAddressSpec {
  "parentRef": IIoK8sApiNetworkingV1ParentReference;

constructor(data?: ModelData<IIPAddressSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IPAddressSpec, validate as ValidateFunc<IIPAddressSpec>);

export type {
  IIPAddressSpec as IIoK8sApiNetworkingV1IPAddressSpec,
  IPAddressSpec as IoK8sApiNetworkingV1IPAddressSpec
};
