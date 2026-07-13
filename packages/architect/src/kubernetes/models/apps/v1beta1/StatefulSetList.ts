import { IIoK8sApiAppsV1beta1StatefulSet } from "./StatefulSet.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta1StatefulSetList.js";

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export interface IStatefulSetList extends TypeMeta {
  "apiVersion": "apps/v1beta1";
"items": Array<IIoK8sApiAppsV1beta1StatefulSet>;
"kind": "StatefulSetList";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export class StatefulSetList extends Model<IStatefulSetList> implements IStatefulSetList {
  "apiVersion": IStatefulSetList["apiVersion"];
"items": Array<IIoK8sApiAppsV1beta1StatefulSet>;
"kind": IStatefulSetList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IStatefulSetList["apiVersion"] = "apps/v1beta1";
static kind: IStatefulSetList["kind"] = "StatefulSetList";
static is = createTypeMetaGuard<IStatefulSetList>(StatefulSetList);

constructor(data?: ModelData<IStatefulSetList>) {
  super();

  this.setDefinedProps({
    apiVersion: StatefulSetList.apiVersion,
    kind: StatefulSetList.kind,
    ...data
  } as IStatefulSetList);
}
}

setValidateFunc(StatefulSetList, validate as ValidateFunc<IStatefulSetList>);

export type {
  IStatefulSetList as IIoK8sApiAppsV1beta1StatefulSetList,
  StatefulSetList as IoK8sApiAppsV1beta1StatefulSetList
};
