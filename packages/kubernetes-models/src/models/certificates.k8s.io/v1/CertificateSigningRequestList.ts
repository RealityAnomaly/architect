import { IIoK8sApiCertificatesV1CertificateSigningRequest } from "./CertificateSigningRequest.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/certificates.k8s.io/v1/CertificateSigningRequestList.js";

/**
 * CertificateSigningRequestList is a collection of CertificateSigningRequest objects
 */
export interface ICertificateSigningRequestList extends TypeMeta {
  "apiVersion": "certificates.k8s.io/v1";
/**
 * items is a collection of CertificateSigningRequest objects
 */
"items": Array<IIoK8sApiCertificatesV1CertificateSigningRequest>;
"kind": "CertificateSigningRequestList";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * CertificateSigningRequestList is a collection of CertificateSigningRequest objects
 */
export class CertificateSigningRequestList extends Model<ICertificateSigningRequestList> implements ICertificateSigningRequestList {
  "apiVersion": ICertificateSigningRequestList["apiVersion"];
"items": Array<IIoK8sApiCertificatesV1CertificateSigningRequest>;
"kind": ICertificateSigningRequestList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ICertificateSigningRequestList["apiVersion"] = "certificates.k8s.io/v1";
static kind: ICertificateSigningRequestList["kind"] = "CertificateSigningRequestList";
static is: TypeMetaGuard<ICertificateSigningRequestList> = createTypeMetaGuard<ICertificateSigningRequestList>(CertificateSigningRequestList);

constructor(data?: ModelData<ICertificateSigningRequestList>) {
  super();

  this.setDefinedProps({
    apiVersion: CertificateSigningRequestList.apiVersion,
    kind: CertificateSigningRequestList.kind,
    ...data
  } as ICertificateSigningRequestList);
}
}

setValidateFunc(CertificateSigningRequestList, validate as ValidateFunc<ICertificateSigningRequestList>);

export type {
  ICertificateSigningRequestList as IIoK8sApiCertificatesV1CertificateSigningRequestList,
  CertificateSigningRequestList as IoK8sApiCertificatesV1CertificateSigningRequestList
};
