import { IIoK8sApiCoreV1Namespace } from "./Namespace.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/NamespaceList.js";

/**
 * NamespaceList is a list of Namespaces.
 */
export interface INamespaceList extends TypeMeta {
  "apiVersion": "v1";
/**
 * Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
 */
"items": Array<IIoK8sApiCoreV1Namespace>;
"kind": "NamespaceList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * NamespaceList is a list of Namespaces.
 */
export class NamespaceList extends Model<INamespaceList> implements INamespaceList {
  "apiVersion": INamespaceList["apiVersion"];
"items": Array<IIoK8sApiCoreV1Namespace>;
"kind": INamespaceList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: INamespaceList["apiVersion"] = "v1";
static kind: INamespaceList["kind"] = "NamespaceList";
static is: TypeMetaGuard<INamespaceList> = createTypeMetaGuard<INamespaceList>(NamespaceList);

constructor(data?: ModelData<INamespaceList>) {
  super();

  this.setDefinedProps({
    apiVersion: NamespaceList.apiVersion,
    kind: NamespaceList.kind,
    ...data
  } as INamespaceList);
}
}

setValidateFunc(NamespaceList, validate as ValidateFunc<INamespaceList>);

export type {
  INamespaceList as IIoK8sApiCoreV1NamespaceList,
  NamespaceList as IoK8sApiCoreV1NamespaceList
};
