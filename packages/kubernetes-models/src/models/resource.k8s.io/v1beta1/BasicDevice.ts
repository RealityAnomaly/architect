import { IIoK8sApiResourceV1beta1DeviceAttribute } from "./DeviceAttribute.ts";
import { IIoK8sApiResourceV1beta1DeviceCapacity } from "./DeviceCapacity.ts";
import { IIoK8sApiResourceV1beta1DeviceCounterConsumption } from "./DeviceCounterConsumption.ts";
import { IIoK8sApiResourceV1beta1NodeAllocatableResourceMapping } from "./NodeAllocatableResourceMapping.ts";
import { IIoK8sApiCoreV1NodeSelector } from "../../v1/NodeSelector.ts";
import { IIoK8sApiResourceV1beta1DeviceTaint } from "./DeviceTaint.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta1/BasicDevice.js";

/**
 * BasicDevice defines one device instance.
 */
export interface IBasicDevice {
  /**
 * AllNodes indicates that all nodes have access to the device.
 * 
 * Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.
 */
"allNodes"?: boolean;
/**
 * AllowMultipleAllocations marks whether the device is allowed to be allocated to multiple DeviceRequests.
 * 
 * If AllowMultipleAllocations is set to true, the device can be allocated more than once, and all of its capacity is consumable, regardless of whether the requestPolicy is defined or not.
 */
"allowMultipleAllocations"?: boolean;
/**
 * Attributes defines the set of attributes for this device. The name of each attribute must be unique in that set.
 * 
 * The maximum number of attributes and capacities combined is 32.
 */
"attributes"?: {
  [key: string]: IIoK8sApiResourceV1beta1DeviceAttribute;
};
/**
 * BindingConditions defines the conditions for proceeding with binding. All of these conditions must be set in the per-device status conditions with a value of True to proceed with binding the pod to the node while scheduling the pod.
 * 
 * The maximum number of binding conditions is 4.
 * 
 * The conditions must be a valid condition type string.
 * 
 * This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
 */
"bindingConditions"?: Array<string>;
/**
 * BindingFailureConditions defines the conditions for binding failure. They may be set in the per-device status conditions. If any is true, a binding failure occurred.
 * 
 * The maximum number of binding failure conditions is 4.
 * 
 * The conditions must be a valid condition type string.
 * 
 * This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
 */
"bindingFailureConditions"?: Array<string>;
/**
 * BindsToNode indicates if the usage of an allocation involving this device has to be limited to exactly the node that was chosen when allocating the claim. If set to true, the scheduler will set the ResourceClaim.Status.Allocation.NodeSelector to match the node where the allocation was made.
 * 
 * This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
 */
"bindsToNode"?: boolean;
/**
 * Capacity defines the set of capacities for this device. The name of each capacity must be unique in that set.
 * 
 * The maximum number of attributes and capacities combined is 32.
 */
"capacity"?: {
  [key: string]: IIoK8sApiResourceV1beta1DeviceCapacity;
};
/**
 * ConsumesCounters defines a list of references to sharedCounters and the set of counters that the device will consume from those counter sets.
 * 
 * There can only be a single entry per counterSet.
 * 
 * The maximum number of device counter consumptions per device is 2.
 */
"consumesCounters"?: Array<IIoK8sApiResourceV1beta1DeviceCounterConsumption>;
/**
 * NodeAllocatableResourceMappings defines the mapping of node resources that are managed by the DRA driver exposing this device. This includes resources currently reported in v1.Node `status.allocatable` that are not extended resources (see https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#extended-resources). Examples include "cpu", "memory", "ephemeral-storage", and hugepages. In addition to standard requests made through the Pod `spec`, these resources can also be requested through claims and allocated by the DRA driver. For example, a CPU DRA driver might allocate exclusive CPUs or auxiliary node memory dependencies of an accelerator device. The keys of this map are the node-allocatable resource names (e.g., "cpu", "memory"). Extended resource names are not permitted as keys.
 */
"nodeAllocatableResourceMappings"?: {
  [key: string]: IIoK8sApiResourceV1beta1NodeAllocatableResourceMapping;
};
/**
 * NodeName identifies the node where the device is available.
 * 
 * Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.
 */
"nodeName"?: string;
/**
 * NodeSelector defines the nodes where the device is available.
 * 
 * Must use exactly one term.
 * 
 * Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.
 */
"nodeSelector"?: IIoK8sApiCoreV1NodeSelector;
/**
 * If specified, these are the driver-defined taints.
 * 
 * The maximum number of taints is 16. If taints are set for any device in a ResourceSlice, then the maximum number of allowed devices per ResourceSlice is 64 instead of 128.
 * 
 * This is a beta field and requires enabling the DRADeviceTaints feature gate.
 */
"taints"?: Array<IIoK8sApiResourceV1beta1DeviceTaint>;
}

/**
 * BasicDevice defines one device instance.
 */
export class BasicDevice extends Model<IBasicDevice> implements IBasicDevice {
  "allNodes"?: boolean;
"allowMultipleAllocations"?: boolean;
"attributes"?: {
  [key: string]: IIoK8sApiResourceV1beta1DeviceAttribute;
};
"bindingConditions"?: Array<string>;
"bindingFailureConditions"?: Array<string>;
"bindsToNode"?: boolean;
"capacity"?: {
  [key: string]: IIoK8sApiResourceV1beta1DeviceCapacity;
};
"consumesCounters"?: Array<IIoK8sApiResourceV1beta1DeviceCounterConsumption>;
"nodeAllocatableResourceMappings"?: {
  [key: string]: IIoK8sApiResourceV1beta1NodeAllocatableResourceMapping;
};
"nodeName"?: string;
"nodeSelector"?: IIoK8sApiCoreV1NodeSelector;
"taints"?: Array<IIoK8sApiResourceV1beta1DeviceTaint>;

constructor(data?: ModelData<IBasicDevice>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(BasicDevice, validate as ValidateFunc<IBasicDevice>);

export type {
  IBasicDevice as IIoK8sApiResourceV1beta1BasicDevice,
  BasicDevice as IoK8sApiResourceV1beta1BasicDevice
};
