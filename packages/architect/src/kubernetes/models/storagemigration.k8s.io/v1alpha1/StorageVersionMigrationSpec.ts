import { IIoK8sApiStoragemigrationV1alpha1GroupVersionResource } from "./GroupVersionResource.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec.js";

/**
 * Spec of the storage version migration.
 */
export interface IStorageVersionMigrationSpec {
  /**
 * The token used in the list options to get the next chunk of objects to migrate. When the .status.conditions indicates the migration is "Running", users can use this token to check the progress of the migration.
 */
"continueToken"?: string;
/**
 * The resource that is being migrated. The migrator sends requests to the endpoint serving the resource. Immutable.
 */
"resource": IIoK8sApiStoragemigrationV1alpha1GroupVersionResource;
}

/**
 * Spec of the storage version migration.
 */
export class StorageVersionMigrationSpec extends Model<IStorageVersionMigrationSpec> implements IStorageVersionMigrationSpec {
  "continueToken"?: string;
"resource": IIoK8sApiStoragemigrationV1alpha1GroupVersionResource;

constructor(data?: ModelData<IStorageVersionMigrationSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(StorageVersionMigrationSpec, validate as ValidateFunc<IStorageVersionMigrationSpec>);

export type {
  IStorageVersionMigrationSpec as IIoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec,
  StorageVersionMigrationSpec as IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec
};
