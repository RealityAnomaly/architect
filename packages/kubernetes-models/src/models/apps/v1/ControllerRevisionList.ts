import { IIoK8sApiAppsV1ControllerRevision } from "./ControllerRevision.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1/ControllerRevisionList.js";

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export interface IControllerRevisionList extends TypeMeta {
  "apiVersion": "apps/v1";
/**
 * Items is the list of ControllerRevisions
 */
"items": Array<IIoK8sApiAppsV1ControllerRevision>;
"kind": "ControllerRevisionList";
/**
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export class ControllerRevisionList extends Model<IControllerRevisionList> implements IControllerRevisionList {
  "apiVersion": IControllerRevisionList["apiVersion"];
"items": Array<IIoK8sApiAppsV1ControllerRevision>;
"kind": IControllerRevisionList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IControllerRevisionList["apiVersion"] = "apps/v1";
static kind: IControllerRevisionList["kind"] = "ControllerRevisionList";
static is: TypeMetaGuard<IControllerRevisionList> = createTypeMetaGuard<IControllerRevisionList>(ControllerRevisionList);

constructor(data?: ModelData<IControllerRevisionList>) {
  super();

  this.setDefinedProps({
    apiVersion: ControllerRevisionList.apiVersion,
    kind: ControllerRevisionList.kind,
    ...data
  } as IControllerRevisionList);
}
}

setValidateFunc(ControllerRevisionList, validate as ValidateFunc<IControllerRevisionList>);

export type {
  IControllerRevisionList as IIoK8sApiAppsV1ControllerRevisionList,
  ControllerRevisionList as IoK8sApiAppsV1ControllerRevisionList
};
