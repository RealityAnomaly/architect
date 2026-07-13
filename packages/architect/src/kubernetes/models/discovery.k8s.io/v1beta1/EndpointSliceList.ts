import { IIoK8sApiDiscoveryV1beta1EndpointSlice } from "./EndpointSlice.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiDiscoveryV1beta1EndpointSliceList.js";

/**
 * EndpointSliceList represents a list of endpoint slices
 */
export interface IEndpointSliceList extends TypeMeta {
  "apiVersion": "discovery.k8s.io/v1beta1";
/**
 * List of endpoint slices
 */
"items": Array<IIoK8sApiDiscoveryV1beta1EndpointSlice>;
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
"items": Array<IIoK8sApiDiscoveryV1beta1EndpointSlice>;
"kind": IEndpointSliceList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IEndpointSliceList["apiVersion"] = "discovery.k8s.io/v1beta1";
static kind: IEndpointSliceList["kind"] = "EndpointSliceList";
static is = createTypeMetaGuard<IEndpointSliceList>(EndpointSliceList);

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
  IEndpointSliceList as IIoK8sApiDiscoveryV1beta1EndpointSliceList,
  EndpointSliceList as IoK8sApiDiscoveryV1beta1EndpointSliceList
};
