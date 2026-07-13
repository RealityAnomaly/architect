import { IIoK8sApimachineryPkgApisMetaV1MicroTime } from "../../../apimachinery/apis/meta/v1/MicroTime.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/coordination.k8s.io/v1alpha2/LeaseCandidateSpec.js";

/**
 * LeaseCandidateSpec is a specification of a Lease.
 */
export interface ILeaseCandidateSpec {
  /**
 * BinaryVersion is the binary version. It must be in a semver format without leading `v`. This field is required.
 */
"binaryVersion": string;
/**
 * EmulationVersion is the emulation version. It must be in a semver format without leading `v`. EmulationVersion must be less than or equal to BinaryVersion. This field is required when strategy is "OldestEmulationVersion"
 */
"emulationVersion"?: string;
/**
 * LeaseName is the name of the lease for which this candidate is contending. This field is immutable.
 */
"leaseName": string;
/**
 * PingTime is the last time that the server has requested the LeaseCandidate to renew. It is only done during leader election to check if any LeaseCandidates have become ineligible. When PingTime is updated, the LeaseCandidate will respond by updating RenewTime.
 */
"pingTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
/**
 * RenewTime is the time that the LeaseCandidate was last updated. Any time a Lease needs to do leader election, the PingTime field is updated to signal to the LeaseCandidate that they should update the RenewTime. Old LeaseCandidate objects are also garbage collected if it has been hours since the last renew. The PingTime field is updated regularly to prevent garbage collection for still active LeaseCandidates.
 */
"renewTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
/**
 * Strategy is the strategy that coordinated leader election will use for picking the leader. If multiple candidates for the same Lease return different strategies, the strategy provided by the candidate with the latest BinaryVersion will be used. If there is still conflict, this is a user error and coordinated leader election will not operate the Lease until resolved.
 */
"strategy": string;
}

/**
 * LeaseCandidateSpec is a specification of a Lease.
 */
export class LeaseCandidateSpec extends Model<ILeaseCandidateSpec> implements ILeaseCandidateSpec {
  "binaryVersion": string;
"emulationVersion"?: string;
"leaseName": string;
"pingTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
"renewTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
"strategy": string;

constructor(data?: ModelData<ILeaseCandidateSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LeaseCandidateSpec, validate as ValidateFunc<ILeaseCandidateSpec>);

export type {
  ILeaseCandidateSpec as IIoK8sApiCoordinationV1alpha2LeaseCandidateSpec,
  LeaseCandidateSpec as IoK8sApiCoordinationV1alpha2LeaseCandidateSpec
};
