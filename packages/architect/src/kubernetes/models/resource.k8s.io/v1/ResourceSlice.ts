import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiResourceV1ResourceSliceSpec } from "./ResourceSliceSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1ResourceSlice.js";

/**
 * ResourceSlice represents one or more resources in a pool of similar resources, managed by a common driver. A pool may span more than one ResourceSlice, and exactly how many ResourceSlices comprise a pool is determined by the driver.
 * 
 * At the moment, the only supported resources are devices with attributes and capacities. Each device in a given pool, regardless of how many ResourceSlices, must have a unique name. The ResourceSlice in which a device gets published may change over time. The unique identifier for a device is the tuple <driver name>, <pool name>, <device name>.
 * 
 * Whenever a driver needs to update a pool, it increments the pool.Spec.Pool.Generation number and updates all ResourceSlices with that new number and new resource definitions. A consumer must only use ResourceSlices with the highest generation number and ignore all others.
 * 
 * When allocating all resources in a pool matching certain criteria or when looking for the best solution among several different alternatives, a consumer should check the number of ResourceSlices in a pool (included in each ResourceSlice) to determine whether its view of a pool is complete and if not, should wait until the driver has completed updating the pool.
 * 
 * For resources that are not local to a node, the node name is not set. Instead, the driver may use a node selector to specify where the devices are available.
 */
export interface IResourceSlice extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1";
"kind": "ResourceSlice";
/**
 * Standard object metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Contains the information published by the driver.
 * 
 * Changing the spec automatically increments the metadata.generation number.
 */
"spec": IIoK8sApiResourceV1ResourceSliceSpec;
}

/**
 * ResourceSlice represents one or more resources in a pool of similar resources, managed by a common driver. A pool may span more than one ResourceSlice, and exactly how many ResourceSlices comprise a pool is determined by the driver.
 * 
 * At the moment, the only supported resources are devices with attributes and capacities. Each device in a given pool, regardless of how many ResourceSlices, must have a unique name. The ResourceSlice in which a device gets published may change over time. The unique identifier for a device is the tuple <driver name>, <pool name>, <device name>.
 * 
 * Whenever a driver needs to update a pool, it increments the pool.Spec.Pool.Generation number and updates all ResourceSlices with that new number and new resource definitions. A consumer must only use ResourceSlices with the highest generation number and ignore all others.
 * 
 * When allocating all resources in a pool matching certain criteria or when looking for the best solution among several different alternatives, a consumer should check the number of ResourceSlices in a pool (included in each ResourceSlice) to determine whether its view of a pool is complete and if not, should wait until the driver has completed updating the pool.
 * 
 * For resources that are not local to a node, the node name is not set. Instead, the driver may use a node selector to specify where the devices are available.
 */
export class ResourceSlice extends Model<IResourceSlice> implements IResourceSlice {
  "apiVersion": IResourceSlice["apiVersion"];
"kind": IResourceSlice["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiResourceV1ResourceSliceSpec;

static apiVersion: IResourceSlice["apiVersion"] = "resource.k8s.io/v1";
static kind: IResourceSlice["kind"] = "ResourceSlice";
static is = createTypeMetaGuard<IResourceSlice>(ResourceSlice);

constructor(data?: ModelData<IResourceSlice>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourceSlice.apiVersion,
    kind: ResourceSlice.kind,
    ...data
  } as IResourceSlice);
}
}

setValidateFunc(ResourceSlice, validate as ValidateFunc<IResourceSlice>);

export type {
  IResourceSlice as IIoK8sApiResourceV1ResourceSlice,
  ResourceSlice as IoK8sApiResourceV1ResourceSlice
};
