import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiResourceV1alpha2PodSchedulingContextSpec } from "./PodSchedulingContextSpec.ts";
import { IIoK8sApiResourceV1alpha2PodSchedulingContextStatus } from "./PodSchedulingContextStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha2PodSchedulingContext.js";

/**
 * PodSchedulingContext objects hold information that is needed to schedule a Pod with ResourceClaims that use "WaitForFirstConsumer" allocation mode.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export interface IPodSchedulingContext extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1alpha2";
"kind": "PodSchedulingContext";
/**
 * Standard object metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec describes where resources for the Pod are needed.
 */
"spec": IIoK8sApiResourceV1alpha2PodSchedulingContextSpec;
/**
 * Status describes where resources for the Pod can be allocated.
 */
"status"?: IIoK8sApiResourceV1alpha2PodSchedulingContextStatus;
}

/**
 * PodSchedulingContext objects hold information that is needed to schedule a Pod with ResourceClaims that use "WaitForFirstConsumer" allocation mode.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class PodSchedulingContext extends Model<IPodSchedulingContext> implements IPodSchedulingContext {
  "apiVersion": IPodSchedulingContext["apiVersion"];
"kind": IPodSchedulingContext["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiResourceV1alpha2PodSchedulingContextSpec;
"status"?: IIoK8sApiResourceV1alpha2PodSchedulingContextStatus;

static apiVersion: IPodSchedulingContext["apiVersion"] = "resource.k8s.io/v1alpha2";
static kind: IPodSchedulingContext["kind"] = "PodSchedulingContext";
static is = createTypeMetaGuard<IPodSchedulingContext>(PodSchedulingContext);

constructor(data?: ModelData<IPodSchedulingContext>) {
  super();

  this.setDefinedProps({
    apiVersion: PodSchedulingContext.apiVersion,
    kind: PodSchedulingContext.kind,
    ...data
  } as IPodSchedulingContext);
}
}

setValidateFunc(PodSchedulingContext, validate as ValidateFunc<IPodSchedulingContext>);

export type {
  IPodSchedulingContext as IIoK8sApiResourceV1alpha2PodSchedulingContext,
  PodSchedulingContext as IoK8sApiResourceV1alpha2PodSchedulingContext
};
