import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig } from "./WebhookClientConfig.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apiextensions.k8s.io/v1/WebhookConversion.js";

/**
 * WebhookConversion describes how to call a conversion webhook
 */
export interface IWebhookConversion {
  /**
 * clientConfig is the instructions for how to call the webhook if strategy is `Webhook`.
 */
"clientConfig"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig;
/**
 * conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.
 */
"conversionReviewVersions": Array<string>;
}

/**
 * WebhookConversion describes how to call a conversion webhook
 */
export class WebhookConversion extends Model<IWebhookConversion> implements IWebhookConversion {
  "clientConfig"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig;
"conversionReviewVersions": Array<string>;

constructor(data?: ModelData<IWebhookConversion>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(WebhookConversion, validate as ValidateFunc<IWebhookConversion>);

export type {
  IWebhookConversion as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion,
  WebhookConversion as IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion
};
