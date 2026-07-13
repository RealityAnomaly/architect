import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAuditregistrationV1alpha1AuditSinkSpec } from "./AuditSinkSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/auditregistration.k8s.io/v1alpha1/AuditSink.js";

/**
 * AuditSink represents a cluster level audit sink
 */
export interface IAuditSink extends TypeMeta {
  "apiVersion": "auditregistration.k8s.io/v1alpha1";
"kind": "AuditSink";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the audit configuration spec
 */
"spec"?: IIoK8sApiAuditregistrationV1alpha1AuditSinkSpec;
}

/**
 * AuditSink represents a cluster level audit sink
 */
export class AuditSink extends Model<IAuditSink> implements IAuditSink {
  "apiVersion": IAuditSink["apiVersion"];
"kind": IAuditSink["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAuditregistrationV1alpha1AuditSinkSpec;

static apiVersion: IAuditSink["apiVersion"] = "auditregistration.k8s.io/v1alpha1";
static kind: IAuditSink["kind"] = "AuditSink";
static is: TypeMetaGuard<IAuditSink> = createTypeMetaGuard<IAuditSink>(AuditSink);

constructor(data?: ModelData<IAuditSink>) {
  super();

  this.setDefinedProps({
    apiVersion: AuditSink.apiVersion,
    kind: AuditSink.kind,
    ...data
  } as IAuditSink);
}
}

setValidateFunc(AuditSink, validate as ValidateFunc<IAuditSink>);

export type {
  IAuditSink as IIoK8sApiAuditregistrationV1alpha1AuditSink,
  AuditSink as IoK8sApiAuditregistrationV1alpha1AuditSink
};
