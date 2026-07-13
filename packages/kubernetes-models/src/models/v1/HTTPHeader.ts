import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/HTTPHeader.js";

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export interface IHTTPHeader {
  /**
 * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
 */
"name": string;
/**
 * The header field value
 */
"value": string;
}

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export class HTTPHeader extends Model<IHTTPHeader> implements IHTTPHeader {
  "name": string;
"value": string;

constructor(data?: ModelData<IHTTPHeader>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(HTTPHeader, validate as ValidateFunc<IHTTPHeader>);

export type {
  IHTTPHeader as IIoK8sApiCoreV1HTTPHeader,
  HTTPHeader as IoK8sApiCoreV1HTTPHeader
};
