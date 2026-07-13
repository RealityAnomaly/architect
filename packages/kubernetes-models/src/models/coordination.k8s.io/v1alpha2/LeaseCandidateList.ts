import { IIoK8sApiCoordinationV1alpha2LeaseCandidate } from "./LeaseCandidate.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/coordination.k8s.io/v1alpha2/LeaseCandidateList.js";

/**
 * LeaseCandidateList is a list of Lease objects.
 */
export interface ILeaseCandidateList extends TypeMeta {
  "apiVersion": "coordination.k8s.io/v1alpha2";
/**
 * items is a list of schema objects.
 */
"items": Array<IIoK8sApiCoordinationV1alpha2LeaseCandidate>;
"kind": "LeaseCandidateList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * LeaseCandidateList is a list of Lease objects.
 */
export class LeaseCandidateList extends Model<ILeaseCandidateList> implements ILeaseCandidateList {
  "apiVersion": ILeaseCandidateList["apiVersion"];
"items": Array<IIoK8sApiCoordinationV1alpha2LeaseCandidate>;
"kind": ILeaseCandidateList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ILeaseCandidateList["apiVersion"] = "coordination.k8s.io/v1alpha2";
static kind: ILeaseCandidateList["kind"] = "LeaseCandidateList";
static is: TypeMetaGuard<ILeaseCandidateList> = createTypeMetaGuard<ILeaseCandidateList>(LeaseCandidateList);

constructor(data?: ModelData<ILeaseCandidateList>) {
  super();

  this.setDefinedProps({
    apiVersion: LeaseCandidateList.apiVersion,
    kind: LeaseCandidateList.kind,
    ...data
  } as ILeaseCandidateList);
}
}

setValidateFunc(LeaseCandidateList, validate as ValidateFunc<ILeaseCandidateList>);

export type {
  ILeaseCandidateList as IIoK8sApiCoordinationV1alpha2LeaseCandidateList,
  LeaseCandidateList as IoK8sApiCoordinationV1alpha2LeaseCandidateList
};
