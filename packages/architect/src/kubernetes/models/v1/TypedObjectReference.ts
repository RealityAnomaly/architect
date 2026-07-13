import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1TypedObjectReference.js";

/**
 * TypedObjectReference contains enough information to let you locate the typed referenced object
 */
export interface ITypedObjectReference {
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
/**
 * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
 */
"namespace"?: string;
}

/**
 * TypedObjectReference contains enough information to let you locate the typed referenced object
 */
export class TypedObjectReference extends Model<ITypedObjectReference> implements ITypedObjectReference {
  "apiGroup"?: string;
"kind": ITypedObjectReference["kind"];
"name": string;
"namespace"?: string;

constructor(data?: ModelData<ITypedObjectReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(TypedObjectReference, validate as ValidateFunc<ITypedObjectReference>);

export type {
  ITypedObjectReference as IIoK8sApiCoreV1TypedObjectReference,
  TypedObjectReference as IoK8sApiCoreV1TypedObjectReference
};
