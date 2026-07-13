import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition } from "./CustomResourceDefinition.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apiextensions.k8s.io/v1/CustomResourceDefinitionList.js";

/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
export interface ICustomResourceDefinitionList extends TypeMeta {
  "apiVersion": "apiextensions.k8s.io/v1";
/**
 * items list individual CustomResourceDefinition objects
 */
"items": Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition>;
"kind": "CustomResourceDefinitionList";
/**
 * Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
export class CustomResourceDefinitionList extends Model<ICustomResourceDefinitionList> implements ICustomResourceDefinitionList {
  "apiVersion": ICustomResourceDefinitionList["apiVersion"];
"items": Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition>;
"kind": ICustomResourceDefinitionList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ICustomResourceDefinitionList["apiVersion"] = "apiextensions.k8s.io/v1";
static kind: ICustomResourceDefinitionList["kind"] = "CustomResourceDefinitionList";
static is: TypeMetaGuard<ICustomResourceDefinitionList> = createTypeMetaGuard<ICustomResourceDefinitionList>(CustomResourceDefinitionList);

constructor(data?: ModelData<ICustomResourceDefinitionList>) {
  super();

  this.setDefinedProps({
    apiVersion: CustomResourceDefinitionList.apiVersion,
    kind: CustomResourceDefinitionList.kind,
    ...data
  } as ICustomResourceDefinitionList);
}
}

setValidateFunc(CustomResourceDefinitionList, validate as ValidateFunc<ICustomResourceDefinitionList>);

export type {
  ICustomResourceDefinitionList as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList,
  CustomResourceDefinitionList as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList
};
