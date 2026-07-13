import { IIoK8sApiAuditregistrationV1alpha1AuditSink } from "./AuditSink.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/auditregistration.k8s.io/v1alpha1/AuditSinkList.js";

/**
 * AuditSinkList is a list of AuditSink items.
 */
export interface IAuditSinkList extends TypeMeta {
  "apiVersion": "auditregistration.k8s.io/v1alpha1";
/**
 * List of audit configurations.
 */
"items": Array<IIoK8sApiAuditregistrationV1alpha1AuditSink>;
"kind": "AuditSinkList";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * AuditSinkList is a list of AuditSink items.
 */
export class AuditSinkList extends Model<IAuditSinkList> implements IAuditSinkList {
  "apiVersion": IAuditSinkList["apiVersion"];
"items": Array<IIoK8sApiAuditregistrationV1alpha1AuditSink>;
"kind": IAuditSinkList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IAuditSinkList["apiVersion"] = "auditregistration.k8s.io/v1alpha1";
static kind: IAuditSinkList["kind"] = "AuditSinkList";
static is: TypeMetaGuard<IAuditSinkList> = createTypeMetaGuard<IAuditSinkList>(AuditSinkList);

constructor(data?: ModelData<IAuditSinkList>) {
  super();

  this.setDefinedProps({
    apiVersion: AuditSinkList.apiVersion,
    kind: AuditSinkList.kind,
    ...data
  } as IAuditSinkList);
}
}

setValidateFunc(AuditSinkList, validate as ValidateFunc<IAuditSinkList>);

export type {
  IAuditSinkList as IIoK8sApiAuditregistrationV1alpha1AuditSinkList,
  AuditSinkList as IoK8sApiAuditregistrationV1alpha1AuditSinkList
};
