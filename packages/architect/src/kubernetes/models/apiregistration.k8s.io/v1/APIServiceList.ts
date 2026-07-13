import { IIoK8sKubeAggregatorPkgApisApiregistrationV1APIService } from "./APIService.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList.js";

/**
 * APIServiceList is a list of APIService objects.
 */
export interface IAPIServiceList extends TypeMeta {
  "apiVersion": "apiregistration.k8s.io/v1";
/**
 * Items is the list of APIService
 */
"items": Array<IIoK8sKubeAggregatorPkgApisApiregistrationV1APIService>;
"kind": "APIServiceList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * APIServiceList is a list of APIService objects.
 */
export class APIServiceList extends Model<IAPIServiceList> implements IAPIServiceList {
  "apiVersion": IAPIServiceList["apiVersion"];
"items": Array<IIoK8sKubeAggregatorPkgApisApiregistrationV1APIService>;
"kind": IAPIServiceList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IAPIServiceList["apiVersion"] = "apiregistration.k8s.io/v1";
static kind: IAPIServiceList["kind"] = "APIServiceList";
static is = createTypeMetaGuard<IAPIServiceList>(APIServiceList);

constructor(data?: ModelData<IAPIServiceList>) {
  super();

  this.setDefinedProps({
    apiVersion: APIServiceList.apiVersion,
    kind: APIServiceList.kind,
    ...data
  } as IAPIServiceList);
}
}

setValidateFunc(APIServiceList, validate as ValidateFunc<IAPIServiceList>);

export type {
  IAPIServiceList as IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList,
  APIServiceList as IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList
};
