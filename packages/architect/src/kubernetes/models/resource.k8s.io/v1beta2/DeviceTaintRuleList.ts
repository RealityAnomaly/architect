import { IIoK8sApiResourceV1beta2DeviceTaintRule } from "./DeviceTaintRule.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1beta2DeviceTaintRuleList.js";

/**
 * DeviceTaintRuleList is a collection of DeviceTaintRules.
 */
export interface IDeviceTaintRuleList extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1beta2";
/**
 * Items is the list of DeviceTaintRules.
 */
"items": Array<IIoK8sApiResourceV1beta2DeviceTaintRule>;
"kind": "DeviceTaintRuleList";
/**
 * Standard list metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * DeviceTaintRuleList is a collection of DeviceTaintRules.
 */
export class DeviceTaintRuleList extends Model<IDeviceTaintRuleList> implements IDeviceTaintRuleList {
  "apiVersion": IDeviceTaintRuleList["apiVersion"];
"items": Array<IIoK8sApiResourceV1beta2DeviceTaintRule>;
"kind": IDeviceTaintRuleList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IDeviceTaintRuleList["apiVersion"] = "resource.k8s.io/v1beta2";
static kind: IDeviceTaintRuleList["kind"] = "DeviceTaintRuleList";
static is = createTypeMetaGuard<IDeviceTaintRuleList>(DeviceTaintRuleList);

constructor(data?: ModelData<IDeviceTaintRuleList>) {
  super();

  this.setDefinedProps({
    apiVersion: DeviceTaintRuleList.apiVersion,
    kind: DeviceTaintRuleList.kind,
    ...data
  } as IDeviceTaintRuleList);
}
}

setValidateFunc(DeviceTaintRuleList, validate as ValidateFunc<IDeviceTaintRuleList>);

export type {
  IDeviceTaintRuleList as IIoK8sApiResourceV1beta2DeviceTaintRuleList,
  DeviceTaintRuleList as IoK8sApiResourceV1beta2DeviceTaintRuleList
};
