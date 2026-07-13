import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1StatefulSetOrdinals.js";

/**
 * StatefulSetOrdinals describes the policy used for replica ordinal assignment in this StatefulSet.
 */
export interface IStatefulSetOrdinals {
  /**
 * start is the number representing the first replica's index. It may be used to number replicas from an alternate index (eg: 1-indexed) over the default 0-indexed names, or to orchestrate progressive movement of replicas from one StatefulSet to another. If set, replica indices will be in the range:
 *   [.spec.ordinals.start, .spec.ordinals.start + .spec.replicas).
 * If unset, defaults to 0. Replica indices will be in the range:
 *   [0, .spec.replicas).
 */
"start"?: number;
}

/**
 * StatefulSetOrdinals describes the policy used for replica ordinal assignment in this StatefulSet.
 */
export class StatefulSetOrdinals extends Model<IStatefulSetOrdinals> implements IStatefulSetOrdinals {
  "start"?: number;

constructor(data?: ModelData<IStatefulSetOrdinals>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(StatefulSetOrdinals, validate as ValidateFunc<IStatefulSetOrdinals>);

export type {
  IStatefulSetOrdinals as IIoK8sApiAppsV1StatefulSetOrdinals,
  StatefulSetOrdinals as IoK8sApiAppsV1StatefulSetOrdinals
};
