import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CiliumIoV2CiliumIdentity.js";

/**
 * CiliumIdentity is a CRD that represents an identity managed by Cilium. It is intended as a backing store for identity allocation, acting as the global coordination backend, and can be used in place of a KVStore (such as etcd). The name of the CRD is the numeric identity and the labels on the CRD object are the the kubernetes sourced labels seen by cilium. This is currently the only label source possible when running under kubernetes. Non-kubernetes labels are filtered but all labels, from all sources, are places in the SecurityLabels field. These also include the source and are used to define the identity. The labels under metav1.ObjectMeta can be used when searching for CiliumIdentity instances that include particular labels. This can be done with invocations such as:   kubectl get ciliumid -l 'foo=bar' Each node using a ciliumidentity updates the status field with it's name and a timestamp when it first allocates or uses an identity, and periodically after that. It deletes its entry when no longer using this identity. cilium-operator uses the list of nodes in status to reference count users of this identity, and to expire stale usage.
 */
export interface ICiliumIdentity {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cilium.io/v2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "CiliumIdentity";
  "metadata": IObjectMeta;
  /**
   * SecurityLabels is the source-of-truth set of labels for this identity.
   */
  "security-labels": {
    [key: string]: string;
  };
}

/**
 * CiliumIdentity is a CRD that represents an identity managed by Cilium. It is intended as a backing store for identity allocation, acting as the global coordination backend, and can be used in place of a KVStore (such as etcd). The name of the CRD is the numeric identity and the labels on the CRD object are the the kubernetes sourced labels seen by cilium. This is currently the only label source possible when running under kubernetes. Non-kubernetes labels are filtered but all labels, from all sources, are places in the SecurityLabels field. These also include the source and are used to define the identity. The labels under metav1.ObjectMeta can be used when searching for CiliumIdentity instances that include particular labels. This can be done with invocations such as:   kubectl get ciliumid -l 'foo=bar' Each node using a ciliumidentity updates the status field with it's name and a timestamp when it first allocates or uses an identity, and periodically after that. It deletes its entry when no longer using this identity. cilium-operator uses the list of nodes in status to reference count users of this identity, and to expire stale usage.
 */
export class CiliumIdentity extends Model<ICiliumIdentity> implements ICiliumIdentity {
  "apiVersion": ICiliumIdentity["apiVersion"];
  "kind": ICiliumIdentity["kind"];
  "metadata": ICiliumIdentity["metadata"];
  "security-labels": ICiliumIdentity["security-labels"];

static apiVersion: ICiliumIdentity["apiVersion"] = "cilium.io/v2";
static kind: ICiliumIdentity["kind"] = "CiliumIdentity";
static is = createTypeMetaGuard<ICiliumIdentity>(CiliumIdentity);

constructor(data?: ModelData<ICiliumIdentity>) {
  super({
    apiVersion: CiliumIdentity.apiVersion,
    kind: CiliumIdentity.kind,
    ...data
  } as ICiliumIdentity);
}
}


setValidateFunc(CiliumIdentity, validate as ValidateFunc<ICiliumIdentity>);
