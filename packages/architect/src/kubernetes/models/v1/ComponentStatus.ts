import { IIoK8sApiCoreV1ComponentCondition } from "./ComponentCondition.ts";
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ComponentStatus.js";

/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+
 * @deprecated
 */
export interface IComponentStatus extends TypeMeta {
  "apiVersion": "v1";
/**
 * List of component conditions observed
 */
"conditions"?: Array<IIoK8sApiCoreV1ComponentCondition>;
"kind": "ComponentStatus";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
}

/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+
 * @deprecated
 */
export class ComponentStatus extends Model<IComponentStatus> implements IComponentStatus {
  "apiVersion": IComponentStatus["apiVersion"];
"conditions"?: Array<IIoK8sApiCoreV1ComponentCondition>;
"kind": IComponentStatus["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

static apiVersion: IComponentStatus["apiVersion"] = "v1";
static kind: IComponentStatus["kind"] = "ComponentStatus";
static is = createTypeMetaGuard<IComponentStatus>(ComponentStatus);

constructor(data?: ModelData<IComponentStatus>) {
  super();

  this.setDefinedProps({
    apiVersion: ComponentStatus.apiVersion,
    kind: ComponentStatus.kind,
    ...data
  } as IComponentStatus);
}
}

setValidateFunc(ComponentStatus, validate as ValidateFunc<IComponentStatus>);

export type {
  IComponentStatus as IIoK8sApiCoreV1ComponentStatus,
  ComponentStatus as IoK8sApiCoreV1ComponentStatus
};
