import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ContainerStateWaiting.js";

/**
 * ContainerStateWaiting is a waiting state of a container.
 */
export interface IContainerStateWaiting {
  /**
 * Message regarding why the container is not yet running.
 */
"message"?: string;
/**
 * (brief) reason the container is not yet running.
 */
"reason"?: string;
}

/**
 * ContainerStateWaiting is a waiting state of a container.
 */
export class ContainerStateWaiting extends Model<IContainerStateWaiting> implements IContainerStateWaiting {
  "message"?: string;
"reason"?: string;

constructor(data?: ModelData<IContainerStateWaiting>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerStateWaiting, validate as ValidateFunc<IContainerStateWaiting>);

export type {
  IContainerStateWaiting as IIoK8sApiCoreV1ContainerStateWaiting,
  ContainerStateWaiting as IoK8sApiCoreV1ContainerStateWaiting
};
