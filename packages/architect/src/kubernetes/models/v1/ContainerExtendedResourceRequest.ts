import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ContainerExtendedResourceRequest.js";

/**
 * ContainerExtendedResourceRequest has the mapping of container name, extended resource name to the device request name.
 */
export interface IContainerExtendedResourceRequest {
  /**
 * The name of the container requesting resources.
 */
"containerName": string;
/**
 * The name of the request in the special ResourceClaim which corresponds to the extended resource.
 */
"requestName": string;
/**
 * The name of the extended resource in that container which gets backed by DRA.
 */
"resourceName": string;
}

/**
 * ContainerExtendedResourceRequest has the mapping of container name, extended resource name to the device request name.
 */
export class ContainerExtendedResourceRequest extends Model<IContainerExtendedResourceRequest> implements IContainerExtendedResourceRequest {
  "containerName": string;
"requestName": string;
"resourceName": string;

constructor(data?: ModelData<IContainerExtendedResourceRequest>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerExtendedResourceRequest, validate as ValidateFunc<IContainerExtendedResourceRequest>);

export type {
  IContainerExtendedResourceRequest as IIoK8sApiCoreV1ContainerExtendedResourceRequest,
  ContainerExtendedResourceRequest as IoK8sApiCoreV1ContainerExtendedResourceRequest
};
