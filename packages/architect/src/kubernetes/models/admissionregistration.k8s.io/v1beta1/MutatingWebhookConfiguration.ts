import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAdmissionregistrationV1beta1MutatingWebhook } from "./MutatingWebhook.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration.js";

/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 MutatingWebhookConfiguration instead.
 * @deprecated
 */
export interface IMutatingWebhookConfiguration extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1beta1";
"kind": "MutatingWebhookConfiguration";
/**
 * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Webhooks is a list of webhooks and the affected resources and operations.
 */
"webhooks"?: Array<IIoK8sApiAdmissionregistrationV1beta1MutatingWebhook>;
}

/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 MutatingWebhookConfiguration instead.
 * @deprecated
 */
export class MutatingWebhookConfiguration extends Model<IMutatingWebhookConfiguration> implements IMutatingWebhookConfiguration {
  "apiVersion": IMutatingWebhookConfiguration["apiVersion"];
"kind": IMutatingWebhookConfiguration["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"webhooks"?: Array<IIoK8sApiAdmissionregistrationV1beta1MutatingWebhook>;

static apiVersion: IMutatingWebhookConfiguration["apiVersion"] = "admissionregistration.k8s.io/v1beta1";
static kind: IMutatingWebhookConfiguration["kind"] = "MutatingWebhookConfiguration";
static is = createTypeMetaGuard<IMutatingWebhookConfiguration>(MutatingWebhookConfiguration);

constructor(data?: ModelData<IMutatingWebhookConfiguration>) {
  super();

  this.setDefinedProps({
    apiVersion: MutatingWebhookConfiguration.apiVersion,
    kind: MutatingWebhookConfiguration.kind,
    ...data
  } as IMutatingWebhookConfiguration);
}
}

setValidateFunc(MutatingWebhookConfiguration, validate as ValidateFunc<IMutatingWebhookConfiguration>);

export type {
  IMutatingWebhookConfiguration as IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration,
  MutatingWebhookConfiguration as IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration
};
