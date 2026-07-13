import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../../_schemas/IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery.js";

/**
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 */
export interface IGroupVersionForDiscovery {
  /**
 * groupVersion specifies the API group and version in the form "group/version"
 */
"groupVersion": string;
/**
 * version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion.
 */
"version": string;
}

/**
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 */
export class GroupVersionForDiscovery extends Model<IGroupVersionForDiscovery> implements IGroupVersionForDiscovery {
  "groupVersion": string;
"version": string;

constructor(data?: ModelData<IGroupVersionForDiscovery>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(GroupVersionForDiscovery, validate as ValidateFunc<IGroupVersionForDiscovery>);

export type {
  IGroupVersionForDiscovery as IIoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery,
  GroupVersionForDiscovery as IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery
};
