import { IIoK8sApiCoreV1EnvVar } from "../../v1/EnvVar.ts";
import { IIoK8sApiCoreV1EnvFromSource } from "../../v1/EnvFromSource.ts";
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { IIoK8sApiCoreV1VolumeMount } from "../../v1/VolumeMount.ts";
import { IIoK8sApiCoreV1Volume } from "../../v1/Volume.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/settings.k8s.io/v1alpha1/PodPresetSpec.js";

/**
 * PodPresetSpec is a description of a pod preset.
 */
export interface IPodPresetSpec {
  /**
 * Env defines the collection of EnvVar to inject into containers.
 */
"env"?: Array<IIoK8sApiCoreV1EnvVar>;
/**
 * EnvFrom defines the collection of EnvFromSource to inject into containers.
 */
"envFrom"?: Array<IIoK8sApiCoreV1EnvFromSource>;
/**
 * Selector is a label query over a set of resources, in this case pods. Required.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * VolumeMounts defines the collection of VolumeMount to inject into containers.
 */
"volumeMounts"?: Array<IIoK8sApiCoreV1VolumeMount>;
/**
 * Volumes defines the collection of Volume to inject into the pod.
 */
"volumes"?: Array<IIoK8sApiCoreV1Volume>;
}

/**
 * PodPresetSpec is a description of a pod preset.
 */
export class PodPresetSpec extends Model<IPodPresetSpec> implements IPodPresetSpec {
  "env"?: Array<IIoK8sApiCoreV1EnvVar>;
"envFrom"?: Array<IIoK8sApiCoreV1EnvFromSource>;
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
"volumeMounts"?: Array<IIoK8sApiCoreV1VolumeMount>;
"volumes"?: Array<IIoK8sApiCoreV1Volume>;

constructor(data?: ModelData<IPodPresetSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodPresetSpec, validate as ValidateFunc<IPodPresetSpec>);

export type {
  IPodPresetSpec as IIoK8sApiSettingsV1alpha1PodPresetSpec,
  PodPresetSpec as IoK8sApiSettingsV1alpha1PodPresetSpec
};
