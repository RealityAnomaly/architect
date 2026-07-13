import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCertificatesV1beta1ClusterTrustBundleSpec } from "./ClusterTrustBundleSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/certificates.k8s.io/v1beta1/ClusterTrustBundle.js";

/**
 * ClusterTrustBundle is a cluster-scoped container for X.509 trust anchors (root certificates).
 * 
 * ClusterTrustBundle objects are considered to be readable by any authenticated user in the cluster, because they can be mounted by pods using the `clusterTrustBundle` projection.  All service accounts have read access to ClusterTrustBundles by default.  Users who only have namespace-level access to a cluster can read ClusterTrustBundles by impersonating a serviceaccount that they have access to.
 * 
 * It can be optionally associated with a particular assigner, in which case it contains one valid set of trust anchors for that signer. Signers may have multiple associated ClusterTrustBundles; each is an independent set of trust anchors for that signer. Admission control is used to enforce that only users with permissions on the signer can create or modify the corresponding bundle.
 */
export interface IClusterTrustBundle extends TypeMeta {
  "apiVersion": "certificates.k8s.io/v1beta1";
"kind": "ClusterTrustBundle";
/**
 * metadata contains the object metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec contains the signer (if any) and trust anchors.
 */
"spec": IIoK8sApiCertificatesV1beta1ClusterTrustBundleSpec;
}

/**
 * ClusterTrustBundle is a cluster-scoped container for X.509 trust anchors (root certificates).
 * 
 * ClusterTrustBundle objects are considered to be readable by any authenticated user in the cluster, because they can be mounted by pods using the `clusterTrustBundle` projection.  All service accounts have read access to ClusterTrustBundles by default.  Users who only have namespace-level access to a cluster can read ClusterTrustBundles by impersonating a serviceaccount that they have access to.
 * 
 * It can be optionally associated with a particular assigner, in which case it contains one valid set of trust anchors for that signer. Signers may have multiple associated ClusterTrustBundles; each is an independent set of trust anchors for that signer. Admission control is used to enforce that only users with permissions on the signer can create or modify the corresponding bundle.
 */
export class ClusterTrustBundle extends Model<IClusterTrustBundle> implements IClusterTrustBundle {
  "apiVersion": IClusterTrustBundle["apiVersion"];
"kind": IClusterTrustBundle["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiCertificatesV1beta1ClusterTrustBundleSpec;

static apiVersion: IClusterTrustBundle["apiVersion"] = "certificates.k8s.io/v1beta1";
static kind: IClusterTrustBundle["kind"] = "ClusterTrustBundle";
static is: TypeMetaGuard<IClusterTrustBundle> = createTypeMetaGuard<IClusterTrustBundle>(ClusterTrustBundle);

constructor(data?: ModelData<IClusterTrustBundle>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterTrustBundle.apiVersion,
    kind: ClusterTrustBundle.kind,
    ...data
  } as IClusterTrustBundle);
}
}

setValidateFunc(ClusterTrustBundle, validate as ValidateFunc<IClusterTrustBundle>);

export type {
  IClusterTrustBundle as IIoK8sApiCertificatesV1beta1ClusterTrustBundle,
  ClusterTrustBundle as IoK8sApiCertificatesV1beta1ClusterTrustBundle
};
