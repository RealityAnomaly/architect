import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ConfigMap.js";

/**
 * ConfigMap holds configuration data for pods to consume.
 */
export interface IConfigMap extends TypeMeta {
  "apiVersion": "v1";
/**
 * BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet.
 */
"binaryData"?: {
  [key: string]: string;
};
/**
 * Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process.
 */
"data"?: {
  [key: string]: string;
};
/**
 * Immutable, if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.
 */
"immutable"?: boolean;
"kind": "ConfigMap";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
}

/**
 * ConfigMap holds configuration data for pods to consume.
 */
export class ConfigMap extends Model<IConfigMap> implements IConfigMap {
  "apiVersion": IConfigMap["apiVersion"];
"binaryData"?: {
  [key: string]: string;
};
"data"?: {
  [key: string]: string;
};
"immutable"?: boolean;
"kind": IConfigMap["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

static apiVersion: IConfigMap["apiVersion"] = "v1";
static kind: IConfigMap["kind"] = "ConfigMap";
static is: TypeMetaGuard<IConfigMap> = createTypeMetaGuard<IConfigMap>(ConfigMap);

constructor(data?: ModelData<IConfigMap>) {
  super();

  this.setDefinedProps({
    apiVersion: ConfigMap.apiVersion,
    kind: ConfigMap.kind,
    ...data
  } as IConfigMap);
}
}

setValidateFunc(ConfigMap, validate as ValidateFunc<IConfigMap>);

export type {
  IConfigMap as IIoK8sApiCoreV1ConfigMap,
  ConfigMap as IoK8sApiCoreV1ConfigMap
};
