import { IIoK8sApiCoreV1ResourceQuota } from "./ResourceQuota.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ResourceQuotaList.js";

/**
 * ResourceQuotaList is a list of ResourceQuota items.
 */
export interface IResourceQuotaList extends TypeMeta {
  "apiVersion": "v1";
/**
 * Items is a list of ResourceQuota objects. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
 */
"items": Array<IIoK8sApiCoreV1ResourceQuota>;
"kind": "ResourceQuotaList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ResourceQuotaList is a list of ResourceQuota items.
 */
export class ResourceQuotaList extends Model<IResourceQuotaList> implements IResourceQuotaList {
  "apiVersion": IResourceQuotaList["apiVersion"];
"items": Array<IIoK8sApiCoreV1ResourceQuota>;
"kind": IResourceQuotaList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IResourceQuotaList["apiVersion"] = "v1";
static kind: IResourceQuotaList["kind"] = "ResourceQuotaList";
static is: TypeMetaGuard<IResourceQuotaList> = createTypeMetaGuard<IResourceQuotaList>(ResourceQuotaList);

constructor(data?: ModelData<IResourceQuotaList>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourceQuotaList.apiVersion,
    kind: ResourceQuotaList.kind,
    ...data
  } as IResourceQuotaList);
}
}

setValidateFunc(ResourceQuotaList, validate as ValidateFunc<IResourceQuotaList>);

export type {
  IResourceQuotaList as IIoK8sApiCoreV1ResourceQuotaList,
  ResourceQuotaList as IoK8sApiCoreV1ResourceQuotaList
};
