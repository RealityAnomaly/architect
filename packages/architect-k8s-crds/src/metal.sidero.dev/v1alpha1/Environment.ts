import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "metal.sidero.dev.v1alpha1.Environment";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "metal.sidero.dev/v1alpha1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Environment"
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
        "initrd": {
          "properties": {
            "sha512": {
              "type": "string",
              "nullable": true
            },
            "url": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "kernel": {
          "properties": {
            "args": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "nullable": true
            },
            "sha512": {
              "type": "string",
              "nullable": true
            },
            "url": {
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
    },
    "status": {
      "properties": {
        "conditions": {
          "items": {
            "properties": {
              "sha512": {
                "type": "string",
                "nullable": true
              },
              "status": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "url": {
                "type": "string",
                "nullable": true
              }
            },
            "required": [
              "status",
              "type"
            ],
            "type": "object"
          },
          "type": "array",
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
 * Environment is the Schema for the environments API.
 */
export interface IEnvironment {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "metal.sidero.dev/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Environment";
  "metadata"?: IObjectMeta;
  /**
   * EnvironmentSpec defines the desired state of Environment.
   */
  "spec"?: {
    "initrd"?: {
      "sha512"?: string;
      "url"?: string;
    };
    "kernel"?: {
      "args"?: Array<string>;
      "sha512"?: string;
      "url"?: string;
    };
  };
  /**
   * EnvironmentStatus defines the observed state of Environment.
   */
  "status"?: {
    "conditions"?: Array<{
      "sha512"?: string;
      "status": string;
      "type": string;
      "url"?: string;
    }>;
  };
}

/**
 * Environment is the Schema for the environments API.
 */
export class Environment extends Model<IEnvironment> implements IEnvironment {
  "apiVersion": IEnvironment["apiVersion"];
  "kind": IEnvironment["kind"];
  "metadata"?: IEnvironment["metadata"];
  "spec"?: IEnvironment["spec"];
  "status"?: IEnvironment["status"];

static apiVersion: IEnvironment["apiVersion"] = "metal.sidero.dev/v1alpha1";
static kind: IEnvironment["kind"] = "Environment";
static is = createTypeMetaGuard<IEnvironment>(Environment);

constructor(data?: ModelData<IEnvironment>) {
  super({
    apiVersion: Environment.apiVersion,
    kind: Environment.kind,
    ...data
  } as IEnvironment);
}
}


setSchema(Environment, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
