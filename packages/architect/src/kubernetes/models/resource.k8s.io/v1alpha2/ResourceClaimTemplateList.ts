import { IIoK8sApiResourceV1alpha2ResourceClaimTemplate } from "./ResourceClaimTemplate.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha2ResourceClaimTemplateList.js";

/**
 * ResourceClaimTemplateList is a collection of claim templates.
 */
export interface IResourceClaimTemplateList extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1alpha2";
/**
 * Items is the list of resource claim templates.
 */
"items": Array<IIoK8sApiResourceV1alpha2ResourceClaimTemplate>;
"kind": "ResourceClaimTemplateList";
/**
 * Standard list metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ResourceClaimTemplateList is a collection of claim templates.
 */
export class ResourceClaimTemplateList extends Model<IResourceClaimTemplateList> implements IResourceClaimTemplateList {
  "apiVersion": IResourceClaimTemplateList["apiVersion"];
"items": Array<IIoK8sApiResourceV1alpha2ResourceClaimTemplate>;
"kind": IResourceClaimTemplateList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IResourceClaimTemplateList["apiVersion"] = "resource.k8s.io/v1alpha2";
static kind: IResourceClaimTemplateList["kind"] = "ResourceClaimTemplateList";
static is = createTypeMetaGuard<IResourceClaimTemplateList>(ResourceClaimTemplateList);

constructor(data?: ModelData<IResourceClaimTemplateList>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourceClaimTemplateList.apiVersion,
    kind: ResourceClaimTemplateList.kind,
    ...data
  } as IResourceClaimTemplateList);
}
}

setValidateFunc(ResourceClaimTemplateList, validate as ValidateFunc<IResourceClaimTemplateList>);

export type {
  IResourceClaimTemplateList as IIoK8sApiResourceV1alpha2ResourceClaimTemplateList,
  ResourceClaimTemplateList as IoK8sApiResourceV1alpha2ResourceClaimTemplateList
};
