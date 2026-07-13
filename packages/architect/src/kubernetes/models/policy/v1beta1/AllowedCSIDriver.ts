import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiPolicyV1beta1AllowedCSIDriver.js";

/**
 * AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
 */
export interface IAllowedCSIDriver {
  /**
 * Name is the registered name of the CSI driver
 */
"name": string;
}

/**
 * AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
 */
export class AllowedCSIDriver extends Model<IAllowedCSIDriver> implements IAllowedCSIDriver {
  "name": string;

constructor(data?: ModelData<IAllowedCSIDriver>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AllowedCSIDriver, validate as ValidateFunc<IAllowedCSIDriver>);

export type {
  IAllowedCSIDriver as IIoK8sApiPolicyV1beta1AllowedCSIDriver,
  AllowedCSIDriver as IoK8sApiPolicyV1beta1AllowedCSIDriver
};
