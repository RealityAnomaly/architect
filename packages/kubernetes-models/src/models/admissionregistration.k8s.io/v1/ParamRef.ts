import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/admissionregistration.k8s.io/v1/ParamRef.js";

/**
 * ParamRef describes how to locate the params to be used as input to expressions of rules applied by a policy binding.
 */
export interface IParamRef {
  /**
 * name is the name of the resource being referenced.
 * 
 * One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.
 * 
 * A single parameter used for all admission requests can be configured by setting the `name` field, leaving `selector` blank, and setting namespace if `paramKind` is namespace-scoped.
 */
"name"?: string;
/**
 * namespace is the namespace of the referenced resource. Allows limiting the search for params to a specific namespace. Applies to both `name` and `selector` fields.
 * 
 * A per-namespace parameter may be used by specifying a namespace-scoped `paramKind` in the policy and leaving this field empty.
 * 
 * - If `paramKind` is cluster-scoped, this field MUST be unset. Setting this field results in a configuration error.
 * 
 * - If `paramKind` is namespace-scoped, the namespace of the object being evaluated for admission will be used when this field is left unset. Take care that if this is left empty the binding must not match any cluster-scoped resources, which will result in an error.
 */
"namespace"?: string;
/**
 * parameterNotFoundAction controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.
 * 
 * Allowed values are `Allow` or `Deny`
 * 
 * Required
 */
"parameterNotFoundAction"?: string;
/**
 * selector can be used to match multiple param objects based on their labels. Supply selector: {} to match all resources of the ParamKind.
 * 
 * If multiple params are found, they are all evaluated with the policy expressions and the results are ANDed together.
 * 
 * One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * ParamRef describes how to locate the params to be used as input to expressions of rules applied by a policy binding.
 */
export class ParamRef extends Model<IParamRef> implements IParamRef {
  "name"?: string;
"namespace"?: string;
"parameterNotFoundAction"?: string;
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

constructor(data?: ModelData<IParamRef>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ParamRef, validate as ValidateFunc<IParamRef>);

export type {
  IParamRef as IIoK8sApiAdmissionregistrationV1ParamRef,
  ParamRef as IoK8sApiAdmissionregistrationV1ParamRef
};
