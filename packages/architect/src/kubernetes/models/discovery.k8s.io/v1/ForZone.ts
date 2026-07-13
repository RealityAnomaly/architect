import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiDiscoveryV1ForZone.js";

/**
 * ForZone provides information about which zones should consume this endpoint.
 */
export interface IForZone {
  /**
 * name represents the name of the zone.
 */
"name": string;
}

/**
 * ForZone provides information about which zones should consume this endpoint.
 */
export class ForZone extends Model<IForZone> implements IForZone {
  "name": string;

constructor(data?: ModelData<IForZone>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ForZone, validate as ValidateFunc<IForZone>);

export type {
  IForZone as IIoK8sApiDiscoveryV1ForZone,
  ForZone as IoK8sApiDiscoveryV1ForZone
};
