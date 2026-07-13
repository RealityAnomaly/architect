import { IIoK8sApiResourceV1alpha3BasicDevice } from "./BasicDevice.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha3/Device.js";

/**
 * Device represents one individual hardware instance that can be selected based on its attributes. Besides the name, exactly one field must be set.
 */
export interface IDevice {
  /**
 * Basic defines one device instance.
 */
"basic"?: IIoK8sApiResourceV1alpha3BasicDevice;
/**
 * Name is unique identifier among all devices managed by the driver in the pool. It must be a DNS label.
 */
"name": string;
}

/**
 * Device represents one individual hardware instance that can be selected based on its attributes. Besides the name, exactly one field must be set.
 */
export class Device extends Model<IDevice> implements IDevice {
  "basic"?: IIoK8sApiResourceV1alpha3BasicDevice;
"name": string;

constructor(data?: ModelData<IDevice>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Device, validate as ValidateFunc<IDevice>);

export type {
  IDevice as IIoK8sApiResourceV1alpha3Device,
  Device as IoK8sApiResourceV1alpha3Device
};
