import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiCertificatesV1alpha1ClusterTrustBundleSpec.js";

/**
 * ClusterTrustBundleSpec contains the signer and trust anchors.
 */
export interface IClusterTrustBundleSpec {
  /**
 * signerName indicates the associated signer, if any.
 * 
 * In order to create or update a ClusterTrustBundle that sets signerName, you must have the following cluster-scoped permission: group=certificates.k8s.io resource=signers resourceName=<the signer name> verb=attest.
 * 
 * If signerName is not empty, then the ClusterTrustBundle object must be named with the signer name as a prefix (translating slashes to colons). For example, for the signer name `example.com/foo`, valid ClusterTrustBundle object names include `example.com:foo:abc` and `example.com:foo:v1`.
 * 
 * If signerName is empty, then the ClusterTrustBundle object's name must not have such a prefix.
 * 
 * List/watch requests for ClusterTrustBundles can filter on this field using a `spec.signerName=NAME` field selector.
 */
"signerName"?: string;
/**
 * trustBundle contains the individual X.509 trust anchors for this bundle, as PEM bundle of PEM-wrapped, DER-formatted X.509 certificates.
 * 
 * The data must consist only of PEM certificate blocks that parse as valid X.509 certificates.  Each certificate must include a basic constraints extension with the CA bit set.  The API server will reject objects that contain duplicate certificates, or that use PEM block headers.
 * 
 * Users of ClusterTrustBundles, including Kubelet, are free to reorder and deduplicate certificate blocks in this file according to their own logic, as well as to drop PEM block headers and inter-block data.
 */
"trustBundle": string;
}

/**
 * ClusterTrustBundleSpec contains the signer and trust anchors.
 */
export class ClusterTrustBundleSpec extends Model<IClusterTrustBundleSpec> implements IClusterTrustBundleSpec {
  "signerName"?: string;
"trustBundle": string;

constructor(data?: ModelData<IClusterTrustBundleSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ClusterTrustBundleSpec, validate as ValidateFunc<IClusterTrustBundleSpec>);

export type {
  IClusterTrustBundleSpec as IIoK8sApiCertificatesV1alpha1ClusterTrustBundleSpec,
  ClusterTrustBundleSpec as IoK8sApiCertificatesV1alpha1ClusterTrustBundleSpec
};
