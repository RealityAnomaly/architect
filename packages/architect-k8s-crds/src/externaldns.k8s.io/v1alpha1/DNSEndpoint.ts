import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "externaldns.k8s.io.v1alpha1.DNSEndpoint";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "externaldns.k8s.io/v1alpha1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "DNSEndpoint"
      ]
    },
    "metadata": {
      "oneOf": [
        {
          "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
        },
        {
          "type": "null"
        }
      ]
    },
    "spec": {
      "properties": {
        "endpoints": {
          "items": {
            "properties": {
              "dnsName": {
                "type": "string",
                "nullable": true
              },
              "labels": {
                "additionalProperties": {
                  "type": "string"
                },
                "type": "object",
                "properties": {},
                "nullable": true
              },
              "providerSpecific": {
                "items": {
                  "properties": {
                    "name": {
                      "type": "string",
                      "nullable": true
                    },
                    "value": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "recordTTL": {
                "format": "int64",
                "type": "integer",
                "nullable": true
              },
              "recordType": {
                "type": "string",
                "nullable": true
              },
              "setIdentifier": {
                "type": "string",
                "nullable": true
              },
              "targets": {
                "items": {
                  "type": "string"
                },
                "type": "array",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "array",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    },
    "status": {
      "properties": {
        "observedGeneration": {
          "format": "int64",
          "type": "integer",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    }
  },
  "required": [
    "apiVersion",
    "kind"
  ]
};

export interface IDNSEndpoint {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "externaldns.k8s.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "DNSEndpoint";
  "metadata"?: IObjectMeta;
  /**
   * DNSEndpointSpec defines the desired state of DNSEndpoint
   */
  "spec"?: {
    "endpoints"?: Array<{
      /**
       * The hostname of the DNS record
       */
      "dnsName"?: string;
      /**
       * Labels stores labels defined for the Endpoint
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * ProviderSpecific stores provider specific config
       */
      "providerSpecific"?: Array<{
        "name"?: string;
        "value"?: string;
      }>;
      /**
       * TTL for the record
       */
      "recordTTL"?: number;
      /**
       * RecordType type of record, e.g. CNAME, A, SRV, TXT etc
       */
      "recordType"?: string;
      /**
       * Identifier to distinguish multiple records with the same name and type (e.g. Route53 records with routing policies other than 'simple')
       */
      "setIdentifier"?: string;
      /**
       * The targets the DNS record points to
       */
      "targets"?: Array<string>;
    }>;
  };
  /**
   * DNSEndpointStatus defines the observed state of DNSEndpoint
   */
  "status"?: {
    /**
     * The generation observed by the external-dns controller.
     */
    "observedGeneration"?: number;
  };
}

export class DNSEndpoint extends Model<IDNSEndpoint> implements IDNSEndpoint {
  "apiVersion": IDNSEndpoint["apiVersion"];
  "kind": IDNSEndpoint["kind"];
  "metadata"?: IDNSEndpoint["metadata"];
  "spec"?: IDNSEndpoint["spec"];
  "status"?: IDNSEndpoint["status"];

static apiVersion: IDNSEndpoint["apiVersion"] = "externaldns.k8s.io/v1alpha1";
static kind: IDNSEndpoint["kind"] = "DNSEndpoint";
static is = createTypeMetaGuard<IDNSEndpoint>(DNSEndpoint);

constructor(data?: ModelData<IDNSEndpoint>) {
  super({
    apiVersion: DNSEndpoint.apiVersion,
    kind: DNSEndpoint.kind,
    ...data
  } as IDNSEndpoint);
}
}


setSchema(DNSEndpoint, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
