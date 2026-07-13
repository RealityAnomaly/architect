import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiSchedulingV1alpha2TypedLocalObjectReference.js";

/**
 * TypedLocalObjectReference allows to reference typed object inside the same namespace.
 */
export interface ITypedLocalObjectReference {
  /**
 * APIGroup is the group for the resource being referenced. If APIGroup is empty, the specified Kind must be in the core API group. For any other third-party types, setting APIGroup is required. It must be a DNS subdomain.
 */
"apiGroup"?: string;
/**
 * Kind is the type of resource being referenced. It must be a path segment name.
 */
"kind": string;
/**
 * Name is the name of resource being referenced. It must be a path segment name.
 */
"name": string;
}

/**
 * TypedLocalObjectReference allows to reference typed object inside the same namespace.
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
  ITypedLocalObjectReference as IIoK8sApiSchedulingV1alpha2TypedLocalObjectReference,
  TypedLocalObjectReference as IoK8sApiSchedulingV1alpha2TypedLocalObjectReference
};
