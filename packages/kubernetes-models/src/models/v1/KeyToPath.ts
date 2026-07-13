import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/KeyToPath.js";

/**
 * Maps a string key to a path within a volume.
 */
export interface IKeyToPath {
  /**
 * key is the key to project.
 */
"key": string;
/**
 * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
 */
"mode"?: number;
/**
 * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
 */
"path": string;
}

/**
 * Maps a string key to a path within a volume.
 */
export class KeyToPath extends Model<IKeyToPath> implements IKeyToPath {
  "key": string;
"mode"?: number;
"path": string;

constructor(data?: ModelData<IKeyToPath>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(KeyToPath, validate as ValidateFunc<IKeyToPath>);

export type {
  IKeyToPath as IIoK8sApiCoreV1KeyToPath,
  KeyToPath as IoK8sApiCoreV1KeyToPath
};
