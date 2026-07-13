import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ContainerStateRunning.js";

/**
 * ContainerStateRunning is a running state of a container.
 */
export interface IContainerStateRunning {
  /**
 * Time at which the container was last (re-)started
 */
"startedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * ContainerStateRunning is a running state of a container.
 */
export class ContainerStateRunning extends Model<IContainerStateRunning> implements IContainerStateRunning {
  "startedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;

constructor(data?: ModelData<IContainerStateRunning>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerStateRunning, validate as ValidateFunc<IContainerStateRunning>);

export type {
  IContainerStateRunning as IIoK8sApiCoreV1ContainerStateRunning,
  ContainerStateRunning as IoK8sApiCoreV1ContainerStateRunning
};
