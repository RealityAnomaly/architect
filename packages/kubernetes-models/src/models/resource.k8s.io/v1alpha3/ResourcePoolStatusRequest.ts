import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiResourceV1alpha3ResourcePoolStatusRequestSpec } from "./ResourcePoolStatusRequestSpec.ts";
import { IIoK8sApiResourceV1alpha3ResourcePoolStatusRequestStatus } from "./ResourcePoolStatusRequestStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha3/ResourcePoolStatusRequest.js";

/**
 * ResourcePoolStatusRequest triggers a one-time calculation of resource pool status based on the provided filters. Once status is set, the request is considered complete and will not be reprocessed. Users should delete and recreate requests to get updated information.
 */
export interface IResourcePoolStatusRequest extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1alpha3";
"kind": "ResourcePoolStatusRequest";
/**
 * Standard object metadata
 */
"metadata": IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the filters for which pools to include in the status. The spec is immutable once created.
 */
"spec": IIoK8sApiResourceV1alpha3ResourcePoolStatusRequestSpec;
/**
 * Status is populated by the controller with the calculated pool status. When status is non-nil, the request is considered complete and the entire object becomes immutable.
 */
"status"?: IIoK8sApiResourceV1alpha3ResourcePoolStatusRequestStatus;
}

/**
 * ResourcePoolStatusRequest triggers a one-time calculation of resource pool status based on the provided filters. Once status is set, the request is considered complete and will not be reprocessed. Users should delete and recreate requests to get updated information.
 */
export class ResourcePoolStatusRequest extends Model<IResourcePoolStatusRequest> implements IResourcePoolStatusRequest {
  "apiVersion": IResourcePoolStatusRequest["apiVersion"];
"kind": IResourcePoolStatusRequest["kind"];
"metadata": IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiResourceV1alpha3ResourcePoolStatusRequestSpec;
"status"?: IIoK8sApiResourceV1alpha3ResourcePoolStatusRequestStatus;

static apiVersion: IResourcePoolStatusRequest["apiVersion"] = "resource.k8s.io/v1alpha3";
static kind: IResourcePoolStatusRequest["kind"] = "ResourcePoolStatusRequest";
static is: TypeMetaGuard<IResourcePoolStatusRequest> = createTypeMetaGuard<IResourcePoolStatusRequest>(ResourcePoolStatusRequest);

constructor(data?: ModelData<IResourcePoolStatusRequest>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourcePoolStatusRequest.apiVersion,
    kind: ResourcePoolStatusRequest.kind,
    ...data
  } as IResourcePoolStatusRequest);
}
}

setValidateFunc(ResourcePoolStatusRequest, validate as ValidateFunc<IResourcePoolStatusRequest>);

export type {
  IResourcePoolStatusRequest as IIoK8sApiResourceV1alpha3ResourcePoolStatusRequest,
  ResourcePoolStatusRequest as IoK8sApiResourceV1alpha3ResourcePoolStatusRequest
};
