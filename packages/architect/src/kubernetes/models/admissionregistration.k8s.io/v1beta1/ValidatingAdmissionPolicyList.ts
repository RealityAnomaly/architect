import { IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy } from "./ValidatingAdmissionPolicy.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList.js";

/**
 * ValidatingAdmissionPolicyList is a list of ValidatingAdmissionPolicy.
 */
export interface IValidatingAdmissionPolicyList extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1beta1";
/**
 * List of ValidatingAdmissionPolicy.
 */
"items": Array<IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy>;
"kind": "ValidatingAdmissionPolicyList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ValidatingAdmissionPolicyList is a list of ValidatingAdmissionPolicy.
 */
export class ValidatingAdmissionPolicyList extends Model<IValidatingAdmissionPolicyList> implements IValidatingAdmissionPolicyList {
  "apiVersion": IValidatingAdmissionPolicyList["apiVersion"];
"items": Array<IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy>;
"kind": IValidatingAdmissionPolicyList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IValidatingAdmissionPolicyList["apiVersion"] = "admissionregistration.k8s.io/v1beta1";
static kind: IValidatingAdmissionPolicyList["kind"] = "ValidatingAdmissionPolicyList";
static is = createTypeMetaGuard<IValidatingAdmissionPolicyList>(ValidatingAdmissionPolicyList);

constructor(data?: ModelData<IValidatingAdmissionPolicyList>) {
  super();

  this.setDefinedProps({
    apiVersion: ValidatingAdmissionPolicyList.apiVersion,
    kind: ValidatingAdmissionPolicyList.kind,
    ...data
  } as IValidatingAdmissionPolicyList);
}
}

setValidateFunc(ValidatingAdmissionPolicyList, validate as ValidateFunc<IValidatingAdmissionPolicyList>);

export type {
  IValidatingAdmissionPolicyList as IIoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList,
  ValidatingAdmissionPolicyList as IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList
};
