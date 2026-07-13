import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1HostIP.js";

/**
 * HostIP represents a single IP address allocated to the host.
 */
export interface IHostIP {
  /**
 * IP is the IP address assigned to the host
 */
"ip": string;
}

/**
 * HostIP represents a single IP address allocated to the host.
 */
export class HostIP extends Model<IHostIP> implements IHostIP {
  "ip": string;

constructor(data?: ModelData<IHostIP>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(HostIP, validate as ValidateFunc<IHostIP>);

export type {
  IHostIP as IIoK8sApiCoreV1HostIP,
  HostIP as IoK8sApiCoreV1HostIP
};
