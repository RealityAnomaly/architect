import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiSchedulingV1alpha2BasicSchedulingPolicy.js";

/**
 * BasicSchedulingPolicy indicates that standard Kubernetes scheduling behavior should be used.
 */
export interface IBasicSchedulingPolicy {
  }

/**
 * BasicSchedulingPolicy indicates that standard Kubernetes scheduling behavior should be used.
 */
export class BasicSchedulingPolicy extends Model<IBasicSchedulingPolicy> implements IBasicSchedulingPolicy {
  
constructor(data?: ModelData<IBasicSchedulingPolicy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(BasicSchedulingPolicy, validate as ValidateFunc<IBasicSchedulingPolicy>);

export type {
  IBasicSchedulingPolicy as IIoK8sApiSchedulingV1alpha2BasicSchedulingPolicy,
  BasicSchedulingPolicy as IoK8sApiSchedulingV1alpha2BasicSchedulingPolicy
};
