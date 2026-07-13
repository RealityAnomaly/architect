import { IIoK8sApiCoordinationV1beta1Lease } from "./Lease.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiCoordinationV1beta1LeaseList.js";

/**
 * LeaseList is a list of Lease objects.
 */
export interface ILeaseList extends TypeMeta {
  "apiVersion": "coordination.k8s.io/v1beta1";
/**
 * Items is a list of schema objects.
 */
"items": Array<IIoK8sApiCoordinationV1beta1Lease>;
"kind": "LeaseList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * LeaseList is a list of Lease objects.
 */
export class LeaseList extends Model<ILeaseList> implements ILeaseList {
  "apiVersion": ILeaseList["apiVersion"];
"items": Array<IIoK8sApiCoordinationV1beta1Lease>;
"kind": ILeaseList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ILeaseList["apiVersion"] = "coordination.k8s.io/v1beta1";
static kind: ILeaseList["kind"] = "LeaseList";
static is = createTypeMetaGuard<ILeaseList>(LeaseList);

constructor(data?: ModelData<ILeaseList>) {
  super();

  this.setDefinedProps({
    apiVersion: LeaseList.apiVersion,
    kind: LeaseList.kind,
    ...data
  } as ILeaseList);
}
}

setValidateFunc(LeaseList, validate as ValidateFunc<ILeaseList>);

export type {
  ILeaseList as IIoK8sApiCoordinationV1beta1LeaseList,
  LeaseList as IoK8sApiCoordinationV1beta1LeaseList
};
