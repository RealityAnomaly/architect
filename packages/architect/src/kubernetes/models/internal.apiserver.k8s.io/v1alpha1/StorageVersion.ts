import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiApiserverinternalV1alpha1StorageVersionSpec } from "./StorageVersionSpec.ts";
import { IIoK8sApiApiserverinternalV1alpha1StorageVersionStatus } from "./StorageVersionStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiApiserverinternalV1alpha1StorageVersion.js";

/**
 * Storage version of a specific resource.
 */
export interface IStorageVersion extends TypeMeta {
  "apiVersion": "internal.apiserver.k8s.io/v1alpha1";
"kind": "StorageVersion";
/**
 * metadata is the standard object metadata. The name is <group>.<resource>.
 */
"metadata": IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec is an empty spec. It is here to comply with Kubernetes API style.
 */
"spec"?: IIoK8sApiApiserverinternalV1alpha1StorageVersionSpec;
/**
 * status on the version the API server instance can decode from and encode objects to when persisting objects in the backend.
 */
"status"?: IIoK8sApiApiserverinternalV1alpha1StorageVersionStatus;
}

/**
 * Storage version of a specific resource.
 */
export class StorageVersion extends Model<IStorageVersion> implements IStorageVersion {
  "apiVersion": IStorageVersion["apiVersion"];
"kind": IStorageVersion["kind"];
"metadata": IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiApiserverinternalV1alpha1StorageVersionSpec;
"status"?: IIoK8sApiApiserverinternalV1alpha1StorageVersionStatus;

static apiVersion: IStorageVersion["apiVersion"] = "internal.apiserver.k8s.io/v1alpha1";
static kind: IStorageVersion["kind"] = "StorageVersion";
static is = createTypeMetaGuard<IStorageVersion>(StorageVersion);

constructor(data?: ModelData<IStorageVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: StorageVersion.apiVersion,
    kind: StorageVersion.kind,
    ...data
  } as IStorageVersion);
}
}

setValidateFunc(StorageVersion, validate as ValidateFunc<IStorageVersion>);

export type {
  IStorageVersion as IIoK8sApiApiserverinternalV1alpha1StorageVersion,
  StorageVersion as IoK8sApiApiserverinternalV1alpha1StorageVersion
};
