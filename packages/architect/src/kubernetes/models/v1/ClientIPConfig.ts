import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ClientIPConfig.js";

/**
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 */
export interface IClientIPConfig {
  /**
 * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
 */
"timeoutSeconds"?: number;
}

/**
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 */
export class ClientIPConfig extends Model<IClientIPConfig> implements IClientIPConfig {
  "timeoutSeconds"?: number;

constructor(data?: ModelData<IClientIPConfig>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ClientIPConfig, validate as ValidateFunc<IClientIPConfig>);

export type {
  IClientIPConfig as IIoK8sApiCoreV1ClientIPConfig,
  ClientIPConfig as IoK8sApiCoreV1ClientIPConfig
};
