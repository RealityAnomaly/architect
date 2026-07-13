import { IIoK8sApiNetworkingV1beta1HTTPIngressPath } from "./HTTPIngressPath.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1beta1/HTTPIngressRuleValue.js";

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
export interface IHTTPIngressRuleValue {
  /**
 * A collection of paths that map requests to backends.
 */
"paths": Array<IIoK8sApiNetworkingV1beta1HTTPIngressPath>;
}

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
export class HTTPIngressRuleValue extends Model<IHTTPIngressRuleValue> implements IHTTPIngressRuleValue {
  "paths": Array<IIoK8sApiNetworkingV1beta1HTTPIngressPath>;

constructor(data?: ModelData<IHTTPIngressRuleValue>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(HTTPIngressRuleValue, validate as ValidateFunc<IHTTPIngressRuleValue>);

export type {
  IHTTPIngressRuleValue as IIoK8sApiNetworkingV1beta1HTTPIngressRuleValue,
  HTTPIngressRuleValue as IoK8sApiNetworkingV1beta1HTTPIngressRuleValue
};
