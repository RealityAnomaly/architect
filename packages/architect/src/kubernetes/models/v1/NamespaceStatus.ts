import { IIoK8sApiCoreV1NamespaceCondition } from "./NamespaceCondition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NamespaceStatus.js";

/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
export interface INamespaceStatus {
  /**
 * Represents the latest available observations of a namespace's current state.
 */
"conditions"?: Array<IIoK8sApiCoreV1NamespaceCondition>;
/**
 * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
 */
"phase"?: string;
}

/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
export class NamespaceStatus extends Model<INamespaceStatus> implements INamespaceStatus {
  "conditions"?: Array<IIoK8sApiCoreV1NamespaceCondition>;
"phase"?: string;

constructor(data?: ModelData<INamespaceStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NamespaceStatus, validate as ValidateFunc<INamespaceStatus>);

export type {
  INamespaceStatus as IIoK8sApiCoreV1NamespaceStatus,
  NamespaceStatus as IoK8sApiCoreV1NamespaceStatus
};
