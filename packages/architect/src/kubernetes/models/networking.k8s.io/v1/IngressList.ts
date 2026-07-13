import { IIoK8sApiNetworkingV1Ingress } from "./Ingress.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1IngressList.js";

/**
 * IngressList is a collection of Ingress.
 */
export interface IIngressList extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1";
/**
 * items is the list of Ingress.
 */
"items": Array<IIoK8sApiNetworkingV1Ingress>;
"kind": "IngressList";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * IngressList is a collection of Ingress.
 */
export class IngressList extends Model<IIngressList> implements IIngressList {
  "apiVersion": IIngressList["apiVersion"];
"items": Array<IIoK8sApiNetworkingV1Ingress>;
"kind": IIngressList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIngressList["apiVersion"] = "networking.k8s.io/v1";
static kind: IIngressList["kind"] = "IngressList";
static is = createTypeMetaGuard<IIngressList>(IngressList);

constructor(data?: ModelData<IIngressList>) {
  super();

  this.setDefinedProps({
    apiVersion: IngressList.apiVersion,
    kind: IngressList.kind,
    ...data
  } as IIngressList);
}
}

setValidateFunc(IngressList, validate as ValidateFunc<IIngressList>);

export type {
  IIngressList as IIoK8sApiNetworkingV1IngressList,
  IngressList as IoK8sApiNetworkingV1IngressList
};
