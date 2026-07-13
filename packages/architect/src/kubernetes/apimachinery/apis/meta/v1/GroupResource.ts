import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../../_schemas/IoK8sApimachineryPkgApisMetaV1GroupResource.js";

/**
 * GroupResource specifies a Group and a Resource, but does not force a version.  This is useful for identifying concepts during lookup stages without having partially valid types
 */
export interface IGroupResource {
  "group": string;
"resource": string;
}

/**
 * GroupResource specifies a Group and a Resource, but does not force a version.  This is useful for identifying concepts during lookup stages without having partially valid types
 */
export class GroupResource extends Model<IGroupResource> implements IGroupResource {
  "group": string;
"resource": string;

constructor(data?: ModelData<IGroupResource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(GroupResource, validate as ValidateFunc<IGroupResource>);

export type {
  IGroupResource as IIoK8sApimachineryPkgApisMetaV1GroupResource,
  GroupResource as IoK8sApimachineryPkgApisMetaV1GroupResource
};
