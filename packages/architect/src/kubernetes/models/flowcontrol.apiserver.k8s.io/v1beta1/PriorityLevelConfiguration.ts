import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec } from "./PriorityLevelConfigurationSpec.ts";
import { IIoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus } from "./PriorityLevelConfigurationStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration.js";

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 */
export interface IPriorityLevelConfiguration extends TypeMeta {
  "apiVersion": "flowcontrol.apiserver.k8s.io/v1beta1";
"kind": "PriorityLevelConfiguration";
/**
 * `metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * `spec` is the specification of the desired behavior of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec;
/**
 * `status` is the current status of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus;
}

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 */
export class PriorityLevelConfiguration extends Model<IPriorityLevelConfiguration> implements IPriorityLevelConfiguration {
  "apiVersion": IPriorityLevelConfiguration["apiVersion"];
"kind": IPriorityLevelConfiguration["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec;
"status"?: IIoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus;

static apiVersion: IPriorityLevelConfiguration["apiVersion"] = "flowcontrol.apiserver.k8s.io/v1beta1";
static kind: IPriorityLevelConfiguration["kind"] = "PriorityLevelConfiguration";
static is = createTypeMetaGuard<IPriorityLevelConfiguration>(PriorityLevelConfiguration);

constructor(data?: ModelData<IPriorityLevelConfiguration>) {
  super();

  this.setDefinedProps({
    apiVersion: PriorityLevelConfiguration.apiVersion,
    kind: PriorityLevelConfiguration.kind,
    ...data
  } as IPriorityLevelConfiguration);
}
}

setValidateFunc(PriorityLevelConfiguration, validate as ValidateFunc<IPriorityLevelConfiguration>);

export type {
  IPriorityLevelConfiguration as IIoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration,
  PriorityLevelConfiguration as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration
};
