import { IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration } from "./MutatingWebhookConfiguration.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationList.js";

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export interface IMutatingWebhookConfigurationList extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1beta1";
/**
 * List of MutatingWebhookConfiguration.
 */
"items": Array<IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration>;
"kind": "MutatingWebhookConfigurationList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export class MutatingWebhookConfigurationList extends Model<IMutatingWebhookConfigurationList> implements IMutatingWebhookConfigurationList {
  "apiVersion": IMutatingWebhookConfigurationList["apiVersion"];
"items": Array<IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration>;
"kind": IMutatingWebhookConfigurationList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IMutatingWebhookConfigurationList["apiVersion"] = "admissionregistration.k8s.io/v1beta1";
static kind: IMutatingWebhookConfigurationList["kind"] = "MutatingWebhookConfigurationList";
static is = createTypeMetaGuard<IMutatingWebhookConfigurationList>(MutatingWebhookConfigurationList);

constructor(data?: ModelData<IMutatingWebhookConfigurationList>) {
  super();

  this.setDefinedProps({
    apiVersion: MutatingWebhookConfigurationList.apiVersion,
    kind: MutatingWebhookConfigurationList.kind,
    ...data
  } as IMutatingWebhookConfigurationList);
}
}

setValidateFunc(MutatingWebhookConfigurationList, validate as ValidateFunc<IMutatingWebhookConfigurationList>);

export type {
  IMutatingWebhookConfigurationList as IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationList,
  MutatingWebhookConfigurationList as IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationList
};
