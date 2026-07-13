import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition } from "./CustomResourceDefinition.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apiextensions.k8s.io/v1beta1/CustomResourceDefinitionList.js";

/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
export interface ICustomResourceDefinitionList extends TypeMeta {
  "apiVersion": "apiextensions.k8s.io/v1beta1";
/**
 * items list individual CustomResourceDefinition objects
 */
"items": Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition>;
"kind": "CustomResourceDefinitionList";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
export class CustomResourceDefinitionList extends Model<ICustomResourceDefinitionList> implements ICustomResourceDefinitionList {
  "apiVersion": ICustomResourceDefinitionList["apiVersion"];
"items": Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition>;
"kind": ICustomResourceDefinitionList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ICustomResourceDefinitionList["apiVersion"] = "apiextensions.k8s.io/v1beta1";
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
  ICustomResourceDefinitionList as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList,
  CustomResourceDefinitionList as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList
};
