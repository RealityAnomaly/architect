import { IIoK8sApiAdmissionregistrationV1MutatingAdmissionPolicy } from "./MutatingAdmissionPolicy.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/admissionregistration.k8s.io/v1/MutatingAdmissionPolicyList.js";

/**
 * MutatingAdmissionPolicyList is a list of MutatingAdmissionPolicy.
 */
export interface IMutatingAdmissionPolicyList extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1";
/**
 * List of ValidatingAdmissionPolicy.
 */
"items": Array<IIoK8sApiAdmissionregistrationV1MutatingAdmissionPolicy>;
"kind": "MutatingAdmissionPolicyList";
/**
 * metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * MutatingAdmissionPolicyList is a list of MutatingAdmissionPolicy.
 */
export class MutatingAdmissionPolicyList extends Model<IMutatingAdmissionPolicyList> implements IMutatingAdmissionPolicyList {
  "apiVersion": IMutatingAdmissionPolicyList["apiVersion"];
"items": Array<IIoK8sApiAdmissionregistrationV1MutatingAdmissionPolicy>;
"kind": IMutatingAdmissionPolicyList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IMutatingAdmissionPolicyList["apiVersion"] = "admissionregistration.k8s.io/v1";
static kind: IMutatingAdmissionPolicyList["kind"] = "MutatingAdmissionPolicyList";
static is: TypeMetaGuard<IMutatingAdmissionPolicyList> = createTypeMetaGuard<IMutatingAdmissionPolicyList>(MutatingAdmissionPolicyList);

constructor(data?: ModelData<IMutatingAdmissionPolicyList>) {
  super();

  this.setDefinedProps({
    apiVersion: MutatingAdmissionPolicyList.apiVersion,
    kind: MutatingAdmissionPolicyList.kind,
    ...data
  } as IMutatingAdmissionPolicyList);
}
}

setValidateFunc(MutatingAdmissionPolicyList, validate as ValidateFunc<IMutatingAdmissionPolicyList>);

export type {
  IMutatingAdmissionPolicyList as IIoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyList,
  MutatingAdmissionPolicyList as IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyList
};
