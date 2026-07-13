import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha1ResourceClassParametersReference.js";

/**
 * ResourceClassParametersReference contains enough information to let you locate the parameters for a ResourceClass.
 */
export interface IResourceClassParametersReference {
  /**
 * APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
 */
"apiGroup"?: string;
/**
 * Kind is the type of resource being referenced. This is the same value as in the parameter object's metadata.
 */
"kind": string;
/**
 * Name is the name of resource being referenced.
 */
"name": string;
/**
 * Namespace that contains the referenced resource. Must be empty for cluster-scoped resources and non-empty for namespaced resources.
 */
"namespace"?: string;
}

/**
 * ResourceClassParametersReference contains enough information to let you locate the parameters for a ResourceClass.
 */
export class ResourceClassParametersReference extends Model<IResourceClassParametersReference> implements IResourceClassParametersReference {
  "apiGroup"?: string;
"kind": IResourceClassParametersReference["kind"];
"name": string;
"namespace"?: string;

constructor(data?: ModelData<IResourceClassParametersReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceClassParametersReference, validate as ValidateFunc<IResourceClassParametersReference>);

export type {
  IResourceClassParametersReference as IIoK8sApiResourceV1alpha1ResourceClassParametersReference,
  ResourceClassParametersReference as IoK8sApiResourceV1alpha1ResourceClassParametersReference
};
