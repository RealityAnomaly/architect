import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiSettingsV1alpha1PodPresetSpec } from "./PodPresetSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/settings.k8s.io/v1alpha1/PodPreset.js";

/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 */
export interface IPodPreset extends TypeMeta {
  "apiVersion": "settings.k8s.io/v1alpha1";
"kind": "PodPreset";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiSettingsV1alpha1PodPresetSpec;
}

/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 */
export class PodPreset extends Model<IPodPreset> implements IPodPreset {
  "apiVersion": IPodPreset["apiVersion"];
"kind": IPodPreset["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiSettingsV1alpha1PodPresetSpec;

static apiVersion: IPodPreset["apiVersion"] = "settings.k8s.io/v1alpha1";
static kind: IPodPreset["kind"] = "PodPreset";
static is: TypeMetaGuard<IPodPreset> = createTypeMetaGuard<IPodPreset>(PodPreset);

constructor(data?: ModelData<IPodPreset>) {
  super();

  this.setDefinedProps({
    apiVersion: PodPreset.apiVersion,
    kind: PodPreset.kind,
    ...data
  } as IPodPreset);
}
}

setValidateFunc(PodPreset, validate as ValidateFunc<IPodPreset>);

export type {
  IPodPreset as IIoK8sApiSettingsV1alpha1PodPreset,
  PodPreset as IoK8sApiSettingsV1alpha1PodPreset
};
