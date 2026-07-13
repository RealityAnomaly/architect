import { IIoK8sApiSchedulingV1alpha2PodGroup } from "./PodGroup.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/scheduling.k8s.io/v1alpha2/PodGroupList.js";

/**
 * PodGroupList contains a list of PodGroup resources.
 */
export interface IPodGroupList extends TypeMeta {
  "apiVersion": "scheduling.k8s.io/v1alpha2";
/**
 * Items is the list of PodGroups.
 */
"items": Array<IIoK8sApiSchedulingV1alpha2PodGroup>;
"kind": "PodGroupList";
/**
 * Standard list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodGroupList contains a list of PodGroup resources.
 */
export class PodGroupList extends Model<IPodGroupList> implements IPodGroupList {
  "apiVersion": IPodGroupList["apiVersion"];
"items": Array<IIoK8sApiSchedulingV1alpha2PodGroup>;
"kind": IPodGroupList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPodGroupList["apiVersion"] = "scheduling.k8s.io/v1alpha2";
static kind: IPodGroupList["kind"] = "PodGroupList";
static is: TypeMetaGuard<IPodGroupList> = createTypeMetaGuard<IPodGroupList>(PodGroupList);

constructor(data?: ModelData<IPodGroupList>) {
  super();

  this.setDefinedProps({
    apiVersion: PodGroupList.apiVersion,
    kind: PodGroupList.kind,
    ...data
  } as IPodGroupList);
}
}

setValidateFunc(PodGroupList, validate as ValidateFunc<IPodGroupList>);

export type {
  IPodGroupList as IIoK8sApiSchedulingV1alpha2PodGroupList,
  PodGroupList as IoK8sApiSchedulingV1alpha2PodGroupList
};
