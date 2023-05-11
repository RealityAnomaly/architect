import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "secretgenerator.mittwald.de.v1alpha1.StringSecret";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "secretgenerator.mittwald.de/v1alpha1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "StringSecret"
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
        "data": {
          "additionalProperties": {
            "type": "string"
          },
          "type": "object",
          "properties": {},
          "nullable": true
        },
        "fields": {
          "items": {
            "properties": {
              "encoding": {
                "type": "string",
                "nullable": true
              },
              "fieldName": {
                "type": "string",
                "nullable": true
              },
              "length": {
                "type": "string",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "forceRegenerate": {
          "type": "boolean",
          "nullable": true
        },
        "type": {
          "type": "string",
          "nullable": true
        }
      },
      "required": [
        "fields"
      ],
      "type": "object",
      "nullable": true
    },
    "status": {
      "properties": {
        "secret": {
          "properties": {
            "apiVersion": {
              "type": "string",
              "nullable": true
            },
            "fieldPath": {
              "type": "string",
              "nullable": true
            },
            "kind": {
              "type": "string",
              "nullable": true
            },
            "name": {
              "type": "string",
              "nullable": true
            },
            "namespace": {
              "type": "string",
              "nullable": true
            },
            "resourceVersion": {
              "type": "string",
              "nullable": true
            },
            "uid": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
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

/**
 * StringSecret is the Schema for the stringsecrets API
 */
export interface IStringSecret {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "secretgenerator.mittwald.de/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "StringSecret";
  "metadata"?: IObjectMeta;
  /**
   * StringSecretSpec defines the desired state of StringSecret
   */
  "spec"?: {
    "data"?: {
      [key: string]: string;
    };
    "fields": Array<{
      "encoding"?: string;
      "fieldName"?: string;
      "length"?: string;
    }>;
    "forceRegenerate"?: boolean;
    "type"?: string;
  };
  /**
   * StringSecretStatus defines the observed state of StringSecret
   */
  "status"?: {
    /**
     * ObjectReference contains enough information to let you inspect or modify the referred object.
     */
    "secret"?: {
      /**
       * API version of the referent.
       */
      "apiVersion"?: string;
      /**
       * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
       */
      "fieldPath"?: string;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      "kind"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
      /**
       * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
       */
      "resourceVersion"?: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
       */
      "uid"?: string;
    };
  };
}

/**
 * StringSecret is the Schema for the stringsecrets API
 */
export class StringSecret extends Model<IStringSecret> implements IStringSecret {
  "apiVersion": IStringSecret["apiVersion"];
  "kind": IStringSecret["kind"];
  "metadata"?: IStringSecret["metadata"];
  "spec"?: IStringSecret["spec"];
  "status"?: IStringSecret["status"];

static apiVersion: IStringSecret["apiVersion"] = "secretgenerator.mittwald.de/v1alpha1";
static kind: IStringSecret["kind"] = "StringSecret";
static is = createTypeMetaGuard<IStringSecret>(StringSecret);

constructor(data?: ModelData<IStringSecret>) {
  super({
    apiVersion: StringSecret.apiVersion,
    kind: StringSecret.kind,
    ...data
  } as IStringSecret);
}
}


setSchema(StringSecret, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
