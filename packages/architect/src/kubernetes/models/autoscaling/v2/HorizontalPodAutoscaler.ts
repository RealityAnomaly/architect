import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec } from "./HorizontalPodAutoscalerSpec.ts";
import { IIoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus } from "./HorizontalPodAutoscalerStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2HorizontalPodAutoscaler.js";

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export interface IHorizontalPodAutoscaler extends TypeMeta {
  "apiVersion": "autoscaling/v2";
"kind": "HorizontalPodAutoscaler";
/**
 * metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec is the specification for the behaviour of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
 */
"spec": IIoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec;
/**
 * status is the current information about the autoscaler.
 */
"status"?: IIoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus;
}

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export class HorizontalPodAutoscaler extends Model<IHorizontalPodAutoscaler> implements IHorizontalPodAutoscaler {
  "apiVersion": IHorizontalPodAutoscaler["apiVersion"];
"kind": IHorizontalPodAutoscaler["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec;
"status"?: IIoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus;

static apiVersion: IHorizontalPodAutoscaler["apiVersion"] = "autoscaling/v2";
static kind: IHorizontalPodAutoscaler["kind"] = "HorizontalPodAutoscaler";
static is = createTypeMetaGuard<IHorizontalPodAutoscaler>(HorizontalPodAutoscaler);

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
  IHorizontalPodAutoscaler as IIoK8sApiAutoscalingV2HorizontalPodAutoscaler,
  HorizontalPodAutoscaler as IoK8sApiAutoscalingV2HorizontalPodAutoscaler
};
