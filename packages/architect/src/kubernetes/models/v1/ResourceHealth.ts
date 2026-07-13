import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ResourceHealth.js";

/**
 * ResourceHealth represents the health of a resource. It has the latest device health information. This is a part of KEP https://kep.k8s.io/4680.
 */
export interface IResourceHealth {
  /**
 * Health of the resource. can be one of:
 *  - Healthy: operates as normal
 *  - Unhealthy: reported unhealthy. We consider this a temporary health issue
 *               since we do not have a mechanism today to distinguish
 *               temporary and permanent issues.
 *  - Unknown: The status cannot be determined.
 *             For example, Device Plugin got unregistered and hasn't been re-registered since.
 * 
 * In future we may want to introduce the PermanentlyUnhealthy Status.
 */
"health"?: string;
/**
 * Message provides human-readable context for Health (e.g. "ECC error count exceeded threshold"). This field is populated by the kubelet when ResourceHealthStatusMessage is enabled if the DRA plugin returns a message, and is null otherwise.
 */
"message"?: string;
/**
 * ResourceID is the unique identifier of the resource. See the ResourceID type for more information.
 */
"resourceID": string;
}

/**
 * ResourceHealth represents the health of a resource. It has the latest device health information. This is a part of KEP https://kep.k8s.io/4680.
 */
export class ResourceHealth extends Model<IResourceHealth> implements IResourceHealth {
  "health"?: string;
"message"?: string;
"resourceID": string;

constructor(data?: ModelData<IResourceHealth>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceHealth, validate as ValidateFunc<IResourceHealth>);

export type {
  IResourceHealth as IIoK8sApiCoreV1ResourceHealth,
  ResourceHealth as IoK8sApiCoreV1ResourceHealth
};
