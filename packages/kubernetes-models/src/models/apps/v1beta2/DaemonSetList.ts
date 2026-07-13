import { IIoK8sApiAppsV1beta2DaemonSet } from "./DaemonSet.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1beta2/DaemonSetList.js";

/**
 * DaemonSetList is a collection of daemon sets.
 */
export interface IDaemonSetList extends TypeMeta {
  "apiVersion": "apps/v1beta2";
/**
 * A list of daemon sets.
 */
"items": Array<IIoK8sApiAppsV1beta2DaemonSet>;
"kind": "DaemonSetList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * DaemonSetList is a collection of daemon sets.
 */
export class DaemonSetList extends Model<IDaemonSetList> implements IDaemonSetList {
  "apiVersion": IDaemonSetList["apiVersion"];
"items": Array<IIoK8sApiAppsV1beta2DaemonSet>;
"kind": IDaemonSetList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IDaemonSetList["apiVersion"] = "apps/v1beta2";
static kind: IDaemonSetList["kind"] = "DaemonSetList";
static is: TypeMetaGuard<IDaemonSetList> = createTypeMetaGuard<IDaemonSetList>(DaemonSetList);

constructor(data?: ModelData<IDaemonSetList>) {
  super();

  this.setDefinedProps({
    apiVersion: DaemonSetList.apiVersion,
    kind: DaemonSetList.kind,
    ...data
  } as IDaemonSetList);
}
}

setValidateFunc(DaemonSetList, validate as ValidateFunc<IDaemonSetList>);

export type {
  IDaemonSetList as IIoK8sApiAppsV1beta2DaemonSetList,
  DaemonSetList as IoK8sApiAppsV1beta2DaemonSetList
};
