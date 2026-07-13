import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoreV1NamespaceSpec } from "./NamespaceSpec.ts";
import { IIoK8sApiCoreV1NamespaceStatus } from "./NamespaceStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1Namespace.js";

/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 */
export interface INamespace extends TypeMeta {
  "apiVersion": "v1";
"kind": "Namespace";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the behavior of the Namespace. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1NamespaceSpec;
/**
 * Status describes the current status of a Namespace. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiCoreV1NamespaceStatus;
}

/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 */
export class Namespace extends Model<INamespace> implements INamespace {
  "apiVersion": INamespace["apiVersion"];
"kind": INamespace["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiCoreV1NamespaceSpec;
"status"?: IIoK8sApiCoreV1NamespaceStatus;

static apiVersion: INamespace["apiVersion"] = "v1";
static kind: INamespace["kind"] = "Namespace";
static is = createTypeMetaGuard<INamespace>(Namespace);

constructor(data?: ModelData<INamespace>) {
  super();

  this.setDefinedProps({
    apiVersion: Namespace.apiVersion,
    kind: Namespace.kind,
    ...data
  } as INamespace);
}
}

setValidateFunc(Namespace, validate as ValidateFunc<INamespace>);

export type {
  INamespace as IIoK8sApiCoreV1Namespace,
  Namespace as IoK8sApiCoreV1Namespace
};
