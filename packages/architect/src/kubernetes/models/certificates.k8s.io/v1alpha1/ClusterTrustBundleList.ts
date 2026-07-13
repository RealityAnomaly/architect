import { IIoK8sApiCertificatesV1alpha1ClusterTrustBundle } from "./ClusterTrustBundle.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiCertificatesV1alpha1ClusterTrustBundleList.js";

/**
 * ClusterTrustBundleList is a collection of ClusterTrustBundle objects
 */
export interface IClusterTrustBundleList extends TypeMeta {
  "apiVersion": "certificates.k8s.io/v1alpha1";
/**
 * items is a collection of ClusterTrustBundle objects
 */
"items": Array<IIoK8sApiCertificatesV1alpha1ClusterTrustBundle>;
"kind": "ClusterTrustBundleList";
/**
 * metadata contains the list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ClusterTrustBundleList is a collection of ClusterTrustBundle objects
 */
export class ClusterTrustBundleList extends Model<IClusterTrustBundleList> implements IClusterTrustBundleList {
  "apiVersion": IClusterTrustBundleList["apiVersion"];
"items": Array<IIoK8sApiCertificatesV1alpha1ClusterTrustBundle>;
"kind": IClusterTrustBundleList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IClusterTrustBundleList["apiVersion"] = "certificates.k8s.io/v1alpha1";
static kind: IClusterTrustBundleList["kind"] = "ClusterTrustBundleList";
static is = createTypeMetaGuard<IClusterTrustBundleList>(ClusterTrustBundleList);

constructor(data?: ModelData<IClusterTrustBundleList>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterTrustBundleList.apiVersion,
    kind: ClusterTrustBundleList.kind,
    ...data
  } as IClusterTrustBundleList);
}
}

setValidateFunc(ClusterTrustBundleList, validate as ValidateFunc<IClusterTrustBundleList>);

export type {
  IClusterTrustBundleList as IIoK8sApiCertificatesV1alpha1ClusterTrustBundleList,
  ClusterTrustBundleList as IoK8sApiCertificatesV1alpha1ClusterTrustBundleList
};
