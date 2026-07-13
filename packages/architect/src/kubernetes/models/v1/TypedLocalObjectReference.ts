import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1TypedLocalObjectReference.js";

/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 */
export interface ITypedLocalObjectReference {
  /**
 * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
 */
"apiGroup"?: string;
/**
 * Kind is the type of resource being referenced
 */
"kind": string;
/**
 * Name is the name of resource being referenced
 */
"name": string;
}

/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 */
export class TypedLocalObjectReference extends Model<ITypedLocalObjectReference> implements ITypedLocalObjectReference {
  "apiGroup"?: string;
"kind": ITypedLocalObjectReference["kind"];
"name": string;

constructor(data?: ModelData<ITypedLocalObjectReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(TypedLocalObjectReference, validate as ValidateFunc<ITypedLocalObjectReference>);

export type {
  ITypedLocalObjectReference as IIoK8sApiCoreV1TypedLocalObjectReference,
  TypedLocalObjectReference as IoK8sApiCoreV1TypedLocalObjectReference
};
