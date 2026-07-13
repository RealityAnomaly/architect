import { IIoK8sApiNetworkingV1beta1ServiceCIDR } from "./ServiceCIDR.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1beta1/ServiceCIDRList.js";

/**
 * ServiceCIDRList contains a list of ServiceCIDR objects.
 */
export interface IServiceCIDRList extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1beta1";
/**
 * items is the list of ServiceCIDRs.
 */
"items": Array<IIoK8sApiNetworkingV1beta1ServiceCIDR>;
"kind": "ServiceCIDRList";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ServiceCIDRList contains a list of ServiceCIDR objects.
 */
export class ServiceCIDRList extends Model<IServiceCIDRList> implements IServiceCIDRList {
  "apiVersion": IServiceCIDRList["apiVersion"];
"items": Array<IIoK8sApiNetworkingV1beta1ServiceCIDR>;
"kind": IServiceCIDRList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IServiceCIDRList["apiVersion"] = "networking.k8s.io/v1beta1";
static kind: IServiceCIDRList["kind"] = "ServiceCIDRList";
static is: TypeMetaGuard<IServiceCIDRList> = createTypeMetaGuard<IServiceCIDRList>(ServiceCIDRList);

constructor(data?: ModelData<IServiceCIDRList>) {
  super();

  this.setDefinedProps({
    apiVersion: ServiceCIDRList.apiVersion,
    kind: ServiceCIDRList.kind,
    ...data
  } as IServiceCIDRList);
}
}

setValidateFunc(ServiceCIDRList, validate as ValidateFunc<IServiceCIDRList>);

export type {
  IServiceCIDRList as IIoK8sApiNetworkingV1beta1ServiceCIDRList,
  ServiceCIDRList as IoK8sApiNetworkingV1beta1ServiceCIDRList
};
