import { IIoK8sApiResourceV1alpha2ResourceClass } from "./ResourceClass.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha2/ResourceClassList.js";

/**
 * ResourceClassList is a collection of classes.
 */
export interface IResourceClassList extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1alpha2";
/**
 * Items is the list of resource classes.
 */
"items": Array<IIoK8sApiResourceV1alpha2ResourceClass>;
"kind": "ResourceClassList";
/**
 * Standard list metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ResourceClassList is a collection of classes.
 */
export class ResourceClassList extends Model<IResourceClassList> implements IResourceClassList {
  "apiVersion": IResourceClassList["apiVersion"];
"items": Array<IIoK8sApiResourceV1alpha2ResourceClass>;
"kind": IResourceClassList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IResourceClassList["apiVersion"] = "resource.k8s.io/v1alpha2";
static kind: IResourceClassList["kind"] = "ResourceClassList";
static is: TypeMetaGuard<IResourceClassList> = createTypeMetaGuard<IResourceClassList>(ResourceClassList);

constructor(data?: ModelData<IResourceClassList>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourceClassList.apiVersion,
    kind: ResourceClassList.kind,
    ...data
  } as IResourceClassList);
}
}

setValidateFunc(ResourceClassList, validate as ValidateFunc<IResourceClassList>);

export type {
  IResourceClassList as IIoK8sApiResourceV1alpha2ResourceClassList,
  ResourceClassList as IoK8sApiResourceV1alpha2ResourceClassList
};
