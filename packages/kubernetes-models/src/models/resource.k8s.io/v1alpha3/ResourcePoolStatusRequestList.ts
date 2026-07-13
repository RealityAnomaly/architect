import { IIoK8sApiResourceV1alpha3ResourcePoolStatusRequest } from "./ResourcePoolStatusRequest.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha3/ResourcePoolStatusRequestList.js";

/**
 * ResourcePoolStatusRequestList is a collection of ResourcePoolStatusRequests.
 */
export interface IResourcePoolStatusRequestList extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1alpha3";
/**
 * Items is the list of ResourcePoolStatusRequests.
 */
"items": Array<IIoK8sApiResourceV1alpha3ResourcePoolStatusRequest>;
"kind": "ResourcePoolStatusRequestList";
/**
 * Standard list metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ResourcePoolStatusRequestList is a collection of ResourcePoolStatusRequests.
 */
export class ResourcePoolStatusRequestList extends Model<IResourcePoolStatusRequestList> implements IResourcePoolStatusRequestList {
  "apiVersion": IResourcePoolStatusRequestList["apiVersion"];
"items": Array<IIoK8sApiResourceV1alpha3ResourcePoolStatusRequest>;
"kind": IResourcePoolStatusRequestList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IResourcePoolStatusRequestList["apiVersion"] = "resource.k8s.io/v1alpha3";
static kind: IResourcePoolStatusRequestList["kind"] = "ResourcePoolStatusRequestList";
static is: TypeMetaGuard<IResourcePoolStatusRequestList> = createTypeMetaGuard<IResourcePoolStatusRequestList>(ResourcePoolStatusRequestList);

constructor(data?: ModelData<IResourcePoolStatusRequestList>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourcePoolStatusRequestList.apiVersion,
    kind: ResourcePoolStatusRequestList.kind,
    ...data
  } as IResourcePoolStatusRequestList);
}
}

setValidateFunc(ResourcePoolStatusRequestList, validate as ValidateFunc<IResourcePoolStatusRequestList>);

export type {
  IResourcePoolStatusRequestList as IIoK8sApiResourceV1alpha3ResourcePoolStatusRequestList,
  ResourcePoolStatusRequestList as IoK8sApiResourceV1alpha3ResourcePoolStatusRequestList
};
