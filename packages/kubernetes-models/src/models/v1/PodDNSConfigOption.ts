import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PodDNSConfigOption.js";

/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
export interface IPodDNSConfigOption {
  /**
 * Name is this DNS resolver option's name. Required.
 */
"name"?: string;
/**
 * Value is this DNS resolver option's value.
 */
"value"?: string;
}

/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
export class PodDNSConfigOption extends Model<IPodDNSConfigOption> implements IPodDNSConfigOption {
  "name"?: string;
"value"?: string;

constructor(data?: ModelData<IPodDNSConfigOption>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodDNSConfigOption, validate as ValidateFunc<IPodDNSConfigOption>);

export type {
  IPodDNSConfigOption as IIoK8sApiCoreV1PodDNSConfigOption,
  PodDNSConfigOption as IoK8sApiCoreV1PodDNSConfigOption
};
