import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiResourceV1alpha3ResourceClaimTemplateSpec } from "./ResourceClaimTemplateSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha3ResourceClaimTemplate.js";

/**
 * ResourceClaimTemplate is used to produce ResourceClaim objects.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export interface IResourceClaimTemplate extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1alpha3";
"kind": "ResourceClaimTemplate";
/**
 * Standard object metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Describes the ResourceClaim that is to be generated.
 * 
 * This field is immutable. A ResourceClaim will get created by the control plane for a Pod when needed and then not get updated anymore.
 */
"spec": IIoK8sApiResourceV1alpha3ResourceClaimTemplateSpec;
}

/**
 * ResourceClaimTemplate is used to produce ResourceClaim objects.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class ResourceClaimTemplate extends Model<IResourceClaimTemplate> implements IResourceClaimTemplate {
  "apiVersion": IResourceClaimTemplate["apiVersion"];
"kind": IResourceClaimTemplate["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiResourceV1alpha3ResourceClaimTemplateSpec;

static apiVersion: IResourceClaimTemplate["apiVersion"] = "resource.k8s.io/v1alpha3";
static kind: IResourceClaimTemplate["kind"] = "ResourceClaimTemplate";
static is = createTypeMetaGuard<IResourceClaimTemplate>(ResourceClaimTemplate);

constructor(data?: ModelData<IResourceClaimTemplate>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourceClaimTemplate.apiVersion,
    kind: ResourceClaimTemplate.kind,
    ...data
  } as IResourceClaimTemplate);
}
}

setValidateFunc(ResourceClaimTemplate, validate as ValidateFunc<IResourceClaimTemplate>);

export type {
  IResourceClaimTemplate as IIoK8sApiResourceV1alpha3ResourceClaimTemplate,
  ResourceClaimTemplate as IoK8sApiResourceV1alpha3ResourceClaimTemplate
};
