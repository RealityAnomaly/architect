import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiExtensionsV1beta1DaemonSetSpec } from "./DaemonSetSpec.ts";
import { IIoK8sApiExtensionsV1beta1DaemonSetStatus } from "./DaemonSetStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1DaemonSet.js";

/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 * @deprecated
 */
export interface IDaemonSet extends TypeMeta {
  "apiVersion": "extensions/v1beta1";
"kind": "DaemonSet";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiExtensionsV1beta1DaemonSetSpec;
/**
 * The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiExtensionsV1beta1DaemonSetStatus;
}

/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 * @deprecated
 */
export class DaemonSet extends Model<IDaemonSet> implements IDaemonSet {
  "apiVersion": IDaemonSet["apiVersion"];
"kind": IDaemonSet["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiExtensionsV1beta1DaemonSetSpec;
"status"?: IIoK8sApiExtensionsV1beta1DaemonSetStatus;

static apiVersion: IDaemonSet["apiVersion"] = "extensions/v1beta1";
static kind: IDaemonSet["kind"] = "DaemonSet";
static is = createTypeMetaGuard<IDaemonSet>(DaemonSet);

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
  IDaemonSet as IIoK8sApiExtensionsV1beta1DaemonSet,
  DaemonSet as IoK8sApiExtensionsV1beta1DaemonSet
};
