import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec } from "./APIServiceSpec.ts";
import { IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus } from "./APIServiceStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apiregistration.k8s.io/v1beta1/APIService.js";

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export interface IAPIService extends TypeMeta {
  "apiVersion": "apiregistration.k8s.io/v1beta1";
"kind": "APIService";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec contains information for locating and communicating with a server
 */
"spec"?: IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec;
/**
 * Status contains derived information about an API server
 */
"status"?: IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus;
}

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export class APIService extends Model<IAPIService> implements IAPIService {
  "apiVersion": IAPIService["apiVersion"];
"kind": IAPIService["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec;
"status"?: IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus;

static apiVersion: IAPIService["apiVersion"] = "apiregistration.k8s.io/v1beta1";
static kind: IAPIService["kind"] = "APIService";
static is: TypeMetaGuard<IAPIService> = createTypeMetaGuard<IAPIService>(APIService);

constructor(data?: ModelData<IAPIService>) {
  super();

  this.setDefinedProps({
    apiVersion: APIService.apiVersion,
    kind: APIService.kind,
    ...data
  } as IAPIService);
}
}

setValidateFunc(APIService, validate as ValidateFunc<IAPIService>);

export type {
  IAPIService as IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService,
  APIService as IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService
};
