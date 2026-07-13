import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiResourceV1alpha2ResourceClassParametersReference } from "./ResourceClassParametersReference.ts";
import { IIoK8sApiCoreV1NodeSelector } from "../../v1/NodeSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha2ResourceClass.js";

/**
 * ResourceClass is used by administrators to influence how resources are allocated.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export interface IResourceClass extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1alpha2";
/**
 * DriverName defines the name of the dynamic resource driver that is used for allocation of a ResourceClaim that uses this class.
 * 
 * Resource drivers have a unique name in forward domain order (acme.example.com).
 */
"driverName": string;
"kind": "ResourceClass";
/**
 * Standard object metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * ParametersRef references an arbitrary separate object that may hold parameters that will be used by the driver when allocating a resource that uses this class. A dynamic resource driver can distinguish between parameters stored here and and those stored in ResourceClaimSpec.
 */
"parametersRef"?: IIoK8sApiResourceV1alpha2ResourceClassParametersReference;
/**
 * Only nodes matching the selector will be considered by the scheduler when trying to find a Node that fits a Pod when that Pod uses a ResourceClaim that has not been allocated yet.
 * 
 * Setting this field is optional. If null, all nodes are candidates.
 */
"suitableNodes"?: IIoK8sApiCoreV1NodeSelector;
}

/**
 * ResourceClass is used by administrators to influence how resources are allocated.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class ResourceClass extends Model<IResourceClass> implements IResourceClass {
  "apiVersion": IResourceClass["apiVersion"];
"driverName": string;
"kind": IResourceClass["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"parametersRef"?: IIoK8sApiResourceV1alpha2ResourceClassParametersReference;
"suitableNodes"?: IIoK8sApiCoreV1NodeSelector;

static apiVersion: IResourceClass["apiVersion"] = "resource.k8s.io/v1alpha2";
static kind: IResourceClass["kind"] = "ResourceClass";
static is = createTypeMetaGuard<IResourceClass>(ResourceClass);

constructor(data?: ModelData<IResourceClass>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourceClass.apiVersion,
    kind: ResourceClass.kind,
    ...data
  } as IResourceClass);
}
}

setValidateFunc(ResourceClass, validate as ValidateFunc<IResourceClass>);

export type {
  IResourceClass as IIoK8sApiResourceV1alpha2ResourceClass,
  ResourceClass as IoK8sApiResourceV1alpha2ResourceClass
};
