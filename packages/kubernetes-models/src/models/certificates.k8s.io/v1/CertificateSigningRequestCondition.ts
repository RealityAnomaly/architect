import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/certificates.k8s.io/v1/CertificateSigningRequestCondition.js";

/**
 * CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object
 */
export interface ICertificateSigningRequestCondition {
  /**
 * lastTransitionTime is the time the condition last transitioned from one status to another. If unset, when a new condition type is added or an existing condition's status is changed, the server defaults this to the current time.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * lastUpdateTime is the time of the last update to this condition
 */
"lastUpdateTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * message contains a human readable message with details about the request state
 */
"message"?: string;
/**
 * reason indicates a brief reason for the request state
 */
"reason"?: string;
/**
 * status of the condition, one of True, False, Unknown. Approved, Denied, and Failed conditions may not be "False" or "Unknown".
 */
"status": string;
/**
 * type of the condition. Known conditions are "Approved", "Denied", and "Failed".
 * 
 * An "Approved" condition is added via the /approval subresource, indicating the request was approved and should be issued by the signer.
 * 
 * A "Denied" condition is added via the /approval subresource, indicating the request was denied and should not be issued by the signer.
 * 
 * A "Failed" condition is added via the /status subresource, indicating the signer failed to issue the certificate.
 * 
 * Approved and Denied conditions are mutually exclusive. Approved, Denied, and Failed conditions cannot be removed once added.
 * 
 * Only one condition of a given type is allowed.
 */
"type": string;
}

/**
 * CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object
 */
export class CertificateSigningRequestCondition extends Model<ICertificateSigningRequestCondition> implements ICertificateSigningRequestCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"lastUpdateTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<ICertificateSigningRequestCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CertificateSigningRequestCondition, validate as ValidateFunc<ICertificateSigningRequestCondition>);

export type {
  ICertificateSigningRequestCondition as IIoK8sApiCertificatesV1CertificateSigningRequestCondition,
  CertificateSigningRequestCondition as IoK8sApiCertificatesV1CertificateSigningRequestCondition
};
