import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MetalSideroDevV1alpha1ServerClass.js";

/**
 * ServerClass is the Schema for the serverclasses API.
 */
export interface IServerClass {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "metal.sidero.dev/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ServerClass";
  "metadata"?: IObjectMeta;
  /**
   * ServerClassSpec defines the desired state of ServerClass.
   */
  "spec"?: {
    /**
     * BootFromDiskMethod specifies the method to exit iPXE to force boot from disk. 
     *  If not set, controller default is used. Valid values: ipxe-exit, http-404, ipxe-sanboot.
     */
    "bootFromDiskMethod"?: string;
    /**
     * Set of config patches to apply to the machine configuration to the servers provisioned via this server class.
     */
    "configPatches"?: Array<{
      "op": string;
      "path": string;
      "value"?: any;
    }>;
    /**
     * Reference to the environment which should be used to provision the servers via this server class.
     */
    "environmentRef"?: {
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
    /**
     * Qualifiers to match on the server spec. 
     *  If qualifiers are empty, they match all servers. Server should match both qualifiers and selector conditions to be included into the server class.
     */
    "qualifiers"?: {
      "cpu"?: Array<{
        "manufacturer"?: string;
        "version"?: string;
      }>;
      "labelSelectors"?: Array<{
        [key: string]: string;
      }>;
      "systemInformation"?: Array<{
        "family"?: string;
        "manufacturer"?: string;
        "productName"?: string;
        "serialNumber"?: string;
        "skuNumber"?: string;
        "version"?: string;
      }>;
    };
    /**
     * Label selector to filter the matching servers based on labels. A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
     */
    "selector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
  };
  /**
   * ServerClassStatus defines the observed state of ServerClass.
   */
  "status"?: {
    "serversAvailable": Array<string>;
    "serversInUse": Array<string>;
  };
}

/**
 * ServerClass is the Schema for the serverclasses API.
 */
export class ServerClass extends Model<IServerClass> implements IServerClass {
  "apiVersion": IServerClass["apiVersion"];
  "kind": IServerClass["kind"];
  "metadata"?: IServerClass["metadata"];
  "spec"?: IServerClass["spec"];
  "status"?: IServerClass["status"];

static apiVersion: IServerClass["apiVersion"] = "metal.sidero.dev/v1alpha1";
static kind: IServerClass["kind"] = "ServerClass";
static is = createTypeMetaGuard<IServerClass>(ServerClass);

constructor(data?: ModelData<IServerClass>) {
  super({
    apiVersion: ServerClass.apiVersion,
    kind: ServerClass.kind,
    ...data
  } as IServerClass);
}
}


setValidateFunc(ServerClass, validate as ValidateFunc<IServerClass>);
