import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps } from "./JSONSchemaProps.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation.js";

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export interface ICustomResourceValidation {
  /**
 * openAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning.
 */
"openAPIV3Schema"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps;
}

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export class CustomResourceValidation extends Model<ICustomResourceValidation> implements ICustomResourceValidation {
  "openAPIV3Schema"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps;

constructor(data?: ModelData<ICustomResourceValidation>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CustomResourceValidation, validate as ValidateFunc<ICustomResourceValidation>);

export type {
  ICustomResourceValidation as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation,
  CustomResourceValidation as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation
};
