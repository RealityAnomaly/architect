import { IIoK8sApiResourceV1beta1ResourceSlice } from "./ResourceSlice.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta1/ResourceSliceList.js";

/**
 * ResourceSliceList is a collection of ResourceSlices.
 */
export interface IResourceSliceList extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1beta1";
/**
 * Items is the list of resource ResourceSlices.
 */
"items": Array<IIoK8sApiResourceV1beta1ResourceSlice>;
"kind": "ResourceSliceList";
/**
 * Standard list metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ResourceSliceList is a collection of ResourceSlices.
 */
export class ResourceSliceList extends Model<IResourceSliceList> implements IResourceSliceList {
  "apiVersion": IResourceSliceList["apiVersion"];
"items": Array<IIoK8sApiResourceV1beta1ResourceSlice>;
"kind": IResourceSliceList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IResourceSliceList["apiVersion"] = "resource.k8s.io/v1beta1";
static kind: IResourceSliceList["kind"] = "ResourceSliceList";
static is: TypeMetaGuard<IResourceSliceList> = createTypeMetaGuard<IResourceSliceList>(ResourceSliceList);

constructor(data?: ModelData<IResourceSliceList>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourceSliceList.apiVersion,
    kind: ResourceSliceList.kind,
    ...data
  } as IResourceSliceList);
}
}

setValidateFunc(ResourceSliceList, validate as ValidateFunc<IResourceSliceList>);

export type {
  IResourceSliceList as IIoK8sApiResourceV1beta1ResourceSliceList,
  ResourceSliceList as IoK8sApiResourceV1beta1ResourceSliceList
};
