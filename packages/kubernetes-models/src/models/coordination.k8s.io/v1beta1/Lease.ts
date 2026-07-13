import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiCoordinationV1beta1LeaseSpec } from "./LeaseSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/coordination.k8s.io/v1beta1/Lease.js";

/**
 * Lease defines a lease concept.
 */
export interface ILease extends TypeMeta {
  "apiVersion": "coordination.k8s.io/v1beta1";
"kind": "Lease";
/**
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the Lease. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoordinationV1beta1LeaseSpec;
}

/**
 * Lease defines a lease concept.
 */
export class Lease extends Model<ILease> implements ILease {
  "apiVersion": ILease["apiVersion"];
"kind": ILease["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiCoordinationV1beta1LeaseSpec;

static apiVersion: ILease["apiVersion"] = "coordination.k8s.io/v1beta1";
static kind: ILease["kind"] = "Lease";
static is: TypeMetaGuard<ILease> = createTypeMetaGuard<ILease>(Lease);

constructor(data?: ModelData<ILease>) {
  super();

  this.setDefinedProps({
    apiVersion: Lease.apiVersion,
    kind: Lease.kind,
    ...data
  } as ILease);
}
}

setValidateFunc(Lease, validate as ValidateFunc<ILease>);

export type {
  ILease as IIoK8sApiCoordinationV1beta1Lease,
  Lease as IoK8sApiCoordinationV1beta1Lease
};
