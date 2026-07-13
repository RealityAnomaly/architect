import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apiextensions.k8s.io/v1beta1/ExternalDocumentation.js";

/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 */
export interface IExternalDocumentation {
  "description"?: string;
"url"?: string;
}

/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 */
export class ExternalDocumentation extends Model<IExternalDocumentation> implements IExternalDocumentation {
  "description"?: string;
"url"?: string;

constructor(data?: ModelData<IExternalDocumentation>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ExternalDocumentation, validate as ValidateFunc<IExternalDocumentation>);

export type {
  IExternalDocumentation as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation,
  ExternalDocumentation as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation
};
