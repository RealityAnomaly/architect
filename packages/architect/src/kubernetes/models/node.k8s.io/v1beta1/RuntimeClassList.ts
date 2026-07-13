import { IIoK8sApiNodeV1beta1RuntimeClass } from "./RuntimeClass.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNodeV1beta1RuntimeClassList.js";

/**
 * RuntimeClassList is a list of RuntimeClass objects.
 */
export interface IRuntimeClassList extends TypeMeta {
  "apiVersion": "node.k8s.io/v1beta1";
/**
 * Items is a list of schema objects.
 */
"items": Array<IIoK8sApiNodeV1beta1RuntimeClass>;
"kind": "RuntimeClassList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * RuntimeClassList is a list of RuntimeClass objects.
 */
export class RuntimeClassList extends Model<IRuntimeClassList> implements IRuntimeClassList {
  "apiVersion": IRuntimeClassList["apiVersion"];
"items": Array<IIoK8sApiNodeV1beta1RuntimeClass>;
"kind": IRuntimeClassList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IRuntimeClassList["apiVersion"] = "node.k8s.io/v1beta1";
static kind: IRuntimeClassList["kind"] = "RuntimeClassList";
static is = createTypeMetaGuard<IRuntimeClassList>(RuntimeClassList);

constructor(data?: ModelData<IRuntimeClassList>) {
  super();

  this.setDefinedProps({
    apiVersion: RuntimeClassList.apiVersion,
    kind: RuntimeClassList.kind,
    ...data
  } as IRuntimeClassList);
}
}

setValidateFunc(RuntimeClassList, validate as ValidateFunc<IRuntimeClassList>);

export type {
  IRuntimeClassList as IIoK8sApiNodeV1beta1RuntimeClassList,
  RuntimeClassList as IoK8sApiNodeV1beta1RuntimeClassList
};
