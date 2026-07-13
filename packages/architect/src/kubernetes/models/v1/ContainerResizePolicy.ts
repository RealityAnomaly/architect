import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ContainerResizePolicy.js";

/**
 * ContainerResizePolicy represents resource resize policy for the container.
 */
export interface IContainerResizePolicy {
  /**
 * Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.
 */
"resourceName": string;
/**
 * Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.
 */
"restartPolicy": string;
}

/**
 * ContainerResizePolicy represents resource resize policy for the container.
 */
export class ContainerResizePolicy extends Model<IContainerResizePolicy> implements IContainerResizePolicy {
  "resourceName": string;
"restartPolicy": string;

constructor(data?: ModelData<IContainerResizePolicy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerResizePolicy, validate as ValidateFunc<IContainerResizePolicy>);

export type {
  IContainerResizePolicy as IIoK8sApiCoreV1ContainerResizePolicy,
  ContainerResizePolicy as IoK8sApiCoreV1ContainerResizePolicy
};
