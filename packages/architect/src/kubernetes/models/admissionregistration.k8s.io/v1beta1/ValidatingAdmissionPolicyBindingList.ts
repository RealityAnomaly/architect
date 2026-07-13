import { IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding } from "./ValidatingAdmissionPolicyBinding.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList.js";

/**
 * ValidatingAdmissionPolicyBindingList is a list of ValidatingAdmissionPolicyBinding.
 */
export interface IValidatingAdmissionPolicyBindingList extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1beta1";
/**
 * List of PolicyBinding.
 */
"items": Array<IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding>;
"kind": "ValidatingAdmissionPolicyBindingList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ValidatingAdmissionPolicyBindingList is a list of ValidatingAdmissionPolicyBinding.
 */
export class ValidatingAdmissionPolicyBindingList extends Model<IValidatingAdmissionPolicyBindingList> implements IValidatingAdmissionPolicyBindingList {
  "apiVersion": IValidatingAdmissionPolicyBindingList["apiVersion"];
"items": Array<IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding>;
"kind": IValidatingAdmissionPolicyBindingList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IValidatingAdmissionPolicyBindingList["apiVersion"] = "admissionregistration.k8s.io/v1beta1";
static kind: IValidatingAdmissionPolicyBindingList["kind"] = "ValidatingAdmissionPolicyBindingList";
static is = createTypeMetaGuard<IValidatingAdmissionPolicyBindingList>(ValidatingAdmissionPolicyBindingList);

constructor(data?: ModelData<IValidatingAdmissionPolicyBindingList>) {
  super();

  this.setDefinedProps({
    apiVersion: ValidatingAdmissionPolicyBindingList.apiVersion,
    kind: ValidatingAdmissionPolicyBindingList.kind,
    ...data
  } as IValidatingAdmissionPolicyBindingList);
}
}

setValidateFunc(ValidatingAdmissionPolicyBindingList, validate as ValidateFunc<IValidatingAdmissionPolicyBindingList>);

export type {
  IValidatingAdmissionPolicyBindingList as IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList,
  ValidatingAdmissionPolicyBindingList as IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList
};
