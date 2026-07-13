import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiResourceV1beta1DeviceClassSpec } from "./DeviceClassSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1beta1DeviceClass.js";

/**
 * DeviceClass is a vendor- or admin-provided resource that contains device configuration and selectors. It can be referenced in the device requests of a claim to apply these presets. Cluster scoped.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export interface IDeviceClass extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1beta1";
"kind": "DeviceClass";
/**
 * Standard object metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines what can be allocated and how to configure it.
 * 
 * This is mutable. Consumers have to be prepared for classes changing at any time, either because they get updated or replaced. Claim allocations are done once based on whatever was set in classes at the time of allocation.
 * 
 * Changing the spec automatically increments the metadata.generation number.
 */
"spec": IIoK8sApiResourceV1beta1DeviceClassSpec;
}

/**
 * DeviceClass is a vendor- or admin-provided resource that contains device configuration and selectors. It can be referenced in the device requests of a claim to apply these presets. Cluster scoped.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class DeviceClass extends Model<IDeviceClass> implements IDeviceClass {
  "apiVersion": IDeviceClass["apiVersion"];
"kind": IDeviceClass["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiResourceV1beta1DeviceClassSpec;

static apiVersion: IDeviceClass["apiVersion"] = "resource.k8s.io/v1beta1";
static kind: IDeviceClass["kind"] = "DeviceClass";
static is = createTypeMetaGuard<IDeviceClass>(DeviceClass);

constructor(data?: ModelData<IDeviceClass>) {
  super();

  this.setDefinedProps({
    apiVersion: DeviceClass.apiVersion,
    kind: DeviceClass.kind,
    ...data
  } as IDeviceClass);
}
}

setValidateFunc(DeviceClass, validate as ValidateFunc<IDeviceClass>);

export type {
  IDeviceClass as IIoK8sApiResourceV1beta1DeviceClass,
  DeviceClass as IoK8sApiResourceV1beta1DeviceClass
};
