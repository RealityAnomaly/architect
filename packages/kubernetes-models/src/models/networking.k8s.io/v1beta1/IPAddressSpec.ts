import { IIoK8sApiNetworkingV1beta1ParentReference } from "./ParentReference.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1beta1/IPAddressSpec.js";

/**
 * IPAddressSpec describe the attributes in an IP Address.
 */
export interface IIPAddressSpec {
  /**
 * ParentRef references the resource that an IPAddress is attached to. An IPAddress must reference a parent object.
 */
"parentRef": IIoK8sApiNetworkingV1beta1ParentReference;
}

/**
 * IPAddressSpec describe the attributes in an IP Address.
 */
export class IPAddressSpec extends Model<IIPAddressSpec> implements IIPAddressSpec {
  "parentRef": IIoK8sApiNetworkingV1beta1ParentReference;

constructor(data?: ModelData<IIPAddressSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IPAddressSpec, validate as ValidateFunc<IIPAddressSpec>);

export type {
  IIPAddressSpec as IIoK8sApiNetworkingV1beta1IPAddressSpec,
  IPAddressSpec as IoK8sApiNetworkingV1beta1IPAddressSpec
};
