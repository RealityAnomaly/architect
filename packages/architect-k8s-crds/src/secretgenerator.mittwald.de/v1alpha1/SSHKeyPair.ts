import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "secretgenerator.mittwald.de.v1alpha1.SSHKeyPair";
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
        "SSHKeyPair"
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
        "forceRegenerate": {
          "type": "boolean",
          "nullable": true
        },
        "length": {
          "type": "string",
          "nullable": true
        },
        "privateKey": {
          "type": "string",
          "nullable": true
        },
        "type": {
          "type": "string",
          "nullable": true
        }
      },
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
 * SSHKeyPair is the Schema for the sshkeypairs API
 */
export interface ISSHKeyPair {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "secretgenerator.mittwald.de/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "SSHKeyPair";
  "metadata"?: IObjectMeta;
  /**
   * SSHKeyPairSpec defines the desired state of SSHKeyPair
   */
  "spec"?: {
    "data"?: {
      [key: string]: string;
    };
    "forceRegenerate"?: boolean;
    "length"?: string;
    "privateKey"?: string;
    "type"?: string;
  };
  /**
   * SSHKeyPairStatus defines the observed state of SSHKeyPair
   */
  "status"?: {
    /**
     * INSERT ADDITIONAL STATUS FIELD - define observed state of cluster Important: Run "operator-sdk generate k8s" to regenerate code after modifying this file Add custom validation using kubebuilder tags: https://book-v1.book.kubebuilder.io/beyond_basics/generating_crd.html
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
 * SSHKeyPair is the Schema for the sshkeypairs API
 */
export class SSHKeyPair extends Model<ISSHKeyPair> implements ISSHKeyPair {
  "apiVersion": ISSHKeyPair["apiVersion"];
  "kind": ISSHKeyPair["kind"];
  "metadata"?: ISSHKeyPair["metadata"];
  "spec"?: ISSHKeyPair["spec"];
  "status"?: ISSHKeyPair["status"];

static apiVersion: ISSHKeyPair["apiVersion"] = "secretgenerator.mittwald.de/v1alpha1";
static kind: ISSHKeyPair["kind"] = "SSHKeyPair";
static is = createTypeMetaGuard<ISSHKeyPair>(SSHKeyPair);

constructor(data?: ModelData<ISSHKeyPair>) {
  super({
    apiVersion: SSHKeyPair.apiVersion,
    kind: SSHKeyPair.kind,
    ...data
  } as ISSHKeyPair);
}
}


setSchema(SSHKeyPair, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
