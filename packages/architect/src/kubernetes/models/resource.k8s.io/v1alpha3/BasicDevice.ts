import { IIoK8sApiResourceV1alpha3DeviceAttribute } from "./DeviceAttribute.ts";
import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha3BasicDevice.js";

/**
 * BasicDevice defines one device instance.
 */
export interface IBasicDevice {
  /**
 * Attributes defines the set of attributes for this device. The name of each attribute must be unique in that set.
 * 
 * The maximum number of attributes and capacities combined is 32.
 */
"attributes"?: {
  [key: string]: IIoK8sApiResourceV1alpha3DeviceAttribute;
};
/**
 * Capacity defines the set of capacities for this device. The name of each capacity must be unique in that set.
 * 
 * The maximum number of attributes and capacities combined is 32.
 */
"capacity"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
}

/**
 * BasicDevice defines one device instance.
 */
export class BasicDevice extends Model<IBasicDevice> implements IBasicDevice {
  "attributes"?: {
  [key: string]: IIoK8sApiResourceV1alpha3DeviceAttribute;
};
"capacity"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

constructor(data?: ModelData<IBasicDevice>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(BasicDevice, validate as ValidateFunc<IBasicDevice>);

export type {
  IBasicDevice as IIoK8sApiResourceV1alpha3BasicDevice,
  BasicDevice as IoK8sApiResourceV1alpha3BasicDevice
};
