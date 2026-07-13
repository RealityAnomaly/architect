import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoreV1PersistentVolumeClaimSpec } from "./PersistentVolumeClaimSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PersistentVolumeClaimTemplate.js";

/**
 * PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
 */
export interface IPersistentVolumeClaimTemplate {
  /**
 * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
 */
"spec": IIoK8sApiCoreV1PersistentVolumeClaimSpec;
}

/**
 * PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
 */
export class PersistentVolumeClaimTemplate extends Model<IPersistentVolumeClaimTemplate> implements IPersistentVolumeClaimTemplate {
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiCoreV1PersistentVolumeClaimSpec;

constructor(data?: ModelData<IPersistentVolumeClaimTemplate>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PersistentVolumeClaimTemplate, validate as ValidateFunc<IPersistentVolumeClaimTemplate>);

export type {
  IPersistentVolumeClaimTemplate as IIoK8sApiCoreV1PersistentVolumeClaimTemplate,
  PersistentVolumeClaimTemplate as IoK8sApiCoreV1PersistentVolumeClaimTemplate
};
