import { IIoK8sApiAuditregistrationV1alpha1WebhookClientConfig } from "./WebhookClientConfig.ts";
import { IIoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig } from "./WebhookThrottleConfig.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuditregistrationV1alpha1Webhook.js";

/**
 * Webhook holds the configuration of the webhook
 */
export interface IWebhook {
  /**
 * ClientConfig holds the connection parameters for the webhook required
 */
"clientConfig": IIoK8sApiAuditregistrationV1alpha1WebhookClientConfig;
/**
 * Throttle holds the options for throttling the webhook
 */
"throttle"?: IIoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig;
}

/**
 * Webhook holds the configuration of the webhook
 */
export class Webhook extends Model<IWebhook> implements IWebhook {
  "clientConfig": IIoK8sApiAuditregistrationV1alpha1WebhookClientConfig;
"throttle"?: IIoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig;

constructor(data?: ModelData<IWebhook>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Webhook, validate as ValidateFunc<IWebhook>);

export type {
  IWebhook as IIoK8sApiAuditregistrationV1alpha1Webhook,
  Webhook as IoK8sApiAuditregistrationV1alpha1Webhook
};
