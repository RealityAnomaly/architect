import { IIoK8sApiAutoscalingV2HorizontalPodAutoscaler } from "./HorizontalPodAutoscaler.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v2/HorizontalPodAutoscalerList.js";

/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 */
export interface IHorizontalPodAutoscalerList extends TypeMeta {
  "apiVersion": "autoscaling/v2";
/**
 * items is the list of horizontal pod autoscaler objects.
 */
"items": Array<IIoK8sApiAutoscalingV2HorizontalPodAutoscaler>;
"kind": "HorizontalPodAutoscalerList";
/**
 * metadata is the standard list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 */
export class HorizontalPodAutoscalerList extends Model<IHorizontalPodAutoscalerList> implements IHorizontalPodAutoscalerList {
  "apiVersion": IHorizontalPodAutoscalerList["apiVersion"];
"items": Array<IIoK8sApiAutoscalingV2HorizontalPodAutoscaler>;
"kind": IHorizontalPodAutoscalerList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IHorizontalPodAutoscalerList["apiVersion"] = "autoscaling/v2";
static kind: IHorizontalPodAutoscalerList["kind"] = "HorizontalPodAutoscalerList";
static is: TypeMetaGuard<IHorizontalPodAutoscalerList> = createTypeMetaGuard<IHorizontalPodAutoscalerList>(HorizontalPodAutoscalerList);

constructor(data?: ModelData<IHorizontalPodAutoscalerList>) {
  super();

  this.setDefinedProps({
    apiVersion: HorizontalPodAutoscalerList.apiVersion,
    kind: HorizontalPodAutoscalerList.kind,
    ...data
  } as IHorizontalPodAutoscalerList);
}
}

setValidateFunc(HorizontalPodAutoscalerList, validate as ValidateFunc<IHorizontalPodAutoscalerList>);

export type {
  IHorizontalPodAutoscalerList as IIoK8sApiAutoscalingV2HorizontalPodAutoscalerList,
  HorizontalPodAutoscalerList as IoK8sApiAutoscalingV2HorizontalPodAutoscalerList
};
