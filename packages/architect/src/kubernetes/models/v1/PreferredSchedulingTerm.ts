import { IIoK8sApiCoreV1NodeSelectorTerm } from "./NodeSelectorTerm.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PreferredSchedulingTerm.js";

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
export interface IPreferredSchedulingTerm {
  /**
 * A node selector term, associated with the corresponding weight.
 */
"preference": IIoK8sApiCoreV1NodeSelectorTerm;
/**
 * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
 */
"weight": number;
}

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
export class PreferredSchedulingTerm extends Model<IPreferredSchedulingTerm> implements IPreferredSchedulingTerm {
  "preference": IIoK8sApiCoreV1NodeSelectorTerm;
"weight": number;

constructor(data?: ModelData<IPreferredSchedulingTerm>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PreferredSchedulingTerm, validate as ValidateFunc<IPreferredSchedulingTerm>);

export type {
  IPreferredSchedulingTerm as IIoK8sApiCoreV1PreferredSchedulingTerm,
  PreferredSchedulingTerm as IoK8sApiCoreV1PreferredSchedulingTerm
};
