import { IIoK8sApimachineryPkgApisMetaV1DeleteOptions } from "../../../apimachinery/apis/meta/v1/DeleteOptions.ts";
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/policy/v1/Eviction.js";

/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export interface IEviction extends TypeMeta {
  "apiVersion": "policy/v1";
/**
 * DeleteOptions may be provided
 */
"deleteOptions"?: IIoK8sApimachineryPkgApisMetaV1DeleteOptions;
"kind": "Eviction";
/**
 * ObjectMeta describes the pod that is being evicted.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
}

/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export class Eviction extends Model<IEviction> implements IEviction {
  "apiVersion": IEviction["apiVersion"];
"deleteOptions"?: IIoK8sApimachineryPkgApisMetaV1DeleteOptions;
"kind": IEviction["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

static apiVersion: IEviction["apiVersion"] = "policy/v1";
static kind: IEviction["kind"] = "Eviction";
static is: TypeMetaGuard<IEviction> = createTypeMetaGuard<IEviction>(Eviction);

constructor(data?: ModelData<IEviction>) {
  super();

  this.setDefinedProps({
    apiVersion: Eviction.apiVersion,
    kind: Eviction.kind,
    ...data
  } as IEviction);
}
}

setValidateFunc(Eviction, validate as ValidateFunc<IEviction>);

export type {
  IEviction as IIoK8sApiPolicyV1Eviction,
  Eviction as IoK8sApiPolicyV1Eviction
};
