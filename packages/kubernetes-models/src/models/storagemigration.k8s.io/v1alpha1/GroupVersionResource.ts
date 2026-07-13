import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storagemigration.k8s.io/v1alpha1/GroupVersionResource.js";

/**
 * The names of the group, the version, and the resource.
 */
export interface IGroupVersionResource {
  /**
 * The name of the group.
 */
"group"?: string;
/**
 * The name of the resource.
 */
"resource"?: string;
/**
 * The name of the version.
 */
"version"?: string;
}

/**
 * The names of the group, the version, and the resource.
 */
export class GroupVersionResource extends Model<IGroupVersionResource> implements IGroupVersionResource {
  "group"?: string;
"resource"?: string;
"version"?: string;

constructor(data?: ModelData<IGroupVersionResource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(GroupVersionResource, validate as ValidateFunc<IGroupVersionResource>);

export type {
  IGroupVersionResource as IIoK8sApiStoragemigrationV1alpha1GroupVersionResource,
  GroupVersionResource as IoK8sApiStoragemigrationV1alpha1GroupVersionResource
};
