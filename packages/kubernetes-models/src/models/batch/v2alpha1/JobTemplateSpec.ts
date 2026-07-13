import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiBatchV1JobSpec } from "../v1/JobSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/batch/v2alpha1/JobTemplateSpec.js";

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export interface IJobTemplateSpec {
  /**
 * Standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiBatchV1JobSpec;
}

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export class JobTemplateSpec extends Model<IJobTemplateSpec> implements IJobTemplateSpec {
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiBatchV1JobSpec;

constructor(data?: ModelData<IJobTemplateSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(JobTemplateSpec, validate as ValidateFunc<IJobTemplateSpec>);

export type {
  IJobTemplateSpec as IIoK8sApiBatchV2alpha1JobTemplateSpec,
  JobTemplateSpec as IoK8sApiBatchV2alpha1JobTemplateSpec
};
