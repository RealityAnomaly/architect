import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAppsV1beta2StatefulSetSpec } from "./StatefulSetSpec.ts";
import { IIoK8sApiAppsV1beta2StatefulSetStatus } from "./StatefulSetStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1beta2/StatefulSet.js";

/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 * @deprecated
 */
export interface IStatefulSet extends TypeMeta {
  "apiVersion": "apps/v1beta2";
"kind": "StatefulSet";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the desired identities of pods in this set.
 */
"spec"?: IIoK8sApiAppsV1beta2StatefulSetSpec;
/**
 * Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.
 */
"status"?: IIoK8sApiAppsV1beta2StatefulSetStatus;
}

/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 * @deprecated
 */
export class StatefulSet extends Model<IStatefulSet> implements IStatefulSet {
  "apiVersion": IStatefulSet["apiVersion"];
"kind": IStatefulSet["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAppsV1beta2StatefulSetSpec;
"status"?: IIoK8sApiAppsV1beta2StatefulSetStatus;

static apiVersion: IStatefulSet["apiVersion"] = "apps/v1beta2";
static kind: IStatefulSet["kind"] = "StatefulSet";
static is: TypeMetaGuard<IStatefulSet> = createTypeMetaGuard<IStatefulSet>(StatefulSet);

constructor(data?: ModelData<IStatefulSet>) {
  super();

  this.setDefinedProps({
    apiVersion: StatefulSet.apiVersion,
    kind: StatefulSet.kind,
    ...data
  } as IStatefulSet);
}
}

setValidateFunc(StatefulSet, validate as ValidateFunc<IStatefulSet>);

export type {
  IStatefulSet as IIoK8sApiAppsV1beta2StatefulSet,
  StatefulSet as IoK8sApiAppsV1beta2StatefulSet
};
