import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1Sysctl.js";

/**
 * Sysctl defines a kernel parameter to be set
 */
export interface ISysctl {
  /**
 * Name of a property to set
 */
"name": string;
/**
 * Value of a property to set
 */
"value": string;
}

/**
 * Sysctl defines a kernel parameter to be set
 */
export class Sysctl extends Model<ISysctl> implements ISysctl {
  "name": string;
"value": string;

constructor(data?: ModelData<ISysctl>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Sysctl, validate as ValidateFunc<ISysctl>);

export type {
  ISysctl as IIoK8sApiCoreV1Sysctl,
  Sysctl as IoK8sApiCoreV1Sysctl
};
