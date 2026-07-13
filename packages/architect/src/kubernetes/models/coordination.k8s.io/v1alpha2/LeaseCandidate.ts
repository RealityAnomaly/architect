import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoordinationV1alpha2LeaseCandidateSpec } from "./LeaseCandidateSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiCoordinationV1alpha2LeaseCandidate.js";

/**
 * LeaseCandidate defines a candidate for a Lease object. Candidates are created such that coordinated leader election will pick the best leader from the list of candidates.
 */
export interface ILeaseCandidate extends TypeMeta {
  "apiVersion": "coordination.k8s.io/v1alpha2";
"kind": "LeaseCandidate";
/**
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec contains the specification of the Lease. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec": IIoK8sApiCoordinationV1alpha2LeaseCandidateSpec;
}

/**
 * LeaseCandidate defines a candidate for a Lease object. Candidates are created such that coordinated leader election will pick the best leader from the list of candidates.
 */
export class LeaseCandidate extends Model<ILeaseCandidate> implements ILeaseCandidate {
  "apiVersion": ILeaseCandidate["apiVersion"];
"kind": ILeaseCandidate["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiCoordinationV1alpha2LeaseCandidateSpec;

static apiVersion: ILeaseCandidate["apiVersion"] = "coordination.k8s.io/v1alpha2";
static kind: ILeaseCandidate["kind"] = "LeaseCandidate";
static is = createTypeMetaGuard<ILeaseCandidate>(LeaseCandidate);

constructor(data?: ModelData<ILeaseCandidate>) {
  super();

  this.setDefinedProps({
    apiVersion: LeaseCandidate.apiVersion,
    kind: LeaseCandidate.kind,
    ...data
  } as ILeaseCandidate);
}
}

setValidateFunc(LeaseCandidate, validate as ValidateFunc<ILeaseCandidate>);

export type {
  ILeaseCandidate as IIoK8sApiCoordinationV1alpha2LeaseCandidate,
  LeaseCandidate as IoK8sApiCoordinationV1alpha2LeaseCandidate
};
