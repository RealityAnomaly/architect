import { IIoK8sApiCoreV1EphemeralContainer } from "./EphemeralContainer.ts";
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1EphemeralContainers.js";

/**
 * A list of ephemeral containers used with the Pod ephemeralcontainers subresource.
 */
export interface IEphemeralContainers extends TypeMeta {
  "apiVersion": "v1";
/**
 * A list of ephemeral containers associated with this pod. New ephemeral containers may be appended to this list, but existing ephemeral containers may not be removed or modified.
 */
"ephemeralContainers": Array<IIoK8sApiCoreV1EphemeralContainer>;
"kind": "EphemeralContainers";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
}

/**
 * A list of ephemeral containers used with the Pod ephemeralcontainers subresource.
 */
export class EphemeralContainers extends Model<IEphemeralContainers> implements IEphemeralContainers {
  "apiVersion": IEphemeralContainers["apiVersion"];
"ephemeralContainers": Array<IIoK8sApiCoreV1EphemeralContainer>;
"kind": IEphemeralContainers["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

static apiVersion: IEphemeralContainers["apiVersion"] = "v1";
static kind: IEphemeralContainers["kind"] = "EphemeralContainers";
static is = createTypeMetaGuard<IEphemeralContainers>(EphemeralContainers);

constructor(data?: ModelData<IEphemeralContainers>) {
  super();

  this.setDefinedProps({
    apiVersion: EphemeralContainers.apiVersion,
    kind: EphemeralContainers.kind,
    ...data
  } as IEphemeralContainers);
}
}

setValidateFunc(EphemeralContainers, validate as ValidateFunc<IEphemeralContainers>);

export type {
  IEphemeralContainers as IIoK8sApiCoreV1EphemeralContainers,
  EphemeralContainers as IoK8sApiCoreV1EphemeralContainers
};
