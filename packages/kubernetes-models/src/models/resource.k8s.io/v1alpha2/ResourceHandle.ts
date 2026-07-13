import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha2/ResourceHandle.js";

/**
 * ResourceHandle holds opaque resource data for processing by a specific kubelet plugin.
 */
export interface IResourceHandle {
  /**
 * Data contains the opaque data associated with this ResourceHandle. It is set by the controller component of the resource driver whose name matches the DriverName set in the ResourceClaimStatus this ResourceHandle is embedded in. It is set at allocation time and is intended for processing by the kubelet plugin whose name matches the DriverName set in this ResourceHandle.
 * 
 * The maximum size of this field is 16KiB. This may get increased in the future, but not reduced.
 */
"data"?: string;
/**
 * DriverName specifies the name of the resource driver whose kubelet plugin should be invoked to process this ResourceHandle's data once it lands on a node. This may differ from the DriverName set in ResourceClaimStatus this ResourceHandle is embedded in.
 */
"driverName"?: string;
}

/**
 * ResourceHandle holds opaque resource data for processing by a specific kubelet plugin.
 */
export class ResourceHandle extends Model<IResourceHandle> implements IResourceHandle {
  "data"?: string;
"driverName"?: string;

constructor(data?: ModelData<IResourceHandle>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceHandle, validate as ValidateFunc<IResourceHandle>);

export type {
  IResourceHandle as IIoK8sApiResourceV1alpha2ResourceHandle,
  ResourceHandle as IoK8sApiResourceV1alpha2ResourceHandle
};
