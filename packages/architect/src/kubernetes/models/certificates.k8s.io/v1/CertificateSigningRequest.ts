import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCertificatesV1CertificateSigningRequestSpec } from "./CertificateSigningRequestSpec.ts";
import { IIoK8sApiCertificatesV1CertificateSigningRequestStatus } from "./CertificateSigningRequestStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiCertificatesV1CertificateSigningRequest.js";

/**
 * CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.
 * 
 * Kubelets use this API to obtain:
 *  1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName).
 *  2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).
 * 
 * This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers.
 */
export interface ICertificateSigningRequest extends TypeMeta {
  "apiVersion": "certificates.k8s.io/v1";
"kind": "CertificateSigningRequest";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec contains the certificate request, and is immutable after creation. Only the request, signerName, expirationSeconds, and usages fields can be set on creation. Other fields are derived by Kubernetes and cannot be modified by users.
 */
"spec": IIoK8sApiCertificatesV1CertificateSigningRequestSpec;
/**
 * status contains information about whether the request is approved or denied, and the certificate issued by the signer, or the failure condition indicating signer failure.
 */
"status"?: IIoK8sApiCertificatesV1CertificateSigningRequestStatus;
}

/**
 * CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.
 * 
 * Kubelets use this API to obtain:
 *  1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName).
 *  2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).
 * 
 * This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers.
 */
export class CertificateSigningRequest extends Model<ICertificateSigningRequest> implements ICertificateSigningRequest {
  "apiVersion": ICertificateSigningRequest["apiVersion"];
"kind": ICertificateSigningRequest["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiCertificatesV1CertificateSigningRequestSpec;
"status"?: IIoK8sApiCertificatesV1CertificateSigningRequestStatus;

static apiVersion: ICertificateSigningRequest["apiVersion"] = "certificates.k8s.io/v1";
static kind: ICertificateSigningRequest["kind"] = "CertificateSigningRequest";
static is = createTypeMetaGuard<ICertificateSigningRequest>(CertificateSigningRequest);

constructor(data?: ModelData<ICertificateSigningRequest>) {
  super();

  this.setDefinedProps({
    apiVersion: CertificateSigningRequest.apiVersion,
    kind: CertificateSigningRequest.kind,
    ...data
  } as ICertificateSigningRequest);
}
}

setValidateFunc(CertificateSigningRequest, validate as ValidateFunc<ICertificateSigningRequest>);

export type {
  ICertificateSigningRequest as IIoK8sApiCertificatesV1CertificateSigningRequest,
  CertificateSigningRequest as IoK8sApiCertificatesV1CertificateSigningRequest
};
