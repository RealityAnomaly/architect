import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/FileKeySelector.js";

/**
 * FileKeySelector selects a key of the env file.
 */
export interface IFileKeySelector {
  /**
 * The key within the env file. An invalid key will prevent the pod from starting. The keys defined within a source may consist of any printable ASCII characters except '='. During Alpha stage of the EnvFiles feature gate, the key size is limited to 128 characters.
 */
"key": string;
/**
 * Specify whether the file or its key must be defined. If the file or key does not exist, then the env var is not published. If optional is set to true and the specified key does not exist, the environment variable will not be set in the Pod's containers.
 * 
 * If optional is set to false and the specified key does not exist, an error will be returned during Pod creation.
 */
"optional"?: boolean;
/**
 * The path within the volume from which to select the file. Must be relative and may not contain the '..' path or start with '..'.
 */
"path": string;
/**
 * The name of the volume mount containing the env file.
 */
"volumeName": string;
}

/**
 * FileKeySelector selects a key of the env file.
 */
export class FileKeySelector extends Model<IFileKeySelector> implements IFileKeySelector {
  "key": string;
"optional"?: boolean;
"path": string;
"volumeName": string;

constructor(data?: ModelData<IFileKeySelector>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(FileKeySelector, validate as ValidateFunc<IFileKeySelector>);

export type {
  IFileKeySelector as IIoK8sApiCoreV1FileKeySelector,
  FileKeySelector as IoK8sApiCoreV1FileKeySelector
};
