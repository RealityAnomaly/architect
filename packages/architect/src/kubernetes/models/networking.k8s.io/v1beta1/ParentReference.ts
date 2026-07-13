import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1beta1ParentReference.js";

/**
 * ParentReference describes a reference to a parent object.
 */
export interface IParentReference {
  /**
 * Group is the group of the object being referenced.
 */
"group"?: string;
/**
 * Name is the name of the object being referenced.
 */
"name": string;
/**
 * Namespace is the namespace of the object being referenced.
 */
"namespace"?: string;
/**
 * Resource is the resource of the object being referenced.
 */
"resource": string;
}

/**
 * ParentReference describes a reference to a parent object.
 */
export class ParentReference extends Model<IParentReference> implements IParentReference {
  "group"?: string;
"name": string;
"namespace"?: string;
"resource": string;

constructor(data?: ModelData<IParentReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ParentReference, validate as ValidateFunc<IParentReference>);

export type {
  IParentReference as IIoK8sApiNetworkingV1beta1ParentReference,
  ParentReference as IoK8sApiNetworkingV1beta1ParentReference
};
