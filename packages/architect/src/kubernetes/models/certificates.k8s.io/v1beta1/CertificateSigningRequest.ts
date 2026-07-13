import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCertificatesV1beta1CertificateSigningRequestSpec } from "./CertificateSigningRequestSpec.ts";
import { IIoK8sApiCertificatesV1beta1CertificateSigningRequestStatus } from "./CertificateSigningRequestStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiCertificatesV1beta1CertificateSigningRequest.js";

/**
 * Describes a certificate signing request
 */
export interface ICertificateSigningRequest extends TypeMeta {
  "apiVersion": "certificates.k8s.io/v1beta1";
"kind": "CertificateSigningRequest";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * The certificate request itself and any additional information.
 */
"spec"?: IIoK8sApiCertificatesV1beta1CertificateSigningRequestSpec;
/**
 * Derived information about the request.
 */
"status"?: IIoK8sApiCertificatesV1beta1CertificateSigningRequestStatus;
}

/**
 * Describes a certificate signing request
 */
export class CertificateSigningRequest extends Model<ICertificateSigningRequest> implements ICertificateSigningRequest {
  "apiVersion": ICertificateSigningRequest["apiVersion"];
"kind": ICertificateSigningRequest["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiCertificatesV1beta1CertificateSigningRequestSpec;
"status"?: IIoK8sApiCertificatesV1beta1CertificateSigningRequestStatus;

static apiVersion: ICertificateSigningRequest["apiVersion"] = "certificates.k8s.io/v1beta1";
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
  ICertificateSigningRequest as IIoK8sApiCertificatesV1beta1CertificateSigningRequest,
  CertificateSigningRequest as IoK8sApiCertificatesV1beta1CertificateSigningRequest
};
