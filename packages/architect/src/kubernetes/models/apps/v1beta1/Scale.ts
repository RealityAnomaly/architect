import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAppsV1beta1ScaleSpec } from "./ScaleSpec.ts";
import { IIoK8sApiAppsV1beta1ScaleStatus } from "./ScaleStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta1Scale.js";

/**
 * Scale represents a scaling request for a resource.
 */
export interface IScale extends TypeMeta {
  "apiVersion": "apps/v1beta1";
"kind": "Scale";
/**
 * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
 */
"spec"?: IIoK8sApiAppsV1beta1ScaleSpec;
/**
 * current status of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. Read-only.
 */
"status"?: IIoK8sApiAppsV1beta1ScaleStatus;
}

/**
 * Scale represents a scaling request for a resource.
 */
export class Scale extends Model<IScale> implements IScale {
  "apiVersion": IScale["apiVersion"];
"kind": IScale["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAppsV1beta1ScaleSpec;
"status"?: IIoK8sApiAppsV1beta1ScaleStatus;

static apiVersion: IScale["apiVersion"] = "apps/v1beta1";
static kind: IScale["kind"] = "Scale";
static is = createTypeMetaGuard<IScale>(Scale);

constructor(data?: ModelData<IScale>) {
  super();

  this.setDefinedProps({
    apiVersion: Scale.apiVersion,
    kind: Scale.kind,
    ...data
  } as IScale);
}
}

setValidateFunc(Scale, validate as ValidateFunc<IScale>);

export type {
  IScale as IIoK8sApiAppsV1beta1Scale,
  Scale as IoK8sApiAppsV1beta1Scale
};
