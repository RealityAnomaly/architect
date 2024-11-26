import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworkingIstioIoV1alpha3ServiceEntry.js";

export interface IServiceEntry {
  /**
   * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
   */
  "spec"?: {
    /**
     * The virtual IP addresses associated with the service.
     */
    "addresses"?: Array<string>;
    /**
     * One or more endpoints associated with the service.
     */
    "endpoints"?: Array<{
      "address"?: string;
      /**
       * One or more labels associated with the endpoint.
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * The locality associated with the endpoint.
       */
      "locality"?: string;
      "network"?: string;
      /**
       * Set of ports associated with the endpoint.
       */
      "ports"?: {
        [key: string]: number;
      };
      "serviceAccount"?: string;
      /**
       * The load balancing weight associated with the endpoint.
       */
      "weight"?: number;
    }>;
    /**
     * A list of namespaces to which this service is exported.
     */
    "exportTo"?: Array<string>;
    /**
     * The hosts associated with the ServiceEntry.
     */
    "hosts"?: Array<string>;
    "location"?: "MESH_EXTERNAL" | "MESH_INTERNAL";
    /**
     * The ports associated with the external service.
     */
    "ports"?: Array<{
      /**
       * Label assigned to the port.
       */
      "name"?: string;
      /**
       * A valid non-negative integer port number.
       */
      "number"?: number;
      /**
       * The protocol exposed on the port.
       */
      "protocol"?: string;
      "targetPort"?: number;
    }>;
    /**
     * Service discovery mode for the hosts.
     */
    "resolution"?: "NONE" | "STATIC" | "DNS" | "DNS_ROUND_ROBIN";
    "subjectAltNames"?: Array<string>;
    /**
     * Applicable only for MESH_INTERNAL services.
     */
    "workloadSelector"?: {
      "labels"?: {
        [key: string]: string;
      };
    };
  };
  "status"?: {
  };
  "apiVersion": "networking.istio.io/v1alpha3";
  "kind": "ServiceEntry";
  "metadata"?: IObjectMeta;
}

export class ServiceEntry extends Model<IServiceEntry> implements IServiceEntry {
  "spec"?: IServiceEntry["spec"];
  "status"?: IServiceEntry["status"];
  "apiVersion": IServiceEntry["apiVersion"];
  "kind": IServiceEntry["kind"];
  "metadata"?: IServiceEntry["metadata"];

static apiVersion: IServiceEntry["apiVersion"] = "networking.istio.io/v1alpha3";
static kind: IServiceEntry["kind"] = "ServiceEntry";
static is = createTypeMetaGuard<IServiceEntry>(ServiceEntry);

constructor(data?: ModelData<IServiceEntry>) {
  super({
    apiVersion: ServiceEntry.apiVersion,
    kind: ServiceEntry.kind,
    ...data
  } as IServiceEntry);
}
}


setValidateFunc(ServiceEntry, validate as ValidateFunc<IServiceEntry>);
