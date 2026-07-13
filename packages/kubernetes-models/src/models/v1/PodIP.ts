import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PodIP.js";

/**
 * PodIP represents a single IP address allocated to the pod.
 */
export interface IPodIP {
  /**
 * IP is the IP address assigned to the pod
 */
"ip": string;
}

/**
 * PodIP represents a single IP address allocated to the pod.
 */
export class PodIP extends Model<IPodIP> implements IPodIP {
  "ip": string;

constructor(data?: ModelData<IPodIP>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodIP, validate as ValidateFunc<IPodIP>);

export type {
  IPodIP as IIoK8sApiCoreV1PodIP,
  PodIP as IoK8sApiCoreV1PodIP
};
