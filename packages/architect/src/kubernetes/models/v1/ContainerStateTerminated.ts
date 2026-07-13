import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ContainerStateTerminated.js";

/**
 * ContainerStateTerminated is a terminated state of a container.
 */
export interface IContainerStateTerminated {
  /**
 * Container's ID in the format '<type>://<container_id>'
 */
"containerID"?: string;
/**
 * Exit status from the last termination of the container
 */
"exitCode": number;
/**
 * Time at which the container last terminated
 */
"finishedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Message regarding the last termination of the container
 */
"message"?: string;
/**
 * (brief) reason from the last termination of the container
 */
"reason"?: string;
/**
 * Signal from the last termination of the container
 */
"signal"?: number;
/**
 * Time at which previous execution of the container started
 */
"startedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * ContainerStateTerminated is a terminated state of a container.
 */
export class ContainerStateTerminated extends Model<IContainerStateTerminated> implements IContainerStateTerminated {
  "containerID"?: string;
"exitCode": number;
"finishedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"signal"?: number;
"startedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;

constructor(data?: ModelData<IContainerStateTerminated>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerStateTerminated, validate as ValidateFunc<IContainerStateTerminated>);

export type {
  IContainerStateTerminated as IIoK8sApiCoreV1ContainerStateTerminated,
  ContainerStateTerminated as IoK8sApiCoreV1ContainerStateTerminated
};
