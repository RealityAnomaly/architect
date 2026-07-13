import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoreV1ResourceQuotaSpec } from "./ResourceQuotaSpec.ts";
import { IIoK8sApiCoreV1ResourceQuotaStatus } from "./ResourceQuotaStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ResourceQuota.js";

/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 */
export interface IResourceQuota extends TypeMeta {
  "apiVersion": "v1";
"kind": "ResourceQuota";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the desired quota. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1ResourceQuotaSpec;
/**
 * Status defines the actual enforced quota and its current usage. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiCoreV1ResourceQuotaStatus;
}

/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 */
export class ResourceQuota extends Model<IResourceQuota> implements IResourceQuota {
  "apiVersion": IResourceQuota["apiVersion"];
"kind": IResourceQuota["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiCoreV1ResourceQuotaSpec;
"status"?: IIoK8sApiCoreV1ResourceQuotaStatus;

static apiVersion: IResourceQuota["apiVersion"] = "v1";
static kind: IResourceQuota["kind"] = "ResourceQuota";
static is = createTypeMetaGuard<IResourceQuota>(ResourceQuota);

constructor(data?: ModelData<IResourceQuota>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourceQuota.apiVersion,
    kind: ResourceQuota.kind,
    ...data
  } as IResourceQuota);
}
}

setValidateFunc(ResourceQuota, validate as ValidateFunc<IResourceQuota>);

export type {
  IResourceQuota as IIoK8sApiCoreV1ResourceQuota,
  ResourceQuota as IoK8sApiCoreV1ResourceQuota
};
