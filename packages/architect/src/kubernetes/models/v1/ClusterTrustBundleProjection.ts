import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ClusterTrustBundleProjection.js";

/**
 * ClusterTrustBundleProjection describes how to select a set of ClusterTrustBundle objects and project their contents into the pod filesystem.
 */
export interface IClusterTrustBundleProjection {
  /**
 * Select all ClusterTrustBundles that match this label selector.  Only has effect if signerName is set.  Mutually-exclusive with name.  If unset, interpreted as "match nothing".  If set but empty, interpreted as "match everything".
 */
"labelSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * Select a single ClusterTrustBundle by object name.  Mutually-exclusive with signerName and labelSelector.
 */
"name"?: string;
/**
 * If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available.  If using name, then the named ClusterTrustBundle is allowed not to exist.  If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
 */
"optional"?: boolean;
/**
 * Relative path from the volume root to write the bundle.
 */
"path": string;
/**
 * Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name.  The contents of all selected ClusterTrustBundles will be unified and deduplicated.
 */
"signerName"?: string;
}

/**
 * ClusterTrustBundleProjection describes how to select a set of ClusterTrustBundle objects and project their contents into the pod filesystem.
 */
export class ClusterTrustBundleProjection extends Model<IClusterTrustBundleProjection> implements IClusterTrustBundleProjection {
  "labelSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
"name"?: string;
"optional"?: boolean;
"path": string;
"signerName"?: string;

constructor(data?: ModelData<IClusterTrustBundleProjection>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ClusterTrustBundleProjection, validate as ValidateFunc<IClusterTrustBundleProjection>);

export type {
  IClusterTrustBundleProjection as IIoK8sApiCoreV1ClusterTrustBundleProjection,
  ClusterTrustBundleProjection as IoK8sApiCoreV1ClusterTrustBundleProjection
};
