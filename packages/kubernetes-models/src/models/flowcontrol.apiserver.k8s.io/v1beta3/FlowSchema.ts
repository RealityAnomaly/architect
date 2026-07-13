import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiFlowcontrolV1beta3FlowSchemaSpec } from "./FlowSchemaSpec.ts";
import { IIoK8sApiFlowcontrolV1beta3FlowSchemaStatus } from "./FlowSchemaStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/flowcontrol.apiserver.k8s.io/v1beta3/FlowSchema.js";

/**
 * FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher".
 */
export interface IFlowSchema extends TypeMeta {
  "apiVersion": "flowcontrol.apiserver.k8s.io/v1beta3";
"kind": "FlowSchema";
/**
 * `metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * `spec` is the specification of the desired behavior of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiFlowcontrolV1beta3FlowSchemaSpec;
/**
 * `status` is the current status of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiFlowcontrolV1beta3FlowSchemaStatus;
}

/**
 * FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher".
 */
export class FlowSchema extends Model<IFlowSchema> implements IFlowSchema {
  "apiVersion": IFlowSchema["apiVersion"];
"kind": IFlowSchema["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiFlowcontrolV1beta3FlowSchemaSpec;
"status"?: IIoK8sApiFlowcontrolV1beta3FlowSchemaStatus;

static apiVersion: IFlowSchema["apiVersion"] = "flowcontrol.apiserver.k8s.io/v1beta3";
static kind: IFlowSchema["kind"] = "FlowSchema";
static is: TypeMetaGuard<IFlowSchema> = createTypeMetaGuard<IFlowSchema>(FlowSchema);

constructor(data?: ModelData<IFlowSchema>) {
  super();

  this.setDefinedProps({
    apiVersion: FlowSchema.apiVersion,
    kind: FlowSchema.kind,
    ...data
  } as IFlowSchema);
}
}

setValidateFunc(FlowSchema, validate as ValidateFunc<IFlowSchema>);

export type {
  IFlowSchema as IIoK8sApiFlowcontrolV1beta3FlowSchema,
  FlowSchema as IoK8sApiFlowcontrolV1beta3FlowSchema
};
