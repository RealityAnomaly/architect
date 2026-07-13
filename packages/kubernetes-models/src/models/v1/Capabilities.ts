import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/Capabilities.js";

/**
 * Adds and removes POSIX capabilities from running containers.
 */
export interface ICapabilities {
  /**
 * Added capabilities
 */
"add"?: Array<string>;
/**
 * Removed capabilities
 */
"drop"?: Array<string>;
}

/**
 * Adds and removes POSIX capabilities from running containers.
 */
export class Capabilities extends Model<ICapabilities> implements ICapabilities {
  "add"?: Array<string>;
"drop"?: Array<string>;

constructor(data?: ModelData<ICapabilities>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Capabilities, validate as ValidateFunc<ICapabilities>);

export type {
  ICapabilities as IIoK8sApiCoreV1Capabilities,
  Capabilities as IoK8sApiCoreV1Capabilities
};
