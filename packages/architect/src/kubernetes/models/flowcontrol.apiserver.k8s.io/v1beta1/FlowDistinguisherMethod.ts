import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta1FlowDistinguisherMethod.js";

/**
 * FlowDistinguisherMethod specifies the method of a flow distinguisher.
 */
export interface IFlowDistinguisherMethod {
  /**
 * `type` is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.
 */
"type": string;
}

/**
 * FlowDistinguisherMethod specifies the method of a flow distinguisher.
 */
export class FlowDistinguisherMethod extends Model<IFlowDistinguisherMethod> implements IFlowDistinguisherMethod {
  "type": string;

constructor(data?: ModelData<IFlowDistinguisherMethod>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(FlowDistinguisherMethod, validate as ValidateFunc<IFlowDistinguisherMethod>);

export type {
  IFlowDistinguisherMethod as IIoK8sApiFlowcontrolV1beta1FlowDistinguisherMethod,
  FlowDistinguisherMethod as IoK8sApiFlowcontrolV1beta1FlowDistinguisherMethod
};
