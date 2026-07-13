import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiStoragemigrationV1beta1StorageVersionMigrationSpec } from "./StorageVersionMigrationSpec.ts";
import { IIoK8sApiStoragemigrationV1beta1StorageVersionMigrationStatus } from "./StorageVersionMigrationStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storagemigration.k8s.io/v1beta1/StorageVersionMigration.js";

/**
 * StorageVersionMigration represents a migration of stored data to the latest storage version.
 */
export interface IStorageVersionMigration extends TypeMeta {
  "apiVersion": "storagemigration.k8s.io/v1beta1";
"kind": "StorageVersionMigration";
/**
 * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the migration.
 */
"spec"?: IIoK8sApiStoragemigrationV1beta1StorageVersionMigrationSpec;
/**
 * Status of the migration.
 */
"status"?: IIoK8sApiStoragemigrationV1beta1StorageVersionMigrationStatus;
}

/**
 * StorageVersionMigration represents a migration of stored data to the latest storage version.
 */
export class StorageVersionMigration extends Model<IStorageVersionMigration> implements IStorageVersionMigration {
  "apiVersion": IStorageVersionMigration["apiVersion"];
"kind": IStorageVersionMigration["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiStoragemigrationV1beta1StorageVersionMigrationSpec;
"status"?: IIoK8sApiStoragemigrationV1beta1StorageVersionMigrationStatus;

static apiVersion: IStorageVersionMigration["apiVersion"] = "storagemigration.k8s.io/v1beta1";
static kind: IStorageVersionMigration["kind"] = "StorageVersionMigration";
static is: TypeMetaGuard<IStorageVersionMigration> = createTypeMetaGuard<IStorageVersionMigration>(StorageVersionMigration);

constructor(data?: ModelData<IStorageVersionMigration>) {
  super();

  this.setDefinedProps({
    apiVersion: StorageVersionMigration.apiVersion,
    kind: StorageVersionMigration.kind,
    ...data
  } as IStorageVersionMigration);
}
}

setValidateFunc(StorageVersionMigration, validate as ValidateFunc<IStorageVersionMigration>);

export type {
  IStorageVersionMigration as IIoK8sApiStoragemigrationV1beta1StorageVersionMigration,
  StorageVersionMigration as IoK8sApiStoragemigrationV1beta1StorageVersionMigration
};
