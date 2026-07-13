import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoreV1PodSpec } from "./PodSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PodTemplateSpec.js";

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export interface IPodTemplateSpec {
  /**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1PodSpec;
}

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export class PodTemplateSpec extends Model<IPodTemplateSpec> implements IPodTemplateSpec {
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiCoreV1PodSpec;

constructor(data?: ModelData<IPodTemplateSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodTemplateSpec, validate as ValidateFunc<IPodTemplateSpec>);

export type {
  IPodTemplateSpec as IIoK8sApiCoreV1PodTemplateSpec,
  PodTemplateSpec as IoK8sApiCoreV1PodTemplateSpec
};
