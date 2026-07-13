import { IIoK8sApiCoreV1Secret } from "./Secret.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/SecretList.js";

/**
 * SecretList is a list of Secret.
 */
export interface ISecretList extends TypeMeta {
  "apiVersion": "v1";
/**
 * Items is a list of secret objects. More info: https://kubernetes.io/docs/concepts/configuration/secret
 */
"items": Array<IIoK8sApiCoreV1Secret>;
"kind": "SecretList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * SecretList is a list of Secret.
 */
export class SecretList extends Model<ISecretList> implements ISecretList {
  "apiVersion": ISecretList["apiVersion"];
"items": Array<IIoK8sApiCoreV1Secret>;
"kind": ISecretList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ISecretList["apiVersion"] = "v1";
static kind: ISecretList["kind"] = "SecretList";
static is: TypeMetaGuard<ISecretList> = createTypeMetaGuard<ISecretList>(SecretList);

constructor(data?: ModelData<ISecretList>) {
  super();

  this.setDefinedProps({
    apiVersion: SecretList.apiVersion,
    kind: SecretList.kind,
    ...data
  } as ISecretList);
}
}

setValidateFunc(SecretList, validate as ValidateFunc<ISecretList>);

export type {
  ISecretList as IIoK8sApiCoreV1SecretList,
  SecretList as IoK8sApiCoreV1SecretList
};
