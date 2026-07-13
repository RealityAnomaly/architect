import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoreV1ObjectReference } from "./ObjectReference.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1Binding.js";

/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler.
 */
export interface IBinding extends TypeMeta {
  "apiVersion": "v1";
"kind": "Binding";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * The target object that you want to bind to the standard object.
 */
"target": IIoK8sApiCoreV1ObjectReference;
}

/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler.
 */
export class Binding extends Model<IBinding> implements IBinding {
  "apiVersion": IBinding["apiVersion"];
"kind": IBinding["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"target": IIoK8sApiCoreV1ObjectReference;

static apiVersion: IBinding["apiVersion"] = "v1";
static kind: IBinding["kind"] = "Binding";
static is = createTypeMetaGuard<IBinding>(Binding);

constructor(data?: ModelData<IBinding>) {
  super();

  this.setDefinedProps({
    apiVersion: Binding.apiVersion,
    kind: Binding.kind,
    ...data
  } as IBinding);
}
}

setValidateFunc(Binding, validate as ValidateFunc<IBinding>);

export type {
  IBinding as IIoK8sApiCoreV1Binding,
  Binding as IoK8sApiCoreV1Binding
};
