import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec } from "./HorizontalPodAutoscalerSpec.ts";
import { IIoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus } from "./HorizontalPodAutoscalerStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v1/HorizontalPodAutoscaler.js";

/**
 * configuration of a horizontal pod autoscaler.
 */
export interface IHorizontalPodAutoscaler extends TypeMeta {
  "apiVersion": "autoscaling/v1";
"kind": "HorizontalPodAutoscaler";
/**
 * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec defines the behaviour of autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
 */
"spec": IIoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec;
/**
 * status is the current information about the autoscaler.
 */
"status"?: IIoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus;
}

/**
 * configuration of a horizontal pod autoscaler.
 */
export class HorizontalPodAutoscaler extends Model<IHorizontalPodAutoscaler> implements IHorizontalPodAutoscaler {
  "apiVersion": IHorizontalPodAutoscaler["apiVersion"];
"kind": IHorizontalPodAutoscaler["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec;
"status"?: IIoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus;

static apiVersion: IHorizontalPodAutoscaler["apiVersion"] = "autoscaling/v1";
static kind: IHorizontalPodAutoscaler["kind"] = "HorizontalPodAutoscaler";
static is: TypeMetaGuard<IHorizontalPodAutoscaler> = createTypeMetaGuard<IHorizontalPodAutoscaler>(HorizontalPodAutoscaler);

constructor(data?: ModelData<IHorizontalPodAutoscaler>) {
  super();

  this.setDefinedProps({
    apiVersion: HorizontalPodAutoscaler.apiVersion,
    kind: HorizontalPodAutoscaler.kind,
    ...data
  } as IHorizontalPodAutoscaler);
}
}

setValidateFunc(HorizontalPodAutoscaler, validate as ValidateFunc<IHorizontalPodAutoscaler>);

export type {
  IHorizontalPodAutoscaler as IIoK8sApiAutoscalingV1HorizontalPodAutoscaler,
  HorizontalPodAutoscaler as IoK8sApiAutoscalingV1HorizontalPodAutoscaler
};
