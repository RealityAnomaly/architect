import { IIoK8sApiSettingsV1alpha1PodPreset } from "./PodPreset.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/settings.k8s.io/v1alpha1/PodPresetList.js";

/**
 * PodPresetList is a list of PodPreset objects.
 */
export interface IPodPresetList extends TypeMeta {
  "apiVersion": "settings.k8s.io/v1alpha1";
/**
 * Items is a list of schema objects.
 */
"items": Array<IIoK8sApiSettingsV1alpha1PodPreset>;
"kind": "PodPresetList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodPresetList is a list of PodPreset objects.
 */
export class PodPresetList extends Model<IPodPresetList> implements IPodPresetList {
  "apiVersion": IPodPresetList["apiVersion"];
"items": Array<IIoK8sApiSettingsV1alpha1PodPreset>;
"kind": IPodPresetList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPodPresetList["apiVersion"] = "settings.k8s.io/v1alpha1";
static kind: IPodPresetList["kind"] = "PodPresetList";
static is: TypeMetaGuard<IPodPresetList> = createTypeMetaGuard<IPodPresetList>(PodPresetList);

constructor(data?: ModelData<IPodPresetList>) {
  super();

  this.setDefinedProps({
    apiVersion: PodPresetList.apiVersion,
    kind: PodPresetList.kind,
    ...data
  } as IPodPresetList);
}
}

setValidateFunc(PodPresetList, validate as ValidateFunc<IPodPresetList>);

export type {
  IPodPresetList as IIoK8sApiSettingsV1alpha1PodPresetList,
  PodPresetList as IoK8sApiSettingsV1alpha1PodPresetList
};
