import { IIoK8sApiCoreV1PodTemplate } from "./PodTemplate.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PodTemplateList.js";

/**
 * PodTemplateList is a list of PodTemplates.
 */
export interface IPodTemplateList extends TypeMeta {
  "apiVersion": "v1";
/**
 * List of pod templates
 */
"items": Array<IIoK8sApiCoreV1PodTemplate>;
"kind": "PodTemplateList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodTemplateList is a list of PodTemplates.
 */
export class PodTemplateList extends Model<IPodTemplateList> implements IPodTemplateList {
  "apiVersion": IPodTemplateList["apiVersion"];
"items": Array<IIoK8sApiCoreV1PodTemplate>;
"kind": IPodTemplateList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPodTemplateList["apiVersion"] = "v1";
static kind: IPodTemplateList["kind"] = "PodTemplateList";
static is: TypeMetaGuard<IPodTemplateList> = createTypeMetaGuard<IPodTemplateList>(PodTemplateList);

constructor(data?: ModelData<IPodTemplateList>) {
  super();

  this.setDefinedProps({
    apiVersion: PodTemplateList.apiVersion,
    kind: PodTemplateList.kind,
    ...data
  } as IPodTemplateList);
}
}

setValidateFunc(PodTemplateList, validate as ValidateFunc<IPodTemplateList>);

export type {
  IPodTemplateList as IIoK8sApiCoreV1PodTemplateList,
  PodTemplateList as IoK8sApiCoreV1PodTemplateList
};
