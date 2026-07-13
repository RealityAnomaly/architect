import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiNetworkingV1IngressSpec } from "./IngressSpec.ts";
import { IIoK8sApiNetworkingV1IngressStatus } from "./IngressStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1/Ingress.js";

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 */
export interface IIngress extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1";
"kind": "Ingress";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiNetworkingV1IngressSpec;
/**
 * status is the current state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiNetworkingV1IngressStatus;
}

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 */
export class Ingress extends Model<IIngress> implements IIngress {
  "apiVersion": IIngress["apiVersion"];
"kind": IIngress["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiNetworkingV1IngressSpec;
"status"?: IIoK8sApiNetworkingV1IngressStatus;

static apiVersion: IIngress["apiVersion"] = "networking.k8s.io/v1";
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
  IIngress as IIoK8sApiNetworkingV1Ingress,
  Ingress as IoK8sApiNetworkingV1Ingress
};
