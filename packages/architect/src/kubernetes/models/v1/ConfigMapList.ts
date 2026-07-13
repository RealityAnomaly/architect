import { IIoK8sApiCoreV1ConfigMap } from "./ConfigMap.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ConfigMapList.js";

/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 */
export interface IConfigMapList extends TypeMeta {
  "apiVersion": "v1";
/**
 * Items is the list of ConfigMaps.
 */
"items": Array<IIoK8sApiCoreV1ConfigMap>;
"kind": "ConfigMapList";
/**
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 */
export class ConfigMapList extends Model<IConfigMapList> implements IConfigMapList {
  "apiVersion": IConfigMapList["apiVersion"];
"items": Array<IIoK8sApiCoreV1ConfigMap>;
"kind": IConfigMapList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IConfigMapList["apiVersion"] = "v1";
static kind: IConfigMapList["kind"] = "ConfigMapList";
static is = createTypeMetaGuard<IConfigMapList>(ConfigMapList);

constructor(data?: ModelData<IConfigMapList>) {
  super();

  this.setDefinedProps({
    apiVersion: ConfigMapList.apiVersion,
    kind: ConfigMapList.kind,
    ...data
  } as IConfigMapList);
}
}

setValidateFunc(ConfigMapList, validate as ValidateFunc<IConfigMapList>);

export type {
  IConfigMapList as IIoK8sApiCoreV1ConfigMapList,
  ConfigMapList as IoK8sApiCoreV1ConfigMapList
};
