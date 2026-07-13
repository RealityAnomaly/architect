import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiStorageV1CSIDriverSpec } from "./CSIDriverSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storage.k8s.io/v1/CSIDriver.js";

/**
 * CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
 */
export interface ICSIDriver extends TypeMeta {
  "apiVersion": "storage.k8s.io/v1";
"kind": "CSIDriver";
/**
 * Standard object metadata. metadata.Name indicates the name of the CSI driver that this object refers to; it MUST be the same name returned by the CSI GetPluginName() call for that driver. The driver name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), dots (.), and alphanumerics between. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec represents the specification of the CSI Driver.
 */
"spec": IIoK8sApiStorageV1CSIDriverSpec;
}

/**
 * CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
 */
export class CSIDriver extends Model<ICSIDriver> implements ICSIDriver {
  "apiVersion": ICSIDriver["apiVersion"];
"kind": ICSIDriver["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiStorageV1CSIDriverSpec;

static apiVersion: ICSIDriver["apiVersion"] = "storage.k8s.io/v1";
static kind: ICSIDriver["kind"] = "CSIDriver";
static is: TypeMetaGuard<ICSIDriver> = createTypeMetaGuard<ICSIDriver>(CSIDriver);

constructor(data?: ModelData<ICSIDriver>) {
  super();

  this.setDefinedProps({
    apiVersion: CSIDriver.apiVersion,
    kind: CSIDriver.kind,
    ...data
  } as ICSIDriver);
}
}

setValidateFunc(CSIDriver, validate as ValidateFunc<ICSIDriver>);

export type {
  ICSIDriver as IIoK8sApiStorageV1CSIDriver,
  CSIDriver as IoK8sApiStorageV1CSIDriver
};
