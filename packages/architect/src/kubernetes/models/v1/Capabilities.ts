import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1Capabilities.js";

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
