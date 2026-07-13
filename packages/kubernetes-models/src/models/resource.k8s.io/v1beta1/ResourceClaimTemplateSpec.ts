import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiResourceV1beta1ResourceClaimSpec } from "./ResourceClaimSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta1/ResourceClaimTemplateSpec.js";

/**
 * ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.
 */
export interface IResourceClaimTemplateSpec {
  /**
 * ObjectMeta may contain labels and annotations that will be copied into the ResourceClaim when creating it. No other fields are allowed and will be rejected during validation.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec for the ResourceClaim. The entire content is copied unchanged into the ResourceClaim that gets created from this template. The same fields as in a ResourceClaim are also valid here.
 */
"spec": IIoK8sApiResourceV1beta1ResourceClaimSpec;
}

/**
 * ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.
 */
export class ResourceClaimTemplateSpec extends Model<IResourceClaimTemplateSpec> implements IResourceClaimTemplateSpec {
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiResourceV1beta1ResourceClaimSpec;

constructor(data?: ModelData<IResourceClaimTemplateSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceClaimTemplateSpec, validate as ValidateFunc<IResourceClaimTemplateSpec>);

export type {
  IResourceClaimTemplateSpec as IIoK8sApiResourceV1beta1ResourceClaimTemplateSpec,
  ResourceClaimTemplateSpec as IoK8sApiResourceV1beta1ResourceClaimTemplateSpec
};
