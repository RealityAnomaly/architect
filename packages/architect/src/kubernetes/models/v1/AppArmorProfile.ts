import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1AppArmorProfile.js";

/**
 * AppArmorProfile defines a pod or container's AppArmor settings.
 */
export interface IAppArmorProfile {
  /**
 * localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is "Localhost".
 */
"localhostProfile"?: string;
/**
 * type indicates which kind of AppArmor profile will be applied. Valid options are:
 *   Localhost - a profile pre-loaded on the node.
 *   RuntimeDefault - the container runtime's default profile.
 *   Unconfined - no AppArmor enforcement.
 */
"type": string;
}

/**
 * AppArmorProfile defines a pod or container's AppArmor settings.
 */
export class AppArmorProfile extends Model<IAppArmorProfile> implements IAppArmorProfile {
  "localhostProfile"?: string;
"type": string;

constructor(data?: ModelData<IAppArmorProfile>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AppArmorProfile, validate as ValidateFunc<IAppArmorProfile>);

export type {
  IAppArmorProfile as IIoK8sApiCoreV1AppArmorProfile,
  AppArmorProfile as IoK8sApiCoreV1AppArmorProfile
};
