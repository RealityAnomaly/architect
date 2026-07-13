import { IIoK8sApiNetworkingV1IPAddress } from "./IPAddress.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1IPAddressList.js";

/**
 * IPAddressList contains a list of IPAddress.
 */
export interface IIPAddressList extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1";
/**
 * items is the list of IPAddresses.
 */
"items": Array<IIoK8sApiNetworkingV1IPAddress>;
"kind": "IPAddressList";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * IPAddressList contains a list of IPAddress.
 */
export class IPAddressList extends Model<IIPAddressList> implements IIPAddressList {
  "apiVersion": IIPAddressList["apiVersion"];
"items": Array<IIoK8sApiNetworkingV1IPAddress>;
"kind": IIPAddressList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIPAddressList["apiVersion"] = "networking.k8s.io/v1";
static kind: IIPAddressList["kind"] = "IPAddressList";
static is = createTypeMetaGuard<IIPAddressList>(IPAddressList);

constructor(data?: ModelData<IIPAddressList>) {
  super();

  this.setDefinedProps({
    apiVersion: IPAddressList.apiVersion,
    kind: IPAddressList.kind,
    ...data
  } as IIPAddressList);
}
}

setValidateFunc(IPAddressList, validate as ValidateFunc<IIPAddressList>);

export type {
  IIPAddressList as IIoK8sApiNetworkingV1IPAddressList,
  IPAddressList as IoK8sApiNetworkingV1IPAddressList
};
