import { IIoK8sApiCoreV1ClusterTrustBundleProjection } from "./ClusterTrustBundleProjection.ts";
import { IIoK8sApiCoreV1ConfigMapProjection } from "./ConfigMapProjection.ts";
import { IIoK8sApiCoreV1DownwardAPIProjection } from "./DownwardAPIProjection.ts";
import { IIoK8sApiCoreV1PodCertificateProjection } from "./PodCertificateProjection.ts";
import { IIoK8sApiCoreV1SecretProjection } from "./SecretProjection.ts";
import { IIoK8sApiCoreV1ServiceAccountTokenProjection } from "./ServiceAccountTokenProjection.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/VolumeProjection.js";

/**
 * Projection that may be projected along with other supported volume types. Exactly one of these fields must be set.
 */
export interface IVolumeProjection {
  /**
 * ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field of ClusterTrustBundle objects in an auto-updating file.
 * 
 * Alpha, gated by the ClusterTrustBundleProjection feature gate.
 * 
 * ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector.
 * 
 * Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem.  Esoteric PEM features such as inter-block comments and block headers are stripped.  Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
 */
"clusterTrustBundle"?: IIoK8sApiCoreV1ClusterTrustBundleProjection;
/**
 * configMap information about the configMap data to project
 */
"configMap"?: IIoK8sApiCoreV1ConfigMapProjection;
/**
 * downwardAPI information about the downwardAPI data to project
 */
"downwardAPI"?: IIoK8sApiCoreV1DownwardAPIProjection;
/**
 * Projects an auto-rotating credential bundle (private key and certificate chain) that the pod can use either as a TLS client or server.
 * 
 * Kubelet generates a private key and uses it to send a PodCertificateRequest to the named signer.  Once the signer approves the request and issues a certificate chain, Kubelet writes the key and certificate chain to the pod filesystem.  The pod does not start until certificates have been issued for each podCertificate projected volume source in its spec.
 * 
 * Kubelet will begin trying to rotate the certificate at the time indicated by the signer using the PodCertificateRequest.Status.BeginRefreshAt timestamp.
 * 
 * Kubelet can write a single file, indicated by the credentialBundlePath field, or separate files, indicated by the keyPath and certificateChainPath fields.
 * 
 * The credential bundle is a single file in PEM format.  The first PEM entry is the private key (in PKCS#8 format), and the remaining PEM entries are the certificate chain issued by the signer (typically, signers will return their certificate chain in leaf-to-root order).
 * 
 * Prefer using the credential bundle format, since your application code can read it atomically.  If you use keyPath and certificateChainPath, your application must make two separate file reads. If these coincide with a certificate rotation, it is possible that the private key and leaf certificate you read may not correspond to each other.  Your application will need to check for this condition, and re-read until they are consistent.
 * 
 * The named signer controls chooses the format of the certificate it issues; consult the signer implementation's documentation to learn how to use the certificates it issues.
 */
"podCertificate"?: IIoK8sApiCoreV1PodCertificateProjection;
/**
 * secret information about the secret data to project
 */
"secret"?: IIoK8sApiCoreV1SecretProjection;
/**
 * serviceAccountToken is information about the serviceAccountToken data to project
 */
"serviceAccountToken"?: IIoK8sApiCoreV1ServiceAccountTokenProjection;
}

/**
 * Projection that may be projected along with other supported volume types. Exactly one of these fields must be set.
 */
export class VolumeProjection extends Model<IVolumeProjection> implements IVolumeProjection {
  "clusterTrustBundle"?: IIoK8sApiCoreV1ClusterTrustBundleProjection;
"configMap"?: IIoK8sApiCoreV1ConfigMapProjection;
"downwardAPI"?: IIoK8sApiCoreV1DownwardAPIProjection;
"podCertificate"?: IIoK8sApiCoreV1PodCertificateProjection;
"secret"?: IIoK8sApiCoreV1SecretProjection;
"serviceAccountToken"?: IIoK8sApiCoreV1ServiceAccountTokenProjection;

constructor(data?: ModelData<IVolumeProjection>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeProjection, validate as ValidateFunc<IVolumeProjection>);

export type {
  IVolumeProjection as IIoK8sApiCoreV1VolumeProjection,
  VolumeProjection as IoK8sApiCoreV1VolumeProjection
};
