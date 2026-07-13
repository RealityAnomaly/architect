import { IIoK8sApiCertificatesV1beta1CertificateSigningRequestCondition } from "./CertificateSigningRequestCondition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/certificates.k8s.io/v1beta1/CertificateSigningRequestStatus.js";

export interface ICertificateSigningRequestStatus {
  /**
 * If request was approved, the controller will place the issued certificate here.
 */
"certificate"?: string;
/**
 * Conditions applied to the request, such as approval or denial.
 */
"conditions"?: Array<IIoK8sApiCertificatesV1beta1CertificateSigningRequestCondition>;
}

export class CertificateSigningRequestStatus extends Model<ICertificateSigningRequestStatus> implements ICertificateSigningRequestStatus {
  "certificate"?: string;
"conditions"?: Array<IIoK8sApiCertificatesV1beta1CertificateSigningRequestCondition>;

constructor(data?: ModelData<ICertificateSigningRequestStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CertificateSigningRequestStatus, validate as ValidateFunc<ICertificateSigningRequestStatus>);

export type {
  ICertificateSigningRequestStatus as IIoK8sApiCertificatesV1beta1CertificateSigningRequestStatus,
  CertificateSigningRequestStatus as IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus
};
