import { IIoK8sApiExtensionsV1beta1Ingress } from "./Ingress.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/extensions/v1beta1/IngressList.js";

/**
 * IngressList is a collection of Ingress.
 */
export interface IIngressList extends TypeMeta {
  "apiVersion": "extensions/v1beta1";
/**
 * Items is the list of Ingress.
 */
"items": Array<IIoK8sApiExtensionsV1beta1Ingress>;
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
"items": Array<IIoK8sApiExtensionsV1beta1Ingress>;
"kind": IIngressList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIngressList["apiVersion"] = "extensions/v1beta1";
static kind: IIngressList["kind"] = "IngressList";
static is: TypeMetaGuard<IIngressList> = createTypeMetaGuard<IIngressList>(IngressList);

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
  IIngressList as IIoK8sApiExtensionsV1beta1IngressList,
  IngressList as IoK8sApiExtensionsV1beta1IngressList
};
