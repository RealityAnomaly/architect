import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NamespaceSpec.js";

/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
export interface INamespaceSpec {
  /**
 * Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
 */
"finalizers"?: Array<string>;
}

/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
export class NamespaceSpec extends Model<INamespaceSpec> implements INamespaceSpec {
  "finalizers"?: Array<string>;

constructor(data?: ModelData<INamespaceSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NamespaceSpec, validate as ValidateFunc<INamespaceSpec>);

export type {
  INamespaceSpec as IIoK8sApiCoreV1NamespaceSpec,
  NamespaceSpec as IoK8sApiCoreV1NamespaceSpec
};
