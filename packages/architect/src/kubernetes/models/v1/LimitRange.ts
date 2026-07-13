import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoreV1LimitRangeSpec } from "./LimitRangeSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1LimitRange.js";

/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 */
export interface ILimitRange extends TypeMeta {
  "apiVersion": "v1";
"kind": "LimitRange";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the limits enforced. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1LimitRangeSpec;
}

/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 */
export class LimitRange extends Model<ILimitRange> implements ILimitRange {
  "apiVersion": ILimitRange["apiVersion"];
"kind": ILimitRange["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiCoreV1LimitRangeSpec;

static apiVersion: ILimitRange["apiVersion"] = "v1";
static kind: ILimitRange["kind"] = "LimitRange";
static is = createTypeMetaGuard<ILimitRange>(LimitRange);

constructor(data?: ModelData<ILimitRange>) {
  super();

  this.setDefinedProps({
    apiVersion: LimitRange.apiVersion,
    kind: LimitRange.kind,
    ...data
  } as ILimitRange);
}
}

setValidateFunc(LimitRange, validate as ValidateFunc<ILimitRange>);

export type {
  ILimitRange as IIoK8sApiCoreV1LimitRange,
  LimitRange as IoK8sApiCoreV1LimitRange
};
