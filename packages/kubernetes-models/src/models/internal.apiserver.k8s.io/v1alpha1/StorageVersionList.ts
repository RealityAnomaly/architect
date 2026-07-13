import { IIoK8sApiApiserverinternalV1alpha1StorageVersion } from "./StorageVersion.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/internal.apiserver.k8s.io/v1alpha1/StorageVersionList.js";

/**
 * A list of StorageVersions.
 */
export interface IStorageVersionList extends TypeMeta {
  "apiVersion": "internal.apiserver.k8s.io/v1alpha1";
/**
 * Items holds a list of StorageVersion
 */
"items": Array<IIoK8sApiApiserverinternalV1alpha1StorageVersion>;
"kind": "StorageVersionList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * A list of StorageVersions.
 */
export class StorageVersionList extends Model<IStorageVersionList> implements IStorageVersionList {
  "apiVersion": IStorageVersionList["apiVersion"];
"items": Array<IIoK8sApiApiserverinternalV1alpha1StorageVersion>;
"kind": IStorageVersionList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IStorageVersionList["apiVersion"] = "internal.apiserver.k8s.io/v1alpha1";
static kind: IStorageVersionList["kind"] = "StorageVersionList";
static is: TypeMetaGuard<IStorageVersionList> = createTypeMetaGuard<IStorageVersionList>(StorageVersionList);

constructor(data?: ModelData<IStorageVersionList>) {
  super();

  this.setDefinedProps({
    apiVersion: StorageVersionList.apiVersion,
    kind: StorageVersionList.kind,
    ...data
  } as IStorageVersionList);
}
}

setValidateFunc(StorageVersionList, validate as ValidateFunc<IStorageVersionList>);

export type {
  IStorageVersionList as IIoK8sApiApiserverinternalV1alpha1StorageVersionList,
  StorageVersionList as IoK8sApiApiserverinternalV1alpha1StorageVersionList
};
