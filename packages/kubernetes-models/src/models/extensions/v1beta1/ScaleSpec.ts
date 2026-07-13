import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/extensions/v1beta1/ScaleSpec.js";

/**
 * describes the attributes of a scale subresource
 */
export interface IScaleSpec {
  /**
 * desired number of instances for the scaled object.
 */
"replicas"?: number;
}

/**
 * describes the attributes of a scale subresource
 */
export class ScaleSpec extends Model<IScaleSpec> implements IScaleSpec {
  "replicas"?: number;

constructor(data?: ModelData<IScaleSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ScaleSpec, validate as ValidateFunc<IScaleSpec>);

export type {
  IScaleSpec as IIoK8sApiExtensionsV1beta1ScaleSpec,
  ScaleSpec as IoK8sApiExtensionsV1beta1ScaleSpec
};
