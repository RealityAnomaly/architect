import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GeneratorsExternalSecretsIoV1alpha1GCRAccessToken.js";

/**
 * GCRAccessToken generates an GCP access token
 * that can be used to authenticate with GCR.
 */
export interface IGCRAccessToken {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "generators.external-secrets.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "GCRAccessToken";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * Auth defines the means for authenticating with GCP
     */
    "auth": {
      "secretRef"?: {
        /**
         * The SecretAccessKey is used for authentication
         */
        "secretAccessKeySecretRef"?: {
          /**
           * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be
           * defaulted, in others it may be required.
           */
          "key"?: string;
          /**
           * The name of the Secret resource being referred to.
           */
          "name"?: string;
          /**
           * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults
           * to the namespace of the referent.
           */
          "namespace"?: string;
        };
      };
      "workloadIdentity"?: {
        "clusterLocation": string;
        "clusterName": string;
        "clusterProjectID"?: string;
        /**
         * A reference to a ServiceAccount resource.
         */
        "serviceAccountRef": {
          /**
           * Audience specifies the `aud` claim for the service account token
           * If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity
           * then this audiences will be appended to the list
           */
          "audiences"?: Array<string>;
          /**
           * The name of the ServiceAccount resource being referred to.
           */
          "name": string;
          /**
           * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults
           * to the namespace of the referent.
           */
          "namespace"?: string;
        };
      };
    };
    /**
     * ProjectID defines which project to use to authenticate with
     */
    "projectID": string;
  };
}

/**
 * GCRAccessToken generates an GCP access token
 * that can be used to authenticate with GCR.
 */
export class GCRAccessToken extends Model<IGCRAccessToken> implements IGCRAccessToken {
  "apiVersion": IGCRAccessToken["apiVersion"];
  "kind": IGCRAccessToken["kind"];
  "metadata"?: IGCRAccessToken["metadata"];
  "spec"?: IGCRAccessToken["spec"];

static apiVersion: IGCRAccessToken["apiVersion"] = "generators.external-secrets.io/v1alpha1";
static kind: IGCRAccessToken["kind"] = "GCRAccessToken";
static is = createTypeMetaGuard<IGCRAccessToken>(GCRAccessToken);

constructor(data?: ModelData<IGCRAccessToken>) {
  super({
    apiVersion: GCRAccessToken.apiVersion,
    kind: GCRAccessToken.kind,
    ...data
  } as IGCRAccessToken);
}
}


setValidateFunc(GCRAccessToken, validate as ValidateFunc<IGCRAccessToken>);
