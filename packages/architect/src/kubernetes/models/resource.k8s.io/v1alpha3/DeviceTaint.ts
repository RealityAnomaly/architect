import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha3DeviceTaint.js";

/**
 * The device this taint is attached to has the "effect" on any claim which does not tolerate the taint and, through the claim, to pods using the claim.
 */
export interface IDeviceTaint {
  /**
 * The effect of the taint on claims that do not tolerate the taint and through such claims on the pods using them.
 * 
 * Valid effects are None, NoSchedule and NoExecute. PreferNoSchedule as used for nodes is not valid here. More effects may get added in the future. Consumers must treat unknown effects like None.
 */
"effect": string;
/**
 * The taint key to be applied to a device. Must be a label name.
 */
"key": string;
/**
 * TimeAdded represents the time at which the taint was added or (only in a DeviceTaintRule) the effect was modified. Added automatically during create or update if not set.
 * 
 * In addition, in a DeviceTaintRule a value provided during an update gets replaced with the current time if the provided value is the same as the old one and the new effect is different. Changing the key and/or value while keeping the effect unchanged is possible and does not update the time stamp because the eviction which uses it is either already started (NoExecute) or not started yet (NoEffect, NoSchedule).
 */
"timeAdded"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * The taint value corresponding to the taint key. Must be a label value.
 */
"value"?: string;
}

/**
 * The device this taint is attached to has the "effect" on any claim which does not tolerate the taint and, through the claim, to pods using the claim.
 */
export class DeviceTaint extends Model<IDeviceTaint> implements IDeviceTaint {
  "effect": string;
"key": string;
"timeAdded"?: IIoK8sApimachineryPkgApisMetaV1Time;
"value"?: string;

constructor(data?: ModelData<IDeviceTaint>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceTaint, validate as ValidateFunc<IDeviceTaint>);

export type {
  IDeviceTaint as IIoK8sApiResourceV1alpha3DeviceTaint,
  DeviceTaint as IoK8sApiResourceV1alpha3DeviceTaint
};
