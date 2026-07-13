import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhook } from "./ValidatingWebhook.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/admissionregistration.k8s.io/v1beta1/ValidatingWebhookConfiguration.js";

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 ValidatingWebhookConfiguration instead.
 * @deprecated
 */
export interface IValidatingWebhookConfiguration extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1beta1";
"kind": "ValidatingWebhookConfiguration";
/**
 * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Webhooks is a list of webhooks and the affected resources and operations.
 */
"webhooks"?: Array<IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhook>;
}

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 ValidatingWebhookConfiguration instead.
 * @deprecated
 */
export class ValidatingWebhookConfiguration extends Model<IValidatingWebhookConfiguration> implements IValidatingWebhookConfiguration {
  "apiVersion": IValidatingWebhookConfiguration["apiVersion"];
"kind": IValidatingWebhookConfiguration["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"webhooks"?: Array<IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhook>;

static apiVersion: IValidatingWebhookConfiguration["apiVersion"] = "admissionregistration.k8s.io/v1beta1";
static kind: IValidatingWebhookConfiguration["kind"] = "ValidatingWebhookConfiguration";
static is: TypeMetaGuard<IValidatingWebhookConfiguration> = createTypeMetaGuard<IValidatingWebhookConfiguration>(ValidatingWebhookConfiguration);

constructor(data?: ModelData<IValidatingWebhookConfiguration>) {
  super();

  this.setDefinedProps({
    apiVersion: ValidatingWebhookConfiguration.apiVersion,
    kind: ValidatingWebhookConfiguration.kind,
    ...data
  } as IValidatingWebhookConfiguration);
}
}

setValidateFunc(ValidatingWebhookConfiguration, validate as ValidateFunc<IValidatingWebhookConfiguration>);

export type {
  IValidatingWebhookConfiguration as IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration,
  ValidatingWebhookConfiguration as IoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration
};
