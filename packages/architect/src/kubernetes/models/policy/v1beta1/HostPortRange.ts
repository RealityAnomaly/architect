import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiPolicyV1beta1HostPortRange.js";

/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 */
export interface IHostPortRange {
  /**
 * max is the end of the range, inclusive.
 */
"max": number;
/**
 * min is the start of the range, inclusive.
 */
"min": number;
}

/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 */
export class HostPortRange extends Model<IHostPortRange> implements IHostPortRange {
  "max": number;
"min": number;

constructor(data?: ModelData<IHostPortRange>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(HostPortRange, validate as ValidateFunc<IHostPortRange>);

export type {
  IHostPortRange as IIoK8sApiPolicyV1beta1HostPortRange,
  HostPortRange as IoK8sApiPolicyV1beta1HostPortRange
};
