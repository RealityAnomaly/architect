import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAppsV1DaemonSetSpec } from "./DaemonSetSpec.ts";
import { IIoK8sApiAppsV1DaemonSetStatus } from "./DaemonSetStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1/DaemonSet.js";

/**
 * DaemonSet represents the configuration of a daemon set.
 */
export interface IDaemonSet extends TypeMeta {
  "apiVersion": "apps/v1";
"kind": "DaemonSet";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiAppsV1DaemonSetSpec;
/**
 * The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiAppsV1DaemonSetStatus;
}

/**
 * DaemonSet represents the configuration of a daemon set.
 */
export class DaemonSet extends Model<IDaemonSet> implements IDaemonSet {
  "apiVersion": IDaemonSet["apiVersion"];
"kind": IDaemonSet["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAppsV1DaemonSetSpec;
"status"?: IIoK8sApiAppsV1DaemonSetStatus;

static apiVersion: IDaemonSet["apiVersion"] = "apps/v1";
static kind: IDaemonSet["kind"] = "DaemonSet";
static is: TypeMetaGuard<IDaemonSet> = createTypeMetaGuard<IDaemonSet>(DaemonSet);

constructor(data?: ModelData<IDaemonSet>) {
  super();

  this.setDefinedProps({
    apiVersion: DaemonSet.apiVersion,
    kind: DaemonSet.kind,
    ...data
  } as IDaemonSet);
}
}

setValidateFunc(DaemonSet, validate as ValidateFunc<IDaemonSet>);

export type {
  IDaemonSet as IIoK8sApiAppsV1DaemonSet,
  DaemonSet as IoK8sApiAppsV1DaemonSet
};
