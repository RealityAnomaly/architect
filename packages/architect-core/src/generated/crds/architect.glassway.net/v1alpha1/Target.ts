import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ArchitectGlasswayNetV1alpha1Target.js";

/**
 * Target is the Schema for the targets API
 */
export interface ITarget {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "architect.glassway.net/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Target";
  "metadata": IObjectMeta;
  /**
   * TargetSpec defines the desired state of Target
   */
  "spec": {
    "plugins"?: {
      /**
       * Configuration for the Kubernetes plugin
       */
      "kubernetes"?: {
        "client": {
          "context": string;
        };
        "dns": string;
        /**
         * Configuration for default cluster namespaces
         */
        "ns"?: {
          "features"?: string;
          "operators"?: string;
          "services"?: string;
        };
        "podNetwork": {
          "ipFamilies": Array<"IPv4" | "IPv6">;
        };
        "flavor": "docker-desktop" | "kind" | "k3s" | "talos";
        "version": string;
        "metal": {
          "nodes": number;
        };
      };
    };
    /**
     * Requirements is a list of requirements that must be met by the target
     */
    "requirements"?: Array<string>;
    /**
     * Components is a list of components that must be deployed in the target
     */
    "components"?: Array<{
      "class": string;
      "name"?: string;
      "options"?: {
      };
      "context"?: {
      };
    }>;
  };
}

/**
 * Target is the Schema for the targets API
 */
export class Target extends Model<ITarget> implements ITarget {
  "apiVersion": ITarget["apiVersion"];
  "kind": ITarget["kind"];
  "metadata": ITarget["metadata"];
  "spec": ITarget["spec"];

static apiVersion: ITarget["apiVersion"] = "architect.glassway.net/v1alpha1";
static kind: ITarget["kind"] = "Target";
static is = createTypeMetaGuard<ITarget>(Target);

constructor(data?: ModelData<ITarget>) {
  super({
    apiVersion: Target.apiVersion,
    kind: Target.kind,
    ...data
  } as ITarget);
}
}


setValidateFunc(Target, validate as ValidateFunc<ITarget>);
