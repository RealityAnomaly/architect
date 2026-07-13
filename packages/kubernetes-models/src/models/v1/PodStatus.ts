import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../apimachinery/api/resource/Quantity.ts";
import { IIoK8sApiCoreV1PodCondition } from "./PodCondition.ts";
import { IIoK8sApiCoreV1ContainerStatus } from "./ContainerStatus.ts";
import { IIoK8sApiCoreV1PodExtendedResourceClaimStatus } from "./PodExtendedResourceClaimStatus.ts";
import { IIoK8sApiCoreV1HostIP } from "./HostIP.ts";
import { IIoK8sApiCoreV1NodeAllocatableResourceClaimStatus } from "./NodeAllocatableResourceClaimStatus.ts";
import { IIoK8sApiCoreV1PodIP } from "./PodIP.ts";
import { IIoK8sApiCoreV1PodResourceClaimStatus } from "./PodResourceClaimStatus.ts";
import { IIoK8sApiCoreV1ResourceRequirements } from "./ResourceRequirements.ts";
import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PodStatus.js";

/**
 * PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
 */
export interface IPodStatus {
  /**
 * AllocatedResources is the total requests allocated for this pod by the node. If pod-level requests are not set, this will be the total requests aggregated across containers in the pod.
 */
"allocatedResources"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
 */
"conditions"?: Array<IIoK8sApiCoreV1PodCondition>;
/**
 * Statuses of containers in this pod. Each container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
 */
"containerStatuses"?: Array<IIoK8sApiCoreV1ContainerStatus>;
/**
 * Statuses for any ephemeral containers that have run in this pod. Each ephemeral container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
 */
"ephemeralContainerStatuses"?: Array<IIoK8sApiCoreV1ContainerStatus>;
/**
 * Status of extended resource claim backed by DRA.
 */
"extendedResourceClaimStatus"?: IIoK8sApiCoreV1PodExtendedResourceClaimStatus;
/**
 * hostIP holds the IP address of the host to which the pod is assigned. Empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns mean that HostIP will not be updated even if there is a node is assigned to pod
 */
"hostIP"?: string;
/**
 * hostIPs holds the IP addresses allocated to the host. If this field is specified, the first entry must match the hostIP field. This list is empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns means that HostIPs will not be updated even if there is a node is assigned to this pod.
 */
"hostIPs"?: Array<IIoK8sApiCoreV1HostIP>;
/**
 * Statuses of init containers in this pod. The most recent successful non-restartable init container will have ready = true, the most recently started container will have startTime set. Each init container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-and-container-status
 */
"initContainerStatuses"?: Array<IIoK8sApiCoreV1ContainerStatus>;
/**
 * A human readable message indicating details about why the pod is in this condition.
 */
"message"?: string;
/**
 * NodeAllocatableResourceClaimStatuses contains the status of node-allocatable resources that were allocated for this pod through DRA claims. This includes resources currently reported in v1.Node `status.allocatable` that are not extended resources (see https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#extended-resources). Examples include "cpu", "memory", "ephemeral-storage", and hugepages.
 */
"nodeAllocatableResourceClaimStatuses"?: Array<IIoK8sApiCoreV1NodeAllocatableResourceClaimStatus>;
/**
 * nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled.
 */
"nominatedNodeName"?: string;
/**
 * If set, this represents the .metadata.generation that the pod status was set based upon. The PodObservedGenerationTracking feature gate must be enabled to use this field.
 */
"observedGeneration"?: number;
/**
 * The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod's status. There are five possible phase values:
 * 
 * Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.
 * 
 * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase
 */
"phase"?: string;
/**
 * podIP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.
 */
"podIP"?: string;
/**
 * podIPs holds the IP addresses allocated to the pod. If this field is specified, the 0th entry must match the podIP field. Pods may be allocated at most 1 value for each of IPv4 and IPv6. This list is empty if no IPs have been allocated yet.
 */
"podIPs"?: Array<IIoK8sApiCoreV1PodIP>;
/**
 * The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#quality-of-service-classes
 */
"qosClass"?: string;
/**
 * A brief CamelCase message indicating details about why the pod is in this state. e.g. 'Evicted'
 */
"reason"?: string;
/**
 * Status of resources resize desired for pod's containers. It is empty if no resources resize is pending. Any changes to container resources will automatically set this to "Proposed" Deprecated: Resize status is moved to two pod conditions PodResizePending and PodResizeInProgress. PodResizePending will track states where the spec has been resized, but the Kubelet has not yet allocated the resources. PodResizeInProgress will track in-progress resizes, and should be present whenever allocated resources != acknowledged resources.
 */
"resize"?: string;
/**
 * Status of resource claims.
 */
"resourceClaimStatuses"?: Array<IIoK8sApiCoreV1PodResourceClaimStatus>;
/**
 * Resources represents the compute resource requests and limits that have been applied at the pod level if pod-level requests or limits are set in PodSpec.Resources
 */
"resources"?: IIoK8sApiCoreV1ResourceRequirements;
/**
 * RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod.
 */
"startTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
 */
export class PodStatus extends Model<IPodStatus> implements IPodStatus {
  "allocatedResources"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
"conditions"?: Array<IIoK8sApiCoreV1PodCondition>;
"containerStatuses"?: Array<IIoK8sApiCoreV1ContainerStatus>;
"ephemeralContainerStatuses"?: Array<IIoK8sApiCoreV1ContainerStatus>;
"extendedResourceClaimStatus"?: IIoK8sApiCoreV1PodExtendedResourceClaimStatus;
"hostIP"?: string;
"hostIPs"?: Array<IIoK8sApiCoreV1HostIP>;
"initContainerStatuses"?: Array<IIoK8sApiCoreV1ContainerStatus>;
"message"?: string;
"nodeAllocatableResourceClaimStatuses"?: Array<IIoK8sApiCoreV1NodeAllocatableResourceClaimStatus>;
"nominatedNodeName"?: string;
"observedGeneration"?: number;
"phase"?: string;
"podIP"?: string;
"podIPs"?: Array<IIoK8sApiCoreV1PodIP>;
"qosClass"?: string;
"reason"?: string;
"resize"?: string;
"resourceClaimStatuses"?: Array<IIoK8sApiCoreV1PodResourceClaimStatus>;
"resources"?: IIoK8sApiCoreV1ResourceRequirements;
"startTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

constructor(data?: ModelData<IPodStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodStatus, validate as ValidateFunc<IPodStatus>);

export type {
  IPodStatus as IIoK8sApiCoreV1PodStatus,
  PodStatus as IoK8sApiCoreV1PodStatus
};
