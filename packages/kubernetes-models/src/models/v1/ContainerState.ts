import { IIoK8sApiCoreV1ContainerStateRunning } from "./ContainerStateRunning.ts";
import { IIoK8sApiCoreV1ContainerStateTerminated } from "./ContainerStateTerminated.ts";
import { IIoK8sApiCoreV1ContainerStateWaiting } from "./ContainerStateWaiting.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ContainerState.js";

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export interface IContainerState {
  /**
 * Details about a running container
 */
"running"?: IIoK8sApiCoreV1ContainerStateRunning;
/**
 * Details about a terminated container
 */
"terminated"?: IIoK8sApiCoreV1ContainerStateTerminated;
/**
 * Details about a waiting container
 */
"waiting"?: IIoK8sApiCoreV1ContainerStateWaiting;
}

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export class ContainerState extends Model<IContainerState> implements IContainerState {
  "running"?: IIoK8sApiCoreV1ContainerStateRunning;
"terminated"?: IIoK8sApiCoreV1ContainerStateTerminated;
"waiting"?: IIoK8sApiCoreV1ContainerStateWaiting;

constructor(data?: ModelData<IContainerState>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerState, validate as ValidateFunc<IContainerState>);

export type {
  IContainerState as IIoK8sApiCoreV1ContainerState,
  ContainerState as IoK8sApiCoreV1ContainerState
};
