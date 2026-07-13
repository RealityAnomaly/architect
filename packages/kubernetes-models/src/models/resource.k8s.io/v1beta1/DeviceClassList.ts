import { IIoK8sApiResourceV1beta1DeviceClass } from "./DeviceClass.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta1/DeviceClassList.js";

/**
 * DeviceClassList is a collection of classes.
 */
export interface IDeviceClassList extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1beta1";
/**
 * Items is the list of resource classes.
 */
"items": Array<IIoK8sApiResourceV1beta1DeviceClass>;
"kind": "DeviceClassList";
/**
 * Standard list metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * DeviceClassList is a collection of classes.
 */
export class DeviceClassList extends Model<IDeviceClassList> implements IDeviceClassList {
  "apiVersion": IDeviceClassList["apiVersion"];
"items": Array<IIoK8sApiResourceV1beta1DeviceClass>;
"kind": IDeviceClassList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IDeviceClassList["apiVersion"] = "resource.k8s.io/v1beta1";
static kind: IDeviceClassList["kind"] = "DeviceClassList";
static is: TypeMetaGuard<IDeviceClassList> = createTypeMetaGuard<IDeviceClassList>(DeviceClassList);

constructor(data?: ModelData<IDeviceClassList>) {
  super();

  this.setDefinedProps({
    apiVersion: DeviceClassList.apiVersion,
    kind: DeviceClassList.kind,
    ...data
  } as IDeviceClassList);
}
}

setValidateFunc(DeviceClassList, validate as ValidateFunc<IDeviceClassList>);

export type {
  IDeviceClassList as IIoK8sApiResourceV1beta1DeviceClassList,
  DeviceClassList as IoK8sApiResourceV1beta1DeviceClassList
};
