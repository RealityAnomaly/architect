import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CertManagerIoV1alpha3CertificateRequest.js";

/**
 * A CertificateRequest is used to request a signed certificate from one of the configured issuers. 
 *  All fields within the CertificateRequest's `spec` are immutable after creation. A CertificateRequest will either succeed or fail, as denoted by its `status.state` field. 
 *  A CertificateRequest is a one-shot resource, meaning it represents a single point in time request for a certificate and cannot be re-used.
 */
export interface ICertificateRequest {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cert-manager.io/v1alpha3";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "CertificateRequest";
  "metadata"?: IObjectMeta;
  /**
   * Desired state of the CertificateRequest resource.
   */
  "spec"?: {
    /**
     * The PEM-encoded x509 certificate signing request to be submitted to the CA for signing.
     */
    "csr": string;
    /**
     * The requested 'duration' (i.e. lifetime) of the Certificate. This option may be ignored/overridden by some issuer types.
     */
    "duration"?: string;
    /**
     * Extra contains extra attributes of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
     */
    "extra"?: {
      [key: string]: Array<string>;
    };
    /**
     * Groups contains group membership of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
     */
    "groups"?: Array<string>;
    /**
     * IsCA will request to mark the certificate as valid for certificate signing when submitting to the issuer. This will automatically add the `cert sign` usage to the list of `usages`.
     */
    "isCA"?: boolean;
    /**
     * IssuerRef is a reference to the issuer for this CertificateRequest.  If the `kind` field is not set, or set to `Issuer`, an Issuer resource with the given name in the same namespace as the CertificateRequest will be used.  If the `kind` field is set to `ClusterIssuer`, a ClusterIssuer with the provided name will be used. The `name` field in this stanza is required at all times. The group field refers to the API group of the issuer which defaults to `cert-manager.io` if empty.
     */
    "issuerRef": {
      /**
       * Group of the resource being referred to.
       */
      "group"?: string;
      /**
       * Kind of the resource being referred to.
       */
      "kind"?: string;
      /**
       * Name of the resource being referred to.
       */
      "name": string;
    };
    /**
     * UID contains the uid of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
     */
    "uid"?: string;
    /**
     * Usages is the set of x509 usages that are requested for the certificate. Defaults to `digital signature` and `key encipherment` if not specified.
     */
    "usages"?: Array<"signing" | "digital signature" | "content commitment" | "key encipherment" | "key agreement" | "data encipherment" | "cert sign" | "crl sign" | "encipher only" | "decipher only" | "any" | "server auth" | "client auth" | "code signing" | "email protection" | "s/mime" | "ipsec end system" | "ipsec tunnel" | "ipsec user" | "timestamping" | "ocsp signing" | "microsoft sgc" | "netscape sgc">;
    /**
     * Username contains the name of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
     */
    "username"?: string;
  };
  /**
   * Status of the CertificateRequest. This is set and managed automatically.
   */
  "status"?: {
    /**
     * The PEM encoded x509 certificate of the signer, also known as the CA (Certificate Authority). This is set on a best-effort basis by different issuers. If not set, the CA is assumed to be unknown/not available.
     */
    "ca"?: string;
    /**
     * The PEM encoded x509 certificate resulting from the certificate signing request. If not set, the CertificateRequest has either not been completed or has failed. More information on failure can be found by checking the `conditions` field.
     */
    "certificate"?: string;
    /**
     * List of status conditions to indicate the status of a CertificateRequest. Known condition types are `Ready` and `InvalidRequest`.
     */
    "conditions"?: Array<{
      /**
       * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
       */
      "lastTransitionTime"?: string;
      /**
       * Message is a human readable description of the details of the last transition, complementing reason.
       */
      "message"?: string;
      /**
       * Reason is a brief machine readable explanation for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Status of the condition, one of (`True`, `False`, `Unknown`).
       */
      "status": "True" | "False" | "Unknown";
      /**
       * Type of the condition, known values are (`Ready`, `InvalidRequest`, `Approved`, `Denied`).
       */
      "type": string;
    }>;
    /**
     * FailureTime stores the time that this CertificateRequest failed. This is used to influence garbage collection and back-off.
     */
    "failureTime"?: string;
  };
}

/**
 * A CertificateRequest is used to request a signed certificate from one of the configured issuers. 
 *  All fields within the CertificateRequest's `spec` are immutable after creation. A CertificateRequest will either succeed or fail, as denoted by its `status.state` field. 
 *  A CertificateRequest is a one-shot resource, meaning it represents a single point in time request for a certificate and cannot be re-used.
 */
export class CertificateRequest extends Model<ICertificateRequest> implements ICertificateRequest {
  "apiVersion": ICertificateRequest["apiVersion"];
  "kind": ICertificateRequest["kind"];
  "metadata"?: ICertificateRequest["metadata"];
  "spec"?: ICertificateRequest["spec"];
  "status"?: ICertificateRequest["status"];

static apiVersion: ICertificateRequest["apiVersion"] = "cert-manager.io/v1alpha3";
static kind: ICertificateRequest["kind"] = "CertificateRequest";
static is = createTypeMetaGuard<ICertificateRequest>(CertificateRequest);

constructor(data?: ModelData<ICertificateRequest>) {
  super({
    apiVersion: CertificateRequest.apiVersion,
    kind: CertificateRequest.kind,
    ...data
  } as ICertificateRequest);
}
}


setValidateFunc(CertificateRequest, validate as ValidateFunc<ICertificateRequest>);
