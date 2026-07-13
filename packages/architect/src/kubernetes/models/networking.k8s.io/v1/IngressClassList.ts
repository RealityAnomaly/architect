import { IIoK8sApiNetworkingV1IngressClass } from "./IngressClass.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1IngressClassList.js";

/**
 * IngressClassList is a collection of IngressClasses.
 */
export interface IIngressClassList extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1";
/**
 * items is the list of IngressClasses.
 */
"items": Array<IIoK8sApiNetworkingV1IngressClass>;
"kind": "IngressClassList";
/**
 * Standard list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * IngressClassList is a collection of IngressClasses.
 */
export class IngressClassList extends Model<IIngressClassList> implements IIngressClassList {
  "apiVersion": IIngressClassList["apiVersion"];
"items": Array<IIoK8sApiNetworkingV1IngressClass>;
"kind": IIngressClassList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIngressClassList["apiVersion"] = "networking.k8s.io/v1";
static kind: IIngressClassList["kind"] = "IngressClassList";
static is = createTypeMetaGuard<IIngressClassList>(IngressClassList);

constructor(data?: ModelData<IIngressClassList>) {
  super();

  this.setDefinedProps({
    apiVersion: IngressClassList.apiVersion,
    kind: IngressClassList.kind,
    ...data
  } as IIngressClassList);
}
}

setValidateFunc(IngressClassList, validate as ValidateFunc<IIngressClassList>);

export type {
  IIngressClassList as IIoK8sApiNetworkingV1IngressClassList,
  IngressClassList as IoK8sApiNetworkingV1IngressClassList
};
