import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAdmissionregistrationV1MutatingWebhook } from "./MutatingWebhook.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/admissionregistration.k8s.io/v1/MutatingWebhookConfiguration.js";

/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 */
export interface IMutatingWebhookConfiguration extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1";
"kind": "MutatingWebhookConfiguration";
/**
 * metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * webhooks is a list of webhooks and the affected resources and operations.
 */
"webhooks"?: Array<IIoK8sApiAdmissionregistrationV1MutatingWebhook>;
}

/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 */
export class MutatingWebhookConfiguration extends Model<IMutatingWebhookConfiguration> implements IMutatingWebhookConfiguration {
  "apiVersion": IMutatingWebhookConfiguration["apiVersion"];
"kind": IMutatingWebhookConfiguration["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"webhooks"?: Array<IIoK8sApiAdmissionregistrationV1MutatingWebhook>;

static apiVersion: IMutatingWebhookConfiguration["apiVersion"] = "admissionregistration.k8s.io/v1";
static kind: IMutatingWebhookConfiguration["kind"] = "MutatingWebhookConfiguration";
static is: TypeMetaGuard<IMutatingWebhookConfiguration> = createTypeMetaGuard<IMutatingWebhookConfiguration>(MutatingWebhookConfiguration);

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
  IMutatingWebhookConfiguration as IIoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration,
  MutatingWebhookConfiguration as IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration
};
