import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1IngressTLS.js";

/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
export interface IIngressTLS {
  /**
 * Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
 */
"hosts"?: Array<string>;
/**
 * SecretName is the name of the secret used to terminate SSL traffic on 443. Field is left optional to allow SSL routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
 */
"secretName"?: string;
}

/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
export class IngressTLS extends Model<IIngressTLS> implements IIngressTLS {
  "hosts"?: Array<string>;
"secretName"?: string;

constructor(data?: ModelData<IIngressTLS>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressTLS, validate as ValidateFunc<IIngressTLS>);

export type {
  IIngressTLS as IIoK8sApiExtensionsV1beta1IngressTLS,
  IngressTLS as IoK8sApiExtensionsV1beta1IngressTLS
};
