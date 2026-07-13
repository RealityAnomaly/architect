import { IIoK8sApiFlowcontrolV1beta2FlowSchema } from "./FlowSchema.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/flowcontrol.apiserver.k8s.io/v1beta2/FlowSchemaList.js";

/**
 * FlowSchemaList is a list of FlowSchema objects.
 */
export interface IFlowSchemaList extends TypeMeta {
  "apiVersion": "flowcontrol.apiserver.k8s.io/v1beta2";
/**
 * `items` is a list of FlowSchemas.
 */
"items": Array<IIoK8sApiFlowcontrolV1beta2FlowSchema>;
"kind": "FlowSchemaList";
/**
 * `metadata` is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * FlowSchemaList is a list of FlowSchema objects.
 */
export class FlowSchemaList extends Model<IFlowSchemaList> implements IFlowSchemaList {
  "apiVersion": IFlowSchemaList["apiVersion"];
"items": Array<IIoK8sApiFlowcontrolV1beta2FlowSchema>;
"kind": IFlowSchemaList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IFlowSchemaList["apiVersion"] = "flowcontrol.apiserver.k8s.io/v1beta2";
static kind: IFlowSchemaList["kind"] = "FlowSchemaList";
static is: TypeMetaGuard<IFlowSchemaList> = createTypeMetaGuard<IFlowSchemaList>(FlowSchemaList);

constructor(data?: ModelData<IFlowSchemaList>) {
  super();

  this.setDefinedProps({
    apiVersion: FlowSchemaList.apiVersion,
    kind: FlowSchemaList.kind,
    ...data
  } as IFlowSchemaList);
}
}

setValidateFunc(FlowSchemaList, validate as ValidateFunc<IFlowSchemaList>);

export type {
  IFlowSchemaList as IIoK8sApiFlowcontrolV1beta2FlowSchemaList,
  FlowSchemaList as IoK8sApiFlowcontrolV1beta2FlowSchemaList
};
