import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec } from "./CustomResourceDefinitionSpec.ts";
import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus } from "./CustomResourceDefinitionStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apiextensions.k8s.io/v1/CustomResourceDefinition.js";

/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 */
export interface ICustomResourceDefinition extends TypeMeta {
  "apiVersion": "apiextensions.k8s.io/v1";
"kind": "CustomResourceDefinition";
/**
 * Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec describes how the user wants the resources to appear
 */
"spec": IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec;
/**
 * status indicates the actual state of the CustomResourceDefinition
 */
"status"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus;
}

/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 */
export class CustomResourceDefinition extends Model<ICustomResourceDefinition> implements ICustomResourceDefinition {
  "apiVersion": ICustomResourceDefinition["apiVersion"];
"kind": ICustomResourceDefinition["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec;
"status"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus;

static apiVersion: ICustomResourceDefinition["apiVersion"] = "apiextensions.k8s.io/v1";
static kind: ICustomResourceDefinition["kind"] = "CustomResourceDefinition";
static is: TypeMetaGuard<ICustomResourceDefinition> = createTypeMetaGuard<ICustomResourceDefinition>(CustomResourceDefinition);

constructor(data?: ModelData<ICustomResourceDefinition>) {
  super();

  this.setDefinedProps({
    apiVersion: CustomResourceDefinition.apiVersion,
    kind: CustomResourceDefinition.kind,
    ...data
  } as ICustomResourceDefinition);
}
}

setValidateFunc(CustomResourceDefinition, validate as ValidateFunc<ICustomResourceDefinition>);

export type {
  ICustomResourceDefinition as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition,
  CustomResourceDefinition as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition
};
