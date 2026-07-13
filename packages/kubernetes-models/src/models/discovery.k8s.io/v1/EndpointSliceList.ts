import { IIoK8sApiDiscoveryV1EndpointSlice } from "./EndpointSlice.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/discovery.k8s.io/v1/EndpointSliceList.js";

/**
 * EndpointSliceList represents a list of endpoint slices
 */
export interface IEndpointSliceList extends TypeMeta {
  "apiVersion": "discovery.k8s.io/v1";
/**
 * items is the list of endpoint slices
 */
"items": Array<IIoK8sApiDiscoveryV1EndpointSlice>;
"kind": "EndpointSliceList";
/**
 * Standard list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * EndpointSliceList represents a list of endpoint slices
 */
export class EndpointSliceList extends Model<IEndpointSliceList> implements IEndpointSliceList {
  "apiVersion": IEndpointSliceList["apiVersion"];
"items": Array<IIoK8sApiDiscoveryV1EndpointSlice>;
"kind": IEndpointSliceList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IEndpointSliceList["apiVersion"] = "discovery.k8s.io/v1";
static kind: IEndpointSliceList["kind"] = "EndpointSliceList";
static is: TypeMetaGuard<IEndpointSliceList> = createTypeMetaGuard<IEndpointSliceList>(EndpointSliceList);

constructor(data?: ModelData<IEndpointSliceList>) {
  super();

  this.setDefinedProps({
    apiVersion: EndpointSliceList.apiVersion,
    kind: EndpointSliceList.kind,
    ...data
  } as IEndpointSliceList);
}
}

setValidateFunc(EndpointSliceList, validate as ValidateFunc<IEndpointSliceList>);

export type {
  IEndpointSliceList as IIoK8sApiDiscoveryV1EndpointSliceList,
  EndpointSliceList as IoK8sApiDiscoveryV1EndpointSliceList
};
