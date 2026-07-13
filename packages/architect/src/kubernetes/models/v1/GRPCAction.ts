import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1GRPCAction.js";

/**
 * GRPCAction specifies an action involving a GRPC service.
 */
export interface IGRPCAction {
  /**
 * Port number of the gRPC service. Number must be in the range 1 to 65535.
 */
"port": number;
/**
 * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
 * 
 * If this is not specified, the default behavior is defined by gRPC.
 */
"service"?: string;
}

/**
 * GRPCAction specifies an action involving a GRPC service.
 */
export class GRPCAction extends Model<IGRPCAction> implements IGRPCAction {
  "port": number;
"service"?: string;

constructor(data?: ModelData<IGRPCAction>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(GRPCAction, validate as ValidateFunc<IGRPCAction>);

export type {
  IGRPCAction as IIoK8sApiCoreV1GRPCAction,
  GRPCAction as IoK8sApiCoreV1GRPCAction
};
