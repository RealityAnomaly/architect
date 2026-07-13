import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiExtensionsV1beta1PodSecurityPolicySpec } from "./PodSecurityPolicySpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1PodSecurityPolicy.js";

/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead.
 * @deprecated
 */
export interface IPodSecurityPolicy extends TypeMeta {
  "apiVersion": "extensions/v1beta1";
"kind": "PodSecurityPolicy";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec defines the policy enforced.
 */
"spec"?: IIoK8sApiExtensionsV1beta1PodSecurityPolicySpec;
}

/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead.
 * @deprecated
 */
export class PodSecurityPolicy extends Model<IPodSecurityPolicy> implements IPodSecurityPolicy {
  "apiVersion": IPodSecurityPolicy["apiVersion"];
"kind": IPodSecurityPolicy["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiExtensionsV1beta1PodSecurityPolicySpec;

static apiVersion: IPodSecurityPolicy["apiVersion"] = "extensions/v1beta1";
static kind: IPodSecurityPolicy["kind"] = "PodSecurityPolicy";
static is = createTypeMetaGuard<IPodSecurityPolicy>(PodSecurityPolicy);

constructor(data?: ModelData<IPodSecurityPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: PodSecurityPolicy.apiVersion,
    kind: PodSecurityPolicy.kind,
    ...data
  } as IPodSecurityPolicy);
}
}

setValidateFunc(PodSecurityPolicy, validate as ValidateFunc<IPodSecurityPolicy>);

export type {
  IPodSecurityPolicy as IIoK8sApiExtensionsV1beta1PodSecurityPolicy,
  PodSecurityPolicy as IoK8sApiExtensionsV1beta1PodSecurityPolicy
};
