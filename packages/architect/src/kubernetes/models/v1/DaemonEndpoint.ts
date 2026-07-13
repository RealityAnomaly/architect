import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1DaemonEndpoint.js";

/**
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
export interface IDaemonEndpoint {
  /**
 * Port number of the given endpoint.
 */
"Port": number;
}

/**
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
export class DaemonEndpoint extends Model<IDaemonEndpoint> implements IDaemonEndpoint {
  "Port": number;

constructor(data?: ModelData<IDaemonEndpoint>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DaemonEndpoint, validate as ValidateFunc<IDaemonEndpoint>);

export type {
  IDaemonEndpoint as IIoK8sApiCoreV1DaemonEndpoint,
  DaemonEndpoint as IoK8sApiCoreV1DaemonEndpoint
};
