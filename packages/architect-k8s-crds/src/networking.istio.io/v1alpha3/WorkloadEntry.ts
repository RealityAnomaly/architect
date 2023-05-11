import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "networking.istio.io.v1alpha3.WorkloadEntry";
const schema = {
  "type": "object",
  "properties": {
    "spec": {
      "properties": {
        "address": {
          "type": "string",
          "nullable": true
        },
        "labels": {
          "additionalProperties": {
            "type": "string"
          },
          "type": "object",
          "properties": {},
          "nullable": true
        },
        "locality": {
          "type": "string",
          "nullable": true
        },
        "network": {
          "type": "string",
          "nullable": true
        },
        "ports": {
          "additionalProperties": {
            "type": "integer"
          },
          "type": "object",
          "properties": {},
          "nullable": true
        },
        "serviceAccount": {
          "type": "string",
          "nullable": true
        },
        "weight": {
          "type": "integer",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    },
    "status": {
      "type": "object",
      "properties": {},
      "nullable": true
    },
    "apiVersion": {
      "type": "string",
      "enum": [
        "networking.istio.io/v1alpha3"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "WorkloadEntry"
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
    }
  },
  "required": [
    "apiVersion",
    "kind"
  ]
};

export interface IWorkloadEntry {
  /**
   * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
   */
  "spec"?: {
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
  };
  "status"?: {
  };
  "apiVersion": "networking.istio.io/v1alpha3";
  "kind": "WorkloadEntry";
  "metadata"?: IObjectMeta;
}

export class WorkloadEntry extends Model<IWorkloadEntry> implements IWorkloadEntry {
  "spec"?: IWorkloadEntry["spec"];
  "status"?: IWorkloadEntry["status"];
  "apiVersion": IWorkloadEntry["apiVersion"];
  "kind": IWorkloadEntry["kind"];
  "metadata"?: IWorkloadEntry["metadata"];

static apiVersion: IWorkloadEntry["apiVersion"] = "networking.istio.io/v1alpha3";
static kind: IWorkloadEntry["kind"] = "WorkloadEntry";
static is = createTypeMetaGuard<IWorkloadEntry>(WorkloadEntry);

constructor(data?: ModelData<IWorkloadEntry>) {
  super({
    apiVersion: WorkloadEntry.apiVersion,
    kind: WorkloadEntry.kind,
    ...data
  } as IWorkloadEntry);
}
}


setSchema(WorkloadEntry, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
