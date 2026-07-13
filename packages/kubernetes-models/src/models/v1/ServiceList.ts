import { IIoK8sApiCoreV1Service } from "./Service.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ServiceList.js";

/**
 * ServiceList holds a list of services.
 */
export interface IServiceList extends TypeMeta {
  "apiVersion": "v1";
/**
 * List of services
 */
"items": Array<IIoK8sApiCoreV1Service>;
"kind": "ServiceList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ServiceList holds a list of services.
 */
export class ServiceList extends Model<IServiceList> implements IServiceList {
  "apiVersion": IServiceList["apiVersion"];
"items": Array<IIoK8sApiCoreV1Service>;
"kind": IServiceList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IServiceList["apiVersion"] = "v1";
static kind: IServiceList["kind"] = "ServiceList";
static is: TypeMetaGuard<IServiceList> = createTypeMetaGuard<IServiceList>(ServiceList);

constructor(data?: ModelData<IServiceList>) {
  super();

  this.setDefinedProps({
    apiVersion: ServiceList.apiVersion,
    kind: ServiceList.kind,
    ...data
  } as IServiceList);
}
}

setValidateFunc(ServiceList, validate as ValidateFunc<IServiceList>);

export type {
  IServiceList as IIoK8sApiCoreV1ServiceList,
  ServiceList as IoK8sApiCoreV1ServiceList
};
