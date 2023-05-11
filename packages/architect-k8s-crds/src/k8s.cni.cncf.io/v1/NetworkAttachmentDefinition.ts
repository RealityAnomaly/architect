import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "k8s.cni.cncf.io.v1.NetworkAttachmentDefinition";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "k8s.cni.cncf.io/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "NetworkAttachmentDefinition"
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
        "config": {
          "type": "string",
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
 * NetworkAttachmentDefinition is a CRD schema specified by the Network Plumbing Working Group to express the intent for attaching pods to one or more logical or physical networks. More information available at: https://github.com/k8snetworkplumbingwg/multi-net-spec
 */
export interface INetworkAttachmentDefinition {
  /**
   * APIVersion defines the versioned schema of this represen tation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "k8s.cni.cncf.io/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "NetworkAttachmentDefinition";
  "metadata"?: IObjectMeta;
  /**
   * NetworkAttachmentDefinition spec defines the desired state of a network attachment
   */
  "spec"?: {
    /**
     * NetworkAttachmentDefinition config is a JSON-formatted CNI configuration
     */
    "config"?: string;
  };
}

/**
 * NetworkAttachmentDefinition is a CRD schema specified by the Network Plumbing Working Group to express the intent for attaching pods to one or more logical or physical networks. More information available at: https://github.com/k8snetworkplumbingwg/multi-net-spec
 */
export class NetworkAttachmentDefinition extends Model<INetworkAttachmentDefinition> implements INetworkAttachmentDefinition {
  "apiVersion": INetworkAttachmentDefinition["apiVersion"];
  "kind": INetworkAttachmentDefinition["kind"];
  "metadata"?: INetworkAttachmentDefinition["metadata"];
  "spec"?: INetworkAttachmentDefinition["spec"];

static apiVersion: INetworkAttachmentDefinition["apiVersion"] = "k8s.cni.cncf.io/v1";
static kind: INetworkAttachmentDefinition["kind"] = "NetworkAttachmentDefinition";
static is = createTypeMetaGuard<INetworkAttachmentDefinition>(NetworkAttachmentDefinition);

constructor(data?: ModelData<INetworkAttachmentDefinition>) {
  super({
    apiVersion: NetworkAttachmentDefinition.apiVersion,
    kind: NetworkAttachmentDefinition.kind,
    ...data
  } as INetworkAttachmentDefinition);
}
}


setSchema(NetworkAttachmentDefinition, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
