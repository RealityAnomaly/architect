import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SecurityIstioIoV1beta1AuthorizationPolicy.js";

export interface IAuthorizationPolicy {
  /**
   * Configuration for access control on workloads. See more details at: https://istio.io/docs/reference/config/security/authorization-policy.html
   */
  "spec"?: {
    /**
     * Optional.
     */
    "action"?: "ALLOW" | "DENY" | "AUDIT" | "CUSTOM";
    /**
     * Specifies detailed configuration of the CUSTOM action.
     */
    "provider"?: {
      /**
       * Specifies the name of the extension provider.
       */
      "name"?: string;
    };
    /**
     * Optional.
     */
    "rules"?: Array<{
      /**
       * Optional.
       */
      "from"?: Array<{
        /**
         * Source specifies the source of a request.
         */
        "source"?: {
          /**
           * Optional.
           */
          "ipBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "namespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notNamespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "notRemoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notRequestPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "principals"?: Array<string>;
          /**
           * Optional.
           */
          "remoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "requestPrincipals"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "to"?: Array<{
        /**
         * Operation specifies the operation of a request.
         */
        "operation"?: {
          /**
           * Optional.
           */
          "hosts"?: Array<string>;
          /**
           * Optional.
           */
          "methods"?: Array<string>;
          /**
           * Optional.
           */
          "notHosts"?: Array<string>;
          /**
           * Optional.
           */
          "notMethods"?: Array<string>;
          /**
           * Optional.
           */
          "notPaths"?: Array<string>;
          /**
           * Optional.
           */
          "notPorts"?: Array<string>;
          /**
           * Optional.
           */
          "paths"?: Array<string>;
          /**
           * Optional.
           */
          "ports"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "when"?: Array<{
        /**
         * The name of an Istio attribute.
         */
        "key"?: string;
        /**
         * Optional.
         */
        "notValues"?: Array<string>;
        /**
         * Optional.
         */
        "values"?: Array<string>;
      }>;
    }>;
    /**
     * Optional.
     */
    "selector"?: {
      "matchLabels"?: {
        [key: string]: string;
      };
    };
  } & (Exclude<{
    /**
     * Optional.
     */
    "action"?: "ALLOW" | "DENY" | "AUDIT" | "CUSTOM";
    /**
     * Specifies detailed configuration of the CUSTOM action.
     */
    "provider"?: {
      /**
       * Specifies the name of the extension provider.
       */
      "name"?: string;
    };
    /**
     * Optional.
     */
    "rules"?: Array<{
      /**
       * Optional.
       */
      "from"?: Array<{
        /**
         * Source specifies the source of a request.
         */
        "source"?: {
          /**
           * Optional.
           */
          "ipBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "namespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notNamespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "notRemoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notRequestPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "principals"?: Array<string>;
          /**
           * Optional.
           */
          "remoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "requestPrincipals"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "to"?: Array<{
        /**
         * Operation specifies the operation of a request.
         */
        "operation"?: {
          /**
           * Optional.
           */
          "hosts"?: Array<string>;
          /**
           * Optional.
           */
          "methods"?: Array<string>;
          /**
           * Optional.
           */
          "notHosts"?: Array<string>;
          /**
           * Optional.
           */
          "notMethods"?: Array<string>;
          /**
           * Optional.
           */
          "notPaths"?: Array<string>;
          /**
           * Optional.
           */
          "notPorts"?: Array<string>;
          /**
           * Optional.
           */
          "paths"?: Array<string>;
          /**
           * Optional.
           */
          "ports"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "when"?: Array<{
        /**
         * The name of an Istio attribute.
         */
        "key"?: string;
        /**
         * Optional.
         */
        "notValues"?: Array<string>;
        /**
         * Optional.
         */
        "values"?: Array<string>;
      }>;
    }>;
    /**
     * Optional.
     */
    "selector"?: {
      "matchLabels"?: {
        [key: string]: string;
      };
    };
  }, {
    /**
     * Optional.
     */
    "action"?: "ALLOW" | "DENY" | "AUDIT" | "CUSTOM";
    /**
     * Specifies detailed configuration of the CUSTOM action.
     */
    "provider"?: {
      /**
       * Specifies the name of the extension provider.
       */
      "name"?: string;
    };
    /**
     * Optional.
     */
    "rules"?: Array<{
      /**
       * Optional.
       */
      "from"?: Array<{
        /**
         * Source specifies the source of a request.
         */
        "source"?: {
          /**
           * Optional.
           */
          "ipBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "namespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notNamespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "notRemoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notRequestPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "principals"?: Array<string>;
          /**
           * Optional.
           */
          "remoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "requestPrincipals"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "to"?: Array<{
        /**
         * Operation specifies the operation of a request.
         */
        "operation"?: {
          /**
           * Optional.
           */
          "hosts"?: Array<string>;
          /**
           * Optional.
           */
          "methods"?: Array<string>;
          /**
           * Optional.
           */
          "notHosts"?: Array<string>;
          /**
           * Optional.
           */
          "notMethods"?: Array<string>;
          /**
           * Optional.
           */
          "notPaths"?: Array<string>;
          /**
           * Optional.
           */
          "notPorts"?: Array<string>;
          /**
           * Optional.
           */
          "paths"?: Array<string>;
          /**
           * Optional.
           */
          "ports"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "when"?: Array<{
        /**
         * The name of an Istio attribute.
         */
        "key"?: string;
        /**
         * Optional.
         */
        "notValues"?: Array<string>;
        /**
         * Optional.
         */
        "values"?: Array<string>;
      }>;
    }>;
    /**
     * Optional.
     */
    "selector"?: {
      "matchLabels"?: {
        [key: string]: string;
      };
    };
  } & ({
    /**
     * Optional.
     */
    "action"?: "ALLOW" | "DENY" | "AUDIT" | "CUSTOM";
    /**
     * Specifies detailed configuration of the CUSTOM action.
     */
    "provider": {
      /**
       * Specifies the name of the extension provider.
       */
      "name"?: string;
    };
    /**
     * Optional.
     */
    "rules"?: Array<{
      /**
       * Optional.
       */
      "from"?: Array<{
        /**
         * Source specifies the source of a request.
         */
        "source"?: {
          /**
           * Optional.
           */
          "ipBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "namespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notNamespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "notRemoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notRequestPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "principals"?: Array<string>;
          /**
           * Optional.
           */
          "remoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "requestPrincipals"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "to"?: Array<{
        /**
         * Operation specifies the operation of a request.
         */
        "operation"?: {
          /**
           * Optional.
           */
          "hosts"?: Array<string>;
          /**
           * Optional.
           */
          "methods"?: Array<string>;
          /**
           * Optional.
           */
          "notHosts"?: Array<string>;
          /**
           * Optional.
           */
          "notMethods"?: Array<string>;
          /**
           * Optional.
           */
          "notPaths"?: Array<string>;
          /**
           * Optional.
           */
          "notPorts"?: Array<string>;
          /**
           * Optional.
           */
          "paths"?: Array<string>;
          /**
           * Optional.
           */
          "ports"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "when"?: Array<{
        /**
         * The name of an Istio attribute.
         */
        "key"?: string;
        /**
         * Optional.
         */
        "notValues"?: Array<string>;
        /**
         * Optional.
         */
        "values"?: Array<string>;
      }>;
    }>;
    /**
     * Optional.
     */
    "selector"?: {
      "matchLabels"?: {
        [key: string]: string;
      };
    };
  })> | {
    /**
     * Optional.
     */
    "action"?: "ALLOW" | "DENY" | "AUDIT" | "CUSTOM";
    /**
     * Specifies detailed configuration of the CUSTOM action.
     */
    "provider": {
      /**
       * Specifies the name of the extension provider.
       */
      "name"?: string;
    };
    /**
     * Optional.
     */
    "rules"?: Array<{
      /**
       * Optional.
       */
      "from"?: Array<{
        /**
         * Source specifies the source of a request.
         */
        "source"?: {
          /**
           * Optional.
           */
          "ipBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "namespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notNamespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "notRemoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notRequestPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "principals"?: Array<string>;
          /**
           * Optional.
           */
          "remoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "requestPrincipals"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "to"?: Array<{
        /**
         * Operation specifies the operation of a request.
         */
        "operation"?: {
          /**
           * Optional.
           */
          "hosts"?: Array<string>;
          /**
           * Optional.
           */
          "methods"?: Array<string>;
          /**
           * Optional.
           */
          "notHosts"?: Array<string>;
          /**
           * Optional.
           */
          "notMethods"?: Array<string>;
          /**
           * Optional.
           */
          "notPaths"?: Array<string>;
          /**
           * Optional.
           */
          "notPorts"?: Array<string>;
          /**
           * Optional.
           */
          "paths"?: Array<string>;
          /**
           * Optional.
           */
          "ports"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "when"?: Array<{
        /**
         * The name of an Istio attribute.
         */
        "key"?: string;
        /**
         * Optional.
         */
        "notValues"?: Array<string>;
        /**
         * Optional.
         */
        "values"?: Array<string>;
      }>;
    }>;
    /**
     * Optional.
     */
    "selector"?: {
      "matchLabels"?: {
        [key: string]: string;
      };
    };
  });
  "status"?: {
  };
  "apiVersion": "security.istio.io/v1beta1";
  "kind": "AuthorizationPolicy";
  "metadata"?: IObjectMeta;
}

export class AuthorizationPolicy extends Model<IAuthorizationPolicy> implements IAuthorizationPolicy {
  "spec"?: IAuthorizationPolicy["spec"];
  "status"?: IAuthorizationPolicy["status"];
  "apiVersion": IAuthorizationPolicy["apiVersion"];
  "kind": IAuthorizationPolicy["kind"];
  "metadata"?: IAuthorizationPolicy["metadata"];

static apiVersion: IAuthorizationPolicy["apiVersion"] = "security.istio.io/v1beta1";
static kind: IAuthorizationPolicy["kind"] = "AuthorizationPolicy";
static is = createTypeMetaGuard<IAuthorizationPolicy>(AuthorizationPolicy);

constructor(data?: ModelData<IAuthorizationPolicy>) {
  super({
    apiVersion: AuthorizationPolicy.apiVersion,
    kind: AuthorizationPolicy.kind,
    ...data
  } as IAuthorizationPolicy);
}
}


setValidateFunc(AuthorizationPolicy, validate as ValidateFunc<IAuthorizationPolicy>);
