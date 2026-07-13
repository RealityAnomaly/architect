import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1HostAlias.js";

/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 */
export interface IHostAlias {
  /**
 * Hostnames for the above IP address.
 */
"hostnames"?: Array<string>;
/**
 * IP address of the host file entry.
 */
"ip": string;
}

/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 */
export class HostAlias extends Model<IHostAlias> implements IHostAlias {
  "hostnames"?: Array<string>;
"ip": string;

constructor(data?: ModelData<IHostAlias>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(HostAlias, validate as ValidateFunc<IHostAlias>);

export type {
  IHostAlias as IIoK8sApiCoreV1HostAlias,
  HostAlias as IoK8sApiCoreV1HostAlias
};
