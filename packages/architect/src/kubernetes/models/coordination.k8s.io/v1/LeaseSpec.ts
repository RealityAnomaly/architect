import { IIoK8sApimachineryPkgApisMetaV1MicroTime } from "../../../apimachinery/apis/meta/v1/MicroTime.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiCoordinationV1LeaseSpec.js";

/**
 * LeaseSpec is a specification of a Lease.
 */
export interface ILeaseSpec {
  /**
 * acquireTime is a time when the current lease was acquired.
 */
"acquireTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
/**
 * holderIdentity contains the identity of the holder of a current lease. If Coordinated Leader Election is used, the holder identity must be equal to the elected LeaseCandidate.metadata.name field.
 */
"holderIdentity"?: string;
/**
 * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measured against the time of last observed renewTime.
 */
"leaseDurationSeconds"?: number;
/**
 * leaseTransitions is the number of transitions of a lease between holders.
 */
"leaseTransitions"?: number;
/**
 * PreferredHolder signals to a lease holder that the lease has a more optimal holder and should be given up. This field can only be set if Strategy is also set.
 */
"preferredHolder"?: string;
/**
 * renewTime is a time when the current holder of a lease has last updated the lease.
 */
"renewTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
/**
 * Strategy indicates the strategy for picking the leader for coordinated leader election. If the field is not specified, there is no active coordination for this lease. (Alpha) Using this field requires the CoordinatedLeaderElection feature gate to be enabled.
 */
"strategy"?: string;
}

/**
 * LeaseSpec is a specification of a Lease.
 */
export class LeaseSpec extends Model<ILeaseSpec> implements ILeaseSpec {
  "acquireTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
"holderIdentity"?: string;
"leaseDurationSeconds"?: number;
"leaseTransitions"?: number;
"preferredHolder"?: string;
"renewTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
"strategy"?: string;

constructor(data?: ModelData<ILeaseSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LeaseSpec, validate as ValidateFunc<ILeaseSpec>);

export type {
  ILeaseSpec as IIoK8sApiCoordinationV1LeaseSpec,
  LeaseSpec as IoK8sApiCoordinationV1LeaseSpec
};
