import { IIoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding } from "./MutatingAdmissionPolicyBinding.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicyBindingList.js";

/**
 * MutatingAdmissionPolicyBindingList is a list of MutatingAdmissionPolicyBinding.
 */
export interface IMutatingAdmissionPolicyBindingList extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1alpha1";
/**
 * List of PolicyBinding.
 */
"items": Array<IIoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding>;
"kind": "MutatingAdmissionPolicyBindingList";
/**
 * metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * MutatingAdmissionPolicyBindingList is a list of MutatingAdmissionPolicyBinding.
 */
export class MutatingAdmissionPolicyBindingList extends Model<IMutatingAdmissionPolicyBindingList> implements IMutatingAdmissionPolicyBindingList {
  "apiVersion": IMutatingAdmissionPolicyBindingList["apiVersion"];
"items": Array<IIoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding>;
"kind": IMutatingAdmissionPolicyBindingList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IMutatingAdmissionPolicyBindingList["apiVersion"] = "admissionregistration.k8s.io/v1alpha1";
static kind: IMutatingAdmissionPolicyBindingList["kind"] = "MutatingAdmissionPolicyBindingList";
static is = createTypeMetaGuard<IMutatingAdmissionPolicyBindingList>(MutatingAdmissionPolicyBindingList);

constructor(data?: ModelData<IMutatingAdmissionPolicyBindingList>) {
  super();

  this.setDefinedProps({
    apiVersion: MutatingAdmissionPolicyBindingList.apiVersion,
    kind: MutatingAdmissionPolicyBindingList.kind,
    ...data
  } as IMutatingAdmissionPolicyBindingList);
}
}

setValidateFunc(MutatingAdmissionPolicyBindingList, validate as ValidateFunc<IMutatingAdmissionPolicyBindingList>);

export type {
  IMutatingAdmissionPolicyBindingList as IIoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicyBindingList,
  MutatingAdmissionPolicyBindingList as IoK8sApiAdmissionregistrationV1alpha1MutatingAdmissionPolicyBindingList
};
