import { IIoK8sApiAuditregistrationV1alpha1Policy } from "./Policy.ts";
import { IIoK8sApiAuditregistrationV1alpha1Webhook } from "./Webhook.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuditregistrationV1alpha1AuditSinkSpec.js";

/**
 * AuditSinkSpec holds the spec for the audit sink
 */
export interface IAuditSinkSpec {
  /**
 * Policy defines the policy for selecting which events should be sent to the webhook required
 */
"policy": IIoK8sApiAuditregistrationV1alpha1Policy;
/**
 * Webhook to send events required
 */
"webhook": IIoK8sApiAuditregistrationV1alpha1Webhook;
}

/**
 * AuditSinkSpec holds the spec for the audit sink
 */
export class AuditSinkSpec extends Model<IAuditSinkSpec> implements IAuditSinkSpec {
  "policy": IIoK8sApiAuditregistrationV1alpha1Policy;
"webhook": IIoK8sApiAuditregistrationV1alpha1Webhook;

constructor(data?: ModelData<IAuditSinkSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AuditSinkSpec, validate as ValidateFunc<IAuditSinkSpec>);

export type {
  IAuditSinkSpec as IIoK8sApiAuditregistrationV1alpha1AuditSinkSpec,
  AuditSinkSpec as IoK8sApiAuditregistrationV1alpha1AuditSinkSpec
};
