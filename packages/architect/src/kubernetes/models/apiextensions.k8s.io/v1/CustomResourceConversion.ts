import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion } from "./WebhookConversion.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion.js";

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 */
export interface ICustomResourceConversion {
  /**
 * strategy specifies how custom resources are converted between versions. Allowed values are: - `"None"`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `"Webhook"`: API Server will call to an external webhook to do the conversion. Additional information
 *   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
 */
"strategy": string;
/**
 * webhook describes how to call the conversion webhook. Required when `strategy` is set to `"Webhook"`.
 */
"webhook"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion;
}

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 */
export class CustomResourceConversion extends Model<ICustomResourceConversion> implements ICustomResourceConversion {
  "strategy": string;
"webhook"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion;

constructor(data?: ModelData<ICustomResourceConversion>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CustomResourceConversion, validate as ValidateFunc<ICustomResourceConversion>);

export type {
  ICustomResourceConversion as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion,
  CustomResourceConversion as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion
};
