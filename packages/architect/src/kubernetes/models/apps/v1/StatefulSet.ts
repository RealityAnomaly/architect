import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAppsV1StatefulSetSpec } from "./StatefulSetSpec.ts";
import { IIoK8sApiAppsV1StatefulSetStatus } from "./StatefulSetStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1StatefulSet.js";

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *   - Network: A single stable DNS and hostname.
 *   - Storage: As many VolumeClaims as requested.
 * 
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export interface IStatefulSet extends TypeMeta {
  "apiVersion": "apps/v1";
"kind": "StatefulSet";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the desired identities of pods in this set.
 */
"spec"?: IIoK8sApiAppsV1StatefulSetSpec;
/**
 * Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.
 */
"status"?: IIoK8sApiAppsV1StatefulSetStatus;
}

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *   - Network: A single stable DNS and hostname.
 *   - Storage: As many VolumeClaims as requested.
 * 
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export class StatefulSet extends Model<IStatefulSet> implements IStatefulSet {
  "apiVersion": IStatefulSet["apiVersion"];
"kind": IStatefulSet["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAppsV1StatefulSetSpec;
"status"?: IIoK8sApiAppsV1StatefulSetStatus;

static apiVersion: IStatefulSet["apiVersion"] = "apps/v1";
static kind: IStatefulSet["kind"] = "StatefulSet";
static is = createTypeMetaGuard<IStatefulSet>(StatefulSet);

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
  IStatefulSet as IIoK8sApiAppsV1StatefulSet,
  StatefulSet as IoK8sApiAppsV1StatefulSet
};
