import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../../_schemas/IoK8sApimachineryPkgApisMetaV1Patch.js";

/**
 * Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
 */
export interface IPatch {
  }

/**
 * Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
 */
export class Patch extends Model<IPatch> implements IPatch {
  
constructor(data?: ModelData<IPatch>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Patch, validate as ValidateFunc<IPatch>);

export type {
  IPatch as IIoK8sApimachineryPkgApisMetaV1Patch,
  Patch as IoK8sApimachineryPkgApisMetaV1Patch
};
