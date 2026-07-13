import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiExtensionsV1beta1IngressSpec } from "./IngressSpec.ts";
import { IIoK8sApiExtensionsV1beta1IngressStatus } from "./IngressStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/extensions/v1beta1/Ingress.js";

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. DEPRECATED - This group version of Ingress is deprecated by networking.k8s.io/v1beta1 Ingress. See the release notes for more information.
 * @deprecated
 */
export interface IIngress extends TypeMeta {
  "apiVersion": "extensions/v1beta1";
"kind": "Ingress";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiExtensionsV1beta1IngressSpec;
/**
 * Status is the current state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiExtensionsV1beta1IngressStatus;
}

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. DEPRECATED - This group version of Ingress is deprecated by networking.k8s.io/v1beta1 Ingress. See the release notes for more information.
 * @deprecated
 */
export class Ingress extends Model<IIngress> implements IIngress {
  "apiVersion": IIngress["apiVersion"];
"kind": IIngress["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiExtensionsV1beta1IngressSpec;
"status"?: IIoK8sApiExtensionsV1beta1IngressStatus;

static apiVersion: IIngress["apiVersion"] = "extensions/v1beta1";
static kind: IIngress["kind"] = "Ingress";
static is: TypeMetaGuard<IIngress> = createTypeMetaGuard<IIngress>(Ingress);

constructor(data?: ModelData<IIngress>) {
  super();

  this.setDefinedProps({
    apiVersion: Ingress.apiVersion,
    kind: Ingress.kind,
    ...data
  } as IIngress);
}
}

setValidateFunc(Ingress, validate as ValidateFunc<IIngress>);

export type {
  IIngress as IIoK8sApiExtensionsV1beta1Ingress,
  Ingress as IoK8sApiExtensionsV1beta1Ingress
};
