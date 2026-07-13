import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiApiserverinternalV1alpha1StorageVersionSpec.js";

/**
 * StorageVersionSpec is an empty spec.
 */
export interface IStorageVersionSpec {
  }

/**
 * StorageVersionSpec is an empty spec.
 */
export class StorageVersionSpec extends Model<IStorageVersionSpec> implements IStorageVersionSpec {
  
constructor(data?: ModelData<IStorageVersionSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(StorageVersionSpec, validate as ValidateFunc<IStorageVersionSpec>);

export type {
  IStorageVersionSpec as IIoK8sApiApiserverinternalV1alpha1StorageVersionSpec,
  StorageVersionSpec as IoK8sApiApiserverinternalV1alpha1StorageVersionSpec
};
