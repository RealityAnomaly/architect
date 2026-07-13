import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1beta2/ScaleSpec.js";

/**
 * ScaleSpec describes the attributes of a scale subresource
 */
export interface IScaleSpec {
  /**
 * desired number of instances for the scaled object.
 */
"replicas"?: number;
}

/**
 * ScaleSpec describes the attributes of a scale subresource
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
  IScaleSpec as IIoK8sApiAppsV1beta2ScaleSpec,
  ScaleSpec as IoK8sApiAppsV1beta2ScaleSpec
};
