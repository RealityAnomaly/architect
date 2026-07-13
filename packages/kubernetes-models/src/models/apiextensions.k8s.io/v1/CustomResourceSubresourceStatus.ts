import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apiextensions.k8s.io/v1/CustomResourceSubresourceStatus.js";

/**
 * CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, \* exposes a /status subresource for the custom resource \* PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza \* PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza
 */
export interface ICustomResourceSubresourceStatus {
  }

/**
 * CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, \* exposes a /status subresource for the custom resource \* PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza \* PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza
 */
export class CustomResourceSubresourceStatus extends Model<ICustomResourceSubresourceStatus> implements ICustomResourceSubresourceStatus {
  
constructor(data?: ModelData<ICustomResourceSubresourceStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CustomResourceSubresourceStatus, validate as ValidateFunc<ICustomResourceSubresourceStatus>);

export type {
  ICustomResourceSubresourceStatus as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus,
  CustomResourceSubresourceStatus as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus
};
