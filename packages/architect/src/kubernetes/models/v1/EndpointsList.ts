import { IIoK8sApiCoreV1Endpoints } from "./Endpoints.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1EndpointsList.js";

/**
 * EndpointsList is a list of endpoints. Deprecated: This API is deprecated in v1.33+.
 * @deprecated
 */
export interface IEndpointsList extends TypeMeta {
  "apiVersion": "v1";
/**
 * List of endpoints.
 */
"items": Array<IIoK8sApiCoreV1Endpoints>;
"kind": "EndpointsList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * EndpointsList is a list of endpoints. Deprecated: This API is deprecated in v1.33+.
 * @deprecated
 */
export class EndpointsList extends Model<IEndpointsList> implements IEndpointsList {
  "apiVersion": IEndpointsList["apiVersion"];
"items": Array<IIoK8sApiCoreV1Endpoints>;
"kind": IEndpointsList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IEndpointsList["apiVersion"] = "v1";
static kind: IEndpointsList["kind"] = "EndpointsList";
static is = createTypeMetaGuard<IEndpointsList>(EndpointsList);

constructor(data?: ModelData<IEndpointsList>) {
  super();

  this.setDefinedProps({
    apiVersion: EndpointsList.apiVersion,
    kind: EndpointsList.kind,
    ...data
  } as IEndpointsList);
}
}

setValidateFunc(EndpointsList, validate as ValidateFunc<IEndpointsList>);

export type {
  IEndpointsList as IIoK8sApiCoreV1EndpointsList,
  EndpointsList as IoK8sApiCoreV1EndpointsList
};
