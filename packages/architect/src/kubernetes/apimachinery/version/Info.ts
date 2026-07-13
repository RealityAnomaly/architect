import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApimachineryPkgVersionInfo.js";

/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
export interface IInfo {
  "buildDate": string;
"compiler": string;
/**
 * EmulationMajor is the major version of the emulation version
 */
"emulationMajor"?: string;
/**
 * EmulationMinor is the minor version of the emulation version
 */
"emulationMinor"?: string;
"gitCommit": string;
"gitTreeState": string;
"gitVersion": string;
"goVersion": string;
/**
 * Major is the major version of the binary version
 */
"major": string;
/**
 * MinCompatibilityMajor is the major version of the minimum compatibility version
 */
"minCompatibilityMajor"?: string;
/**
 * MinCompatibilityMinor is the minor version of the minimum compatibility version
 */
"minCompatibilityMinor"?: string;
/**
 * Minor is the minor version of the binary version
 */
"minor": string;
"platform": string;
}

/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
export class Info extends Model<IInfo> implements IInfo {
  "buildDate": string;
"compiler": string;
"emulationMajor"?: string;
"emulationMinor"?: string;
"gitCommit": string;
"gitTreeState": string;
"gitVersion": string;
"goVersion": string;
"major": string;
"minCompatibilityMajor"?: string;
"minCompatibilityMinor"?: string;
"minor": string;
"platform": string;

constructor(data?: ModelData<IInfo>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Info, validate as ValidateFunc<IInfo>);

export type {
  IInfo as IIoK8sApimachineryPkgVersionInfo,
  Info as IoK8sApimachineryPkgVersionInfo
};
