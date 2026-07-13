import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCertificatesV1beta1PodCertificateRequestSpec } from "./PodCertificateRequestSpec.ts";
import { IIoK8sApiCertificatesV1beta1PodCertificateRequestStatus } from "./PodCertificateRequestStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/certificates.k8s.io/v1beta1/PodCertificateRequest.js";

/**
 * PodCertificateRequest encodes a pod requesting a certificate from a given signer.
 * 
 * Kubelets use this API to implement podCertificate projected volumes
 */
export interface IPodCertificateRequest extends TypeMeta {
  "apiVersion": "certificates.k8s.io/v1beta1";
"kind": "PodCertificateRequest";
/**
 * metadata contains the object metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec contains the details about the certificate being requested.
 */
"spec": IIoK8sApiCertificatesV1beta1PodCertificateRequestSpec;
/**
 * status contains the issued certificate, and a standard set of conditions.
 */
"status"?: IIoK8sApiCertificatesV1beta1PodCertificateRequestStatus;
}

/**
 * PodCertificateRequest encodes a pod requesting a certificate from a given signer.
 * 
 * Kubelets use this API to implement podCertificate projected volumes
 */
export class PodCertificateRequest extends Model<IPodCertificateRequest> implements IPodCertificateRequest {
  "apiVersion": IPodCertificateRequest["apiVersion"];
"kind": IPodCertificateRequest["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiCertificatesV1beta1PodCertificateRequestSpec;
"status"?: IIoK8sApiCertificatesV1beta1PodCertificateRequestStatus;

static apiVersion: IPodCertificateRequest["apiVersion"] = "certificates.k8s.io/v1beta1";
static kind: IPodCertificateRequest["kind"] = "PodCertificateRequest";
static is: TypeMetaGuard<IPodCertificateRequest> = createTypeMetaGuard<IPodCertificateRequest>(PodCertificateRequest);

constructor(data?: ModelData<IPodCertificateRequest>) {
  super();

  this.setDefinedProps({
    apiVersion: PodCertificateRequest.apiVersion,
    kind: PodCertificateRequest.kind,
    ...data
  } as IPodCertificateRequest);
}
}

setValidateFunc(PodCertificateRequest, validate as ValidateFunc<IPodCertificateRequest>);

export type {
  IPodCertificateRequest as IIoK8sApiCertificatesV1beta1PodCertificateRequest,
  PodCertificateRequest as IoK8sApiCertificatesV1beta1PodCertificateRequest
};
