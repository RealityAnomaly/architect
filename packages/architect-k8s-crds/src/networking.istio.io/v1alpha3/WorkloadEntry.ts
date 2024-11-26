import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworkingIstioIoV1alpha3WorkloadEntry.js";

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


setValidateFunc(WorkloadEntry, validate as ValidateFunc<IWorkloadEntry>);
