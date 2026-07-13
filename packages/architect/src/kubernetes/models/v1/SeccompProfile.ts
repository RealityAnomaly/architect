import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1SeccompProfile.js";

/**
 * SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set.
 */
export interface ISeccompProfile {
  /**
 * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is "Localhost". Must NOT be set for any other type.
 */
"localhostProfile"?: string;
/**
 * type indicates which kind of seccomp profile will be applied. Valid options are:
 * 
 * Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
 */
"type": string;
}

/**
 * SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set.
 */
export class SeccompProfile extends Model<ISeccompProfile> implements ISeccompProfile {
  "localhostProfile"?: string;
"type": string;

constructor(data?: ModelData<ISeccompProfile>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SeccompProfile, validate as ValidateFunc<ISeccompProfile>);

export type {
  ISeccompProfile as IIoK8sApiCoreV1SeccompProfile,
  SeccompProfile as IoK8sApiCoreV1SeccompProfile
};
