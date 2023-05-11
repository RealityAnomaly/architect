import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "secretgenerator.mittwald.de.v1alpha1.BasicAuth";
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
        "BasicAuth"
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
        "encoding": {
          "type": "string",
          "nullable": true
        },
        "forceRegenerate": {
          "type": "boolean",
          "nullable": true
        },
        "length": {
          "type": "string",
          "nullable": true
        },
        "username": {
          "type": "string"
        }
      },
      "required": [
        "username"
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
 * BasicAuth is the Schema for the basicauths API
 */
export interface IBasicAuth {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "secretgenerator.mittwald.de/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "BasicAuth";
  "metadata"?: IObjectMeta;
  /**
   * BasicAuthSpec defines the desired state of BasicAuth
   */
  "spec"?: {
    "data"?: {
      [key: string]: string;
    };
    "encoding"?: string;
    "forceRegenerate"?: boolean;
    "length"?: string;
    "username": string;
  };
  /**
   * BasicAuthStatus defines the observed state of BasicAuth
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
 * BasicAuth is the Schema for the basicauths API
 */
export class BasicAuth extends Model<IBasicAuth> implements IBasicAuth {
  "apiVersion": IBasicAuth["apiVersion"];
  "kind": IBasicAuth["kind"];
  "metadata"?: IBasicAuth["metadata"];
  "spec"?: IBasicAuth["spec"];
  "status"?: IBasicAuth["status"];

static apiVersion: IBasicAuth["apiVersion"] = "secretgenerator.mittwald.de/v1alpha1";
static kind: IBasicAuth["kind"] = "BasicAuth";
static is = createTypeMetaGuard<IBasicAuth>(BasicAuth);

constructor(data?: ModelData<IBasicAuth>) {
  super({
    apiVersion: BasicAuth.apiVersion,
    kind: BasicAuth.kind,
    ...data
  } as IBasicAuth);
}
}


setSchema(BasicAuth, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
