import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../apimachinery/api/resource/Quantity.ts";
import { IIoK8sApiCoreV1ResourceStatus } from "./ResourceStatus.ts";
import { IIoK8sApiCoreV1ContainerState } from "./ContainerState.ts";
import { IIoK8sApiCoreV1ResourceRequirements } from "./ResourceRequirements.ts";
import { IIoK8sApiCoreV1ContainerUser } from "./ContainerUser.ts";
import { IIoK8sApiCoreV1VolumeMountStatus } from "./VolumeMountStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ContainerStatus.js";

/**
 * ContainerStatus contains details for the current status of this container.
 */
export interface IContainerStatus {
  /**
 * AllocatedResources represents the compute resources allocated for this container by the node. Kubelet sets this value to Container.Resources.Requests upon successful pod admission and after successfully admitting desired pod resize.
 */
"allocatedResources"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * AllocatedResourcesStatus represents the status of various resources allocated for this Pod.
 */
"allocatedResourcesStatus"?: Array<IIoK8sApiCoreV1ResourceStatus>;
/**
 * ContainerID is the ID of the container in the format '<type>://<container_id>'. Where type is a container runtime identifier, returned from Version call of CRI API (for example "containerd").
 */
"containerID"?: string;
/**
 * Image is the name of container image that the container is running. The container image may not match the image used in the PodSpec, as it may have been resolved by the runtime. More info: https://kubernetes.io/docs/concepts/containers/images.
 */
"image": string;
/**
 * ImageID is the image ID of the container's image. The image ID may not match the image ID of the image used in the PodSpec, as it may have been resolved by the runtime.
 */
"imageID": string;
/**
 * LastTerminationState holds the last termination state of the container to help debug container crashes and restarts. This field is not populated if the container is still running and RestartCount is 0.
 */
"lastState"?: IIoK8sApiCoreV1ContainerState;
/**
 * Name is a DNS_LABEL representing the unique name of the container. Each container in a pod must have a unique name across all container types. Cannot be updated.
 */
"name": string;
/**
 * Ready specifies whether the container is currently passing its readiness check. The value will change as readiness probes keep executing. If no readiness probes are specified, this field defaults to true once the container is fully started (see Started field).
 * 
 * The value is typically used to determine whether a container is ready to accept traffic.
 */
"ready": boolean;
/**
 * Resources represents the compute resource requests and limits that have been successfully enacted on the running container after it has been started or has been successfully resized.
 */
"resources"?: IIoK8sApiCoreV1ResourceRequirements;
/**
 * RestartCount holds the number of times the container has been restarted. Kubelet makes an effort to always increment the value, but there are cases when the state may be lost due to node restarts and then the value may be reset to 0. The value is never negative.
 */
"restartCount": number;
/**
 * Started indicates whether the container has finished its postStart lifecycle hook and passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. In both cases, startup probes will run again. Is always true when no startupProbe is defined and container is running and has passed the postStart lifecycle hook. The null value must be treated the same as false.
 */
"started"?: boolean;
/**
 * State holds details about the container's current condition.
 */
"state"?: IIoK8sApiCoreV1ContainerState;
/**
 * StopSignal reports the effective stop signal for this container
 */
"stopSignal"?: string;
/**
 * User represents user identity information initially attached to the first process of the container
 */
"user"?: IIoK8sApiCoreV1ContainerUser;
/**
 * Status of volume mounts.
 */
"volumeMounts"?: Array<IIoK8sApiCoreV1VolumeMountStatus>;
}

/**
 * ContainerStatus contains details for the current status of this container.
 */
export class ContainerStatus extends Model<IContainerStatus> implements IContainerStatus {
  "allocatedResources"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
"allocatedResourcesStatus"?: Array<IIoK8sApiCoreV1ResourceStatus>;
"containerID"?: string;
"image": string;
"imageID": string;
"lastState"?: IIoK8sApiCoreV1ContainerState;
"name": string;
"ready": boolean;
"resources"?: IIoK8sApiCoreV1ResourceRequirements;
"restartCount": number;
"started"?: boolean;
"state"?: IIoK8sApiCoreV1ContainerState;
"stopSignal"?: string;
"user"?: IIoK8sApiCoreV1ContainerUser;
"volumeMounts"?: Array<IIoK8sApiCoreV1VolumeMountStatus>;

constructor(data?: ModelData<IContainerStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerStatus, validate as ValidateFunc<IContainerStatus>);

export type {
  IContainerStatus as IIoK8sApiCoreV1ContainerStatus,
  ContainerStatus as IoK8sApiCoreV1ContainerStatus
};
