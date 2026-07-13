import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig.js";

/**
 * WebhookThrottleConfig holds the configuration for throttling events
 */
export interface IWebhookThrottleConfig {
  /**
 * ThrottleBurst is the maximum number of events sent at the same moment default 15 QPS
 */
"burst"?: number;
/**
 * ThrottleQPS maximum number of batches per second default 10 QPS
 */
"qps"?: number;
}

/**
 * WebhookThrottleConfig holds the configuration for throttling events
 */
export class WebhookThrottleConfig extends Model<IWebhookThrottleConfig> implements IWebhookThrottleConfig {
  "burst"?: number;
"qps"?: number;

constructor(data?: ModelData<IWebhookThrottleConfig>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(WebhookThrottleConfig, validate as ValidateFunc<IWebhookThrottleConfig>);

export type {
  IWebhookThrottleConfig as IIoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig,
  WebhookThrottleConfig as IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig
};
