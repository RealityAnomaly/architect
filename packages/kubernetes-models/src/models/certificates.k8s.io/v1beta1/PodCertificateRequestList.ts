import { IIoK8sApiCertificatesV1beta1PodCertificateRequest } from "./PodCertificateRequest.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/certificates.k8s.io/v1beta1/PodCertificateRequestList.js";

/**
 * PodCertificateRequestList is a collection of PodCertificateRequest objects
 */
export interface IPodCertificateRequestList extends TypeMeta {
  "apiVersion": "certificates.k8s.io/v1beta1";
/**
 * items is a collection of PodCertificateRequest objects
 */
"items": Array<IIoK8sApiCertificatesV1beta1PodCertificateRequest>;
"kind": "PodCertificateRequestList";
/**
 * metadata contains the list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodCertificateRequestList is a collection of PodCertificateRequest objects
 */
export class PodCertificateRequestList extends Model<IPodCertificateRequestList> implements IPodCertificateRequestList {
  "apiVersion": IPodCertificateRequestList["apiVersion"];
"items": Array<IIoK8sApiCertificatesV1beta1PodCertificateRequest>;
"kind": IPodCertificateRequestList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPodCertificateRequestList["apiVersion"] = "certificates.k8s.io/v1beta1";
static kind: IPodCertificateRequestList["kind"] = "PodCertificateRequestList";
static is: TypeMetaGuard<IPodCertificateRequestList> = createTypeMetaGuard<IPodCertificateRequestList>(PodCertificateRequestList);

constructor(data?: ModelData<IPodCertificateRequestList>) {
  super();

  this.setDefinedProps({
    apiVersion: PodCertificateRequestList.apiVersion,
    kind: PodCertificateRequestList.kind,
    ...data
  } as IPodCertificateRequestList);
}
}

setValidateFunc(PodCertificateRequestList, validate as ValidateFunc<IPodCertificateRequestList>);

export type {
  IPodCertificateRequestList as IIoK8sApiCertificatesV1beta1PodCertificateRequestList,
  PodCertificateRequestList as IoK8sApiCertificatesV1beta1PodCertificateRequestList
};
