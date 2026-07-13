import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiNetworkingV1alpha1ServiceCIDRSpec } from "./ServiceCIDRSpec.ts";
import { IIoK8sApiNetworkingV1alpha1ServiceCIDRStatus } from "./ServiceCIDRStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1alpha1/ServiceCIDR.js";

/**
 * ServiceCIDR defines a range of IP addresses using CIDR format (e.g. 192.168.0.0/24 or 2001:db2::/64). This range is used to allocate ClusterIPs to Service objects.
 */
export interface IServiceCIDR extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1alpha1";
"kind": "ServiceCIDR";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec is the desired state of the ServiceCIDR. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiNetworkingV1alpha1ServiceCIDRSpec;
/**
 * status represents the current state of the ServiceCIDR. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiNetworkingV1alpha1ServiceCIDRStatus;
}

/**
 * ServiceCIDR defines a range of IP addresses using CIDR format (e.g. 192.168.0.0/24 or 2001:db2::/64). This range is used to allocate ClusterIPs to Service objects.
 */
export class ServiceCIDR extends Model<IServiceCIDR> implements IServiceCIDR {
  "apiVersion": IServiceCIDR["apiVersion"];
"kind": IServiceCIDR["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiNetworkingV1alpha1ServiceCIDRSpec;
"status"?: IIoK8sApiNetworkingV1alpha1ServiceCIDRStatus;

static apiVersion: IServiceCIDR["apiVersion"] = "networking.k8s.io/v1alpha1";
static kind: IServiceCIDR["kind"] = "ServiceCIDR";
static is: TypeMetaGuard<IServiceCIDR> = createTypeMetaGuard<IServiceCIDR>(ServiceCIDR);

constructor(data?: ModelData<IServiceCIDR>) {
  super();

  this.setDefinedProps({
    apiVersion: ServiceCIDR.apiVersion,
    kind: ServiceCIDR.kind,
    ...data
  } as IServiceCIDR);
}
}

setValidateFunc(ServiceCIDR, validate as ValidateFunc<IServiceCIDR>);

export type {
  IServiceCIDR as IIoK8sApiNetworkingV1alpha1ServiceCIDR,
  ServiceCIDR as IoK8sApiNetworkingV1alpha1ServiceCIDR
};
