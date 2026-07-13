import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoreV1PodTemplateSpec } from "./PodTemplateSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PodTemplate.js";

/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 */
export interface IPodTemplate extends TypeMeta {
  "apiVersion": "v1";
"kind": "PodTemplate";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Template defines the pods that will be created from this pod template. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"template"?: IIoK8sApiCoreV1PodTemplateSpec;
}

/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 */
export class PodTemplate extends Model<IPodTemplate> implements IPodTemplate {
  "apiVersion": IPodTemplate["apiVersion"];
"kind": IPodTemplate["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"template"?: IIoK8sApiCoreV1PodTemplateSpec;

static apiVersion: IPodTemplate["apiVersion"] = "v1";
static kind: IPodTemplate["kind"] = "PodTemplate";
static is: TypeMetaGuard<IPodTemplate> = createTypeMetaGuard<IPodTemplate>(PodTemplate);

constructor(data?: ModelData<IPodTemplate>) {
  super();

  this.setDefinedProps({
    apiVersion: PodTemplate.apiVersion,
    kind: PodTemplate.kind,
    ...data
  } as IPodTemplate);
}
}

setValidateFunc(PodTemplate, validate as ValidateFunc<IPodTemplate>);

export type {
  IPodTemplate as IIoK8sApiCoreV1PodTemplate,
  PodTemplate as IoK8sApiCoreV1PodTemplate
};
