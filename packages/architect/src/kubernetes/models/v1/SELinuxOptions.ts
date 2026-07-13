import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1SELinuxOptions.js";

/**
 * SELinuxOptions are the labels to be applied to the container
 */
export interface ISELinuxOptions {
  /**
 * Level is SELinux level label that applies to the container.
 */
"level"?: string;
/**
 * Role is a SELinux role label that applies to the container.
 */
"role"?: string;
/**
 * Type is a SELinux type label that applies to the container.
 */
"type"?: string;
/**
 * User is a SELinux user label that applies to the container.
 */
"user"?: string;
}

/**
 * SELinuxOptions are the labels to be applied to the container
 */
export class SELinuxOptions extends Model<ISELinuxOptions> implements ISELinuxOptions {
  "level"?: string;
"role"?: string;
"type"?: string;
"user"?: string;

constructor(data?: ModelData<ISELinuxOptions>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SELinuxOptions, validate as ValidateFunc<ISELinuxOptions>);

export type {
  ISELinuxOptions as IIoK8sApiCoreV1SELinuxOptions,
  SELinuxOptions as IoK8sApiCoreV1SELinuxOptions
};
