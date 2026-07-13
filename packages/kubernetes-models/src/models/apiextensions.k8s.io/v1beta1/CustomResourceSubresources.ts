import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourceScale } from "./CustomResourceSubresourceScale.ts";
import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourceStatus } from "./CustomResourceSubresourceStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apiextensions.k8s.io/v1beta1/CustomResourceSubresources.js";

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export interface ICustomResourceSubresources {
  /**
 * scale indicates the custom resource should serve a `/scale` subresource that returns an `autoscaling/v1` Scale object.
 */
"scale"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourceScale;
/**
 * status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object.
 */
"status"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourceStatus;
}

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export class CustomResourceSubresources extends Model<ICustomResourceSubresources> implements ICustomResourceSubresources {
  "scale"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourceScale;
"status"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourceStatus;

constructor(data?: ModelData<ICustomResourceSubresources>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CustomResourceSubresources, validate as ValidateFunc<ICustomResourceSubresources>);

export type {
  ICustomResourceSubresources as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources,
  CustomResourceSubresources as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources
};
