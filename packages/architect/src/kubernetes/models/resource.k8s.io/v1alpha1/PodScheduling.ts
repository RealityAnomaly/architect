import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiResourceV1alpha1PodSchedulingSpec } from "./PodSchedulingSpec.ts";
import { IIoK8sApiResourceV1alpha1PodSchedulingStatus } from "./PodSchedulingStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha1PodScheduling.js";

/**
 * PodScheduling objects hold information that is needed to schedule a Pod with ResourceClaims that use "WaitForFirstConsumer" allocation mode.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export interface IPodScheduling extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1alpha1";
"kind": "PodScheduling";
/**
 * Standard object metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec describes where resources for the Pod are needed.
 */
"spec": IIoK8sApiResourceV1alpha1PodSchedulingSpec;
/**
 * Status describes where resources for the Pod can be allocated.
 */
"status"?: IIoK8sApiResourceV1alpha1PodSchedulingStatus;
}

/**
 * PodScheduling objects hold information that is needed to schedule a Pod with ResourceClaims that use "WaitForFirstConsumer" allocation mode.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class PodScheduling extends Model<IPodScheduling> implements IPodScheduling {
  "apiVersion": IPodScheduling["apiVersion"];
"kind": IPodScheduling["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiResourceV1alpha1PodSchedulingSpec;
"status"?: IIoK8sApiResourceV1alpha1PodSchedulingStatus;

static apiVersion: IPodScheduling["apiVersion"] = "resource.k8s.io/v1alpha1";
static kind: IPodScheduling["kind"] = "PodScheduling";
static is = createTypeMetaGuard<IPodScheduling>(PodScheduling);

constructor(data?: ModelData<IPodScheduling>) {
  super();

  this.setDefinedProps({
    apiVersion: PodScheduling.apiVersion,
    kind: PodScheduling.kind,
    ...data
  } as IPodScheduling);
}
}

setValidateFunc(PodScheduling, validate as ValidateFunc<IPodScheduling>);

export type {
  IPodScheduling as IIoK8sApiResourceV1alpha1PodScheduling,
  PodScheduling as IoK8sApiResourceV1alpha1PodScheduling
};
