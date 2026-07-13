import { IIoK8sApiResourceV1beta2ResourceClaim } from "./ResourceClaim.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta2/ResourceClaimList.js";

/**
 * ResourceClaimList is a collection of claims.
 */
export interface IResourceClaimList extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1beta2";
/**
 * Items is the list of resource claims.
 */
"items": Array<IIoK8sApiResourceV1beta2ResourceClaim>;
"kind": "ResourceClaimList";
/**
 * Standard list metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ResourceClaimList is a collection of claims.
 */
export class ResourceClaimList extends Model<IResourceClaimList> implements IResourceClaimList {
  "apiVersion": IResourceClaimList["apiVersion"];
"items": Array<IIoK8sApiResourceV1beta2ResourceClaim>;
"kind": IResourceClaimList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IResourceClaimList["apiVersion"] = "resource.k8s.io/v1beta2";
static kind: IResourceClaimList["kind"] = "ResourceClaimList";
static is: TypeMetaGuard<IResourceClaimList> = createTypeMetaGuard<IResourceClaimList>(ResourceClaimList);

constructor(data?: ModelData<IResourceClaimList>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourceClaimList.apiVersion,
    kind: ResourceClaimList.kind,
    ...data
  } as IResourceClaimList);
}
}

setValidateFunc(ResourceClaimList, validate as ValidateFunc<IResourceClaimList>);

export type {
  IResourceClaimList as IIoK8sApiResourceV1beta2ResourceClaimList,
  ResourceClaimList as IoK8sApiResourceV1beta2ResourceClaimList
};
