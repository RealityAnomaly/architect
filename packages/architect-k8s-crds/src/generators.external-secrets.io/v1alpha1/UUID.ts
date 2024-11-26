import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GeneratorsExternalSecretsIoV1alpha1UUID.js";

/**
 * UUID generates a version 1 UUID (e56657e3-764f-11ef-a397-65231a88c216).
 */
export interface IUUID {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "generators.external-secrets.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "UUID";
  "metadata"?: IObjectMeta;
  /**
   * UUIDSpec controls the behavior of the uuid generator.
   */
  "spec"?: {
  };
}

/**
 * UUID generates a version 1 UUID (e56657e3-764f-11ef-a397-65231a88c216).
 */
export class UUID extends Model<IUUID> implements IUUID {
  "apiVersion": IUUID["apiVersion"];
  "kind": IUUID["kind"];
  "metadata"?: IUUID["metadata"];
  "spec"?: IUUID["spec"];

static apiVersion: IUUID["apiVersion"] = "generators.external-secrets.io/v1alpha1";
static kind: IUUID["kind"] = "UUID";
static is = createTypeMetaGuard<IUUID>(UUID);

constructor(data?: ModelData<IUUID>) {
  super({
    apiVersion: UUID.apiVersion,
    kind: UUID.kind,
    ...data
  } as IUUID);
}
}


setValidateFunc(UUID, validate as ValidateFunc<IUUID>);
