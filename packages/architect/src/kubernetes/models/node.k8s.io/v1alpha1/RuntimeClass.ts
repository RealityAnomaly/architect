import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiNodeV1alpha1RuntimeClassSpec } from "./RuntimeClassSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNodeV1alpha1RuntimeClass.js";

/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 */
export interface IRuntimeClass extends TypeMeta {
  "apiVersion": "node.k8s.io/v1alpha1";
"kind": "RuntimeClass";
/**
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the RuntimeClass More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec": IIoK8sApiNodeV1alpha1RuntimeClassSpec;
}

/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 */
export class RuntimeClass extends Model<IRuntimeClass> implements IRuntimeClass {
  "apiVersion": IRuntimeClass["apiVersion"];
"kind": IRuntimeClass["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiNodeV1alpha1RuntimeClassSpec;

static apiVersion: IRuntimeClass["apiVersion"] = "node.k8s.io/v1alpha1";
static kind: IRuntimeClass["kind"] = "RuntimeClass";
static is = createTypeMetaGuard<IRuntimeClass>(RuntimeClass);

constructor(data?: ModelData<IRuntimeClass>) {
  super();

  this.setDefinedProps({
    apiVersion: RuntimeClass.apiVersion,
    kind: RuntimeClass.kind,
    ...data
  } as IRuntimeClass);
}
}

setValidateFunc(RuntimeClass, validate as ValidateFunc<IRuntimeClass>);

export type {
  IRuntimeClass as IIoK8sApiNodeV1alpha1RuntimeClass,
  RuntimeClass as IoK8sApiNodeV1alpha1RuntimeClass
};
