import { IIoK8sApiAdmissionregistrationV1alpha1ApplyConfiguration } from "./ApplyConfiguration.ts";
import { IIoK8sApiAdmissionregistrationV1alpha1JSONPatch } from "./JSONPatch.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1alpha1Mutation.js";

/**
 * Mutation specifies the CEL expression which is used to apply the Mutation.
 */
export interface IMutation {
  /**
 * applyConfiguration defines the desired configuration values of an object. The configuration is applied to the admission object using [structured merge diff](https://github.com/kubernetes-sigs/structured-merge-diff). A CEL expression is used to create apply configuration.
 */
"applyConfiguration"?: IIoK8sApiAdmissionregistrationV1alpha1ApplyConfiguration;
/**
 * jsonPatch defines a [JSON patch](https://jsonpatch.com/) operation to perform a mutation to the object. A CEL expression is used to create the JSON patch.
 */
"jsonPatch"?: IIoK8sApiAdmissionregistrationV1alpha1JSONPatch;
/**
 * patchType indicates the patch strategy used. Allowed values are "ApplyConfiguration" and "JSONPatch". Required.
 */
"patchType": string;
}

/**
 * Mutation specifies the CEL expression which is used to apply the Mutation.
 */
export class Mutation extends Model<IMutation> implements IMutation {
  "applyConfiguration"?: IIoK8sApiAdmissionregistrationV1alpha1ApplyConfiguration;
"jsonPatch"?: IIoK8sApiAdmissionregistrationV1alpha1JSONPatch;
"patchType": string;

constructor(data?: ModelData<IMutation>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Mutation, validate as ValidateFunc<IMutation>);

export type {
  IMutation as IIoK8sApiAdmissionregistrationV1alpha1Mutation,
  Mutation as IoK8sApiAdmissionregistrationV1alpha1Mutation
};
