import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig } from "./WebhookClientConfig.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apiextensions.k8s.io/v1beta1/CustomResourceConversion.js";

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 */
export interface ICustomResourceConversion {
  /**
 * conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. Defaults to `["v1beta1"]`.
 */
"conversionReviewVersions"?: Array<string>;
/**
 * strategy specifies how custom resources are converted between versions. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information
 *   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhookClientConfig to be set.
 */
"strategy": string;
/**
 * webhookClientConfig is the instructions for how to call the webhook if strategy is `Webhook`. Required when `strategy` is set to `Webhook`.
 */
"webhookClientConfig"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig;
}

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 */
export class CustomResourceConversion extends Model<ICustomResourceConversion> implements ICustomResourceConversion {
  "conversionReviewVersions"?: Array<string>;
"strategy": string;
"webhookClientConfig"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig;

constructor(data?: ModelData<ICustomResourceConversion>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CustomResourceConversion, validate as ValidateFunc<ICustomResourceConversion>);

export type {
  ICustomResourceConversion as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion,
  CustomResourceConversion as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion
};
