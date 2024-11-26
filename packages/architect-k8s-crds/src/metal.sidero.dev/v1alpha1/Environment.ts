import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MetalSideroDevV1alpha1Environment.js";

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


setValidateFunc(Environment, validate as ValidateFunc<IEnvironment>);
