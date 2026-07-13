import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoreV1ServiceSpec } from "./ServiceSpec.ts";
import { IIoK8sApiCoreV1ServiceStatus } from "./ServiceStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/Service.js";

/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 */
export interface IService extends TypeMeta {
  "apiVersion": "v1";
"kind": "Service";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the behavior of a service. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1ServiceSpec;
/**
 * Most recently observed status of the service. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiCoreV1ServiceStatus;
}

/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 */
export class Service extends Model<IService> implements IService {
  "apiVersion": IService["apiVersion"];
"kind": IService["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiCoreV1ServiceSpec;
"status"?: IIoK8sApiCoreV1ServiceStatus;

static apiVersion: IService["apiVersion"] = "v1";
static kind: IService["kind"] = "Service";
static is: TypeMetaGuard<IService> = createTypeMetaGuard<IService>(Service);

constructor(data?: ModelData<IService>) {
  super();

  this.setDefinedProps({
    apiVersion: Service.apiVersion,
    kind: Service.kind,
    ...data
  } as IService);
}
}

setValidateFunc(Service, validate as ValidateFunc<IService>);

export type {
  IService as IIoK8sApiCoreV1Service,
  Service as IoK8sApiCoreV1Service
};
