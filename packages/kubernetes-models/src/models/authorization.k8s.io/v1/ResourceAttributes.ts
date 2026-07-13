import { IIoK8sApiAuthorizationV1FieldSelectorAttributes } from "./FieldSelectorAttributes.ts";
import { IIoK8sApiAuthorizationV1LabelSelectorAttributes } from "./LabelSelectorAttributes.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authorization.k8s.io/v1/ResourceAttributes.js";

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export interface IResourceAttributes {
  /**
 * fieldSelector describes the limitation on access based on field.  It can only limit access, not broaden it.
 */
"fieldSelector"?: IIoK8sApiAuthorizationV1FieldSelectorAttributes;
/**
 * group is the API Group of the Resource.  "\*" means all.
 */
"group"?: string;
/**
 * labelSelector describes the limitation on access based on labels.  It can only limit access, not broaden it.
 */
"labelSelector"?: IIoK8sApiAuthorizationV1LabelSelectorAttributes;
/**
 * name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.
 */
"name"?: string;
/**
 * namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
 */
"namespace"?: string;
/**
 * resource is one of the existing resource types.  "\*" means all.
 */
"resource"?: string;
/**
 * subresource is one of the existing resource types.  "" means none.
 */
"subresource"?: string;
/**
 * verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "\*" means all.
 */
"verb"?: string;
/**
 * version is the API Version of the Resource.  "\*" means all.
 */
"version"?: string;
}

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export class ResourceAttributes extends Model<IResourceAttributes> implements IResourceAttributes {
  "fieldSelector"?: IIoK8sApiAuthorizationV1FieldSelectorAttributes;
"group"?: string;
"labelSelector"?: IIoK8sApiAuthorizationV1LabelSelectorAttributes;
"name"?: string;
"namespace"?: string;
"resource"?: string;
"subresource"?: string;
"verb"?: string;
"version"?: string;

constructor(data?: ModelData<IResourceAttributes>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceAttributes, validate as ValidateFunc<IResourceAttributes>);

export type {
  IResourceAttributes as IIoK8sApiAuthorizationV1ResourceAttributes,
  ResourceAttributes as IoK8sApiAuthorizationV1ResourceAttributes
};
