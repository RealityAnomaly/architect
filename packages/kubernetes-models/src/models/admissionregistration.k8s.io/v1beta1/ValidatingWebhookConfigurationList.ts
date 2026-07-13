import { IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration } from "./ValidatingWebhookConfiguration.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/admissionregistration.k8s.io/v1beta1/ValidatingWebhookConfigurationList.js";

/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 */
export interface IValidatingWebhookConfigurationList extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1beta1";
/**
 * List of ValidatingWebhookConfiguration.
 */
"items": Array<IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration>;
"kind": "ValidatingWebhookConfigurationList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 */
export class ValidatingWebhookConfigurationList extends Model<IValidatingWebhookConfigurationList> implements IValidatingWebhookConfigurationList {
  "apiVersion": IValidatingWebhookConfigurationList["apiVersion"];
"items": Array<IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration>;
"kind": IValidatingWebhookConfigurationList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IValidatingWebhookConfigurationList["apiVersion"] = "admissionregistration.k8s.io/v1beta1";
static kind: IValidatingWebhookConfigurationList["kind"] = "ValidatingWebhookConfigurationList";
static is: TypeMetaGuard<IValidatingWebhookConfigurationList> = createTypeMetaGuard<IValidatingWebhookConfigurationList>(ValidatingWebhookConfigurationList);

constructor(data?: ModelData<IValidatingWebhookConfigurationList>) {
  super();

  this.setDefinedProps({
    apiVersion: ValidatingWebhookConfigurationList.apiVersion,
    kind: ValidatingWebhookConfigurationList.kind,
    ...data
  } as IValidatingWebhookConfigurationList);
}
}

setValidateFunc(ValidatingWebhookConfigurationList, validate as ValidateFunc<IValidatingWebhookConfigurationList>);

export type {
  IValidatingWebhookConfigurationList as IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfigurationList,
  ValidatingWebhookConfigurationList as IoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfigurationList
};
