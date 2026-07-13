import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/WindowsSecurityContextOptions.js";

/**
 * WindowsSecurityContextOptions contain Windows-specific options and credentials.
 */
export interface IWindowsSecurityContextOptions {
  /**
 * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
 */
"gmsaCredentialSpec"?: string;
/**
 * GMSACredentialSpecName is the name of the GMSA credential spec to use.
 */
"gmsaCredentialSpecName"?: string;
/**
 * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
 */
"hostProcess"?: boolean;
/**
 * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
 */
"runAsUserName"?: string;
}

/**
 * WindowsSecurityContextOptions contain Windows-specific options and credentials.
 */
export class WindowsSecurityContextOptions extends Model<IWindowsSecurityContextOptions> implements IWindowsSecurityContextOptions {
  "gmsaCredentialSpec"?: string;
"gmsaCredentialSpecName"?: string;
"hostProcess"?: boolean;
"runAsUserName"?: string;

constructor(data?: ModelData<IWindowsSecurityContextOptions>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(WindowsSecurityContextOptions, validate as ValidateFunc<IWindowsSecurityContextOptions>);

export type {
  IWindowsSecurityContextOptions as IIoK8sApiCoreV1WindowsSecurityContextOptions,
  WindowsSecurityContextOptions as IoK8sApiCoreV1WindowsSecurityContextOptions
};
