import { IIoK8sApiExtensionsV1beta1PodSecurityPolicy } from "./PodSecurityPolicy.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1PodSecurityPolicyList.js";

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead.
 * @deprecated
 */
export interface IPodSecurityPolicyList extends TypeMeta {
  "apiVersion": "extensions/v1beta1";
/**
 * items is a list of schema objects.
 */
"items": Array<IIoK8sApiExtensionsV1beta1PodSecurityPolicy>;
"kind": "PodSecurityPolicyList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead.
 * @deprecated
 */
export class PodSecurityPolicyList extends Model<IPodSecurityPolicyList> implements IPodSecurityPolicyList {
  "apiVersion": IPodSecurityPolicyList["apiVersion"];
"items": Array<IIoK8sApiExtensionsV1beta1PodSecurityPolicy>;
"kind": IPodSecurityPolicyList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPodSecurityPolicyList["apiVersion"] = "extensions/v1beta1";
static kind: IPodSecurityPolicyList["kind"] = "PodSecurityPolicyList";
static is = createTypeMetaGuard<IPodSecurityPolicyList>(PodSecurityPolicyList);

constructor(data?: ModelData<IPodSecurityPolicyList>) {
  super();

  this.setDefinedProps({
    apiVersion: PodSecurityPolicyList.apiVersion,
    kind: PodSecurityPolicyList.kind,
    ...data
  } as IPodSecurityPolicyList);
}
}

setValidateFunc(PodSecurityPolicyList, validate as ValidateFunc<IPodSecurityPolicyList>);

export type {
  IPodSecurityPolicyList as IIoK8sApiExtensionsV1beta1PodSecurityPolicyList,
  PodSecurityPolicyList as IoK8sApiExtensionsV1beta1PodSecurityPolicyList
};
