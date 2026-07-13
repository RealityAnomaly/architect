import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { IIoK8sApiCoreV1PodTemplateSpec } from "../../v1/PodTemplateSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1/ReplicaSetSpec.js";

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export interface IReplicaSetSpec {
  /**
 * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
 */
"minReadySeconds"?: number;
/**
 * Replicas is the number of desired pods. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicaset
 */
"replicas"?: number;
/**
 * Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
 */
"selector": IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/#pod-template
 */
"template"?: IIoK8sApiCoreV1PodTemplateSpec;
}

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export class ReplicaSetSpec extends Model<IReplicaSetSpec> implements IReplicaSetSpec {
  "minReadySeconds"?: number;
"replicas"?: number;
"selector": IIoK8sApimachineryPkgApisMetaV1LabelSelector;
"template"?: IIoK8sApiCoreV1PodTemplateSpec;

constructor(data?: ModelData<IReplicaSetSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ReplicaSetSpec, validate as ValidateFunc<IReplicaSetSpec>);

export type {
  IReplicaSetSpec as IIoK8sApiAppsV1ReplicaSetSpec,
  ReplicaSetSpec as IoK8sApiAppsV1ReplicaSetSpec
};
