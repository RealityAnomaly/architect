import { IIoK8sApimachineryPkgApisMetaV1GroupResource } from "../../../apimachinery/apis/meta/v1/GroupResource.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storagemigration.k8s.io/v1beta1/StorageVersionMigrationSpec.js";

/**
 * Spec of the storage version migration.
 */
export interface IStorageVersionMigrationSpec {
  /**
 * The resource that is being migrated. The migrator sends requests to the endpoint serving the resource. Immutable.
 */
"resource": IIoK8sApimachineryPkgApisMetaV1GroupResource;
}

/**
 * Spec of the storage version migration.
 */
export class StorageVersionMigrationSpec extends Model<IStorageVersionMigrationSpec> implements IStorageVersionMigrationSpec {
  "resource": IIoK8sApimachineryPkgApisMetaV1GroupResource;

constructor(data?: ModelData<IStorageVersionMigrationSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(StorageVersionMigrationSpec, validate as ValidateFunc<IStorageVersionMigrationSpec>);

export type {
  IStorageVersionMigrationSpec as IIoK8sApiStoragemigrationV1beta1StorageVersionMigrationSpec,
  StorageVersionMigrationSpec as IoK8sApiStoragemigrationV1beta1StorageVersionMigrationSpec
};
