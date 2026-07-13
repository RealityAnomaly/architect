import { IIoK8sApiCoreV1LimitRange } from "./LimitRange.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1LimitRangeList.js";

/**
 * LimitRangeList is a list of LimitRange items.
 */
export interface ILimitRangeList extends TypeMeta {
  "apiVersion": "v1";
/**
 * Items is a list of LimitRange objects. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
 */
"items": Array<IIoK8sApiCoreV1LimitRange>;
"kind": "LimitRangeList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * LimitRangeList is a list of LimitRange items.
 */
export class LimitRangeList extends Model<ILimitRangeList> implements ILimitRangeList {
  "apiVersion": ILimitRangeList["apiVersion"];
"items": Array<IIoK8sApiCoreV1LimitRange>;
"kind": ILimitRangeList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ILimitRangeList["apiVersion"] = "v1";
static kind: ILimitRangeList["kind"] = "LimitRangeList";
static is = createTypeMetaGuard<ILimitRangeList>(LimitRangeList);

constructor(data?: ModelData<ILimitRangeList>) {
  super();

  this.setDefinedProps({
    apiVersion: LimitRangeList.apiVersion,
    kind: LimitRangeList.kind,
    ...data
  } as ILimitRangeList);
}
}

setValidateFunc(LimitRangeList, validate as ValidateFunc<ILimitRangeList>);

export type {
  ILimitRangeList as IIoK8sApiCoreV1LimitRangeList,
  LimitRangeList as IoK8sApiCoreV1LimitRangeList
};
