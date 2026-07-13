import { IIoK8sApimachineryPkgApisMetaV1Condition } from "../../../apimachinery/apis/meta/v1/Condition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiStoragemigrationV1beta1StorageVersionMigrationStatus.js";

/**
 * Status of the storage version migration.
 */
export interface IStorageVersionMigrationStatus {
  /**
 * The latest available observations of the migration's current state.
 */
"conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
/**
 * ResourceVersion to compare with the GC cache for performing the migration. This is the current resource version of given group, version and resource when kube-controller-manager first observes this StorageVersionMigration resource.
 */
"resourceVersion"?: string;
}

/**
 * Status of the storage version migration.
 */
export class StorageVersionMigrationStatus extends Model<IStorageVersionMigrationStatus> implements IStorageVersionMigrationStatus {
  "conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
"resourceVersion"?: string;

constructor(data?: ModelData<IStorageVersionMigrationStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(StorageVersionMigrationStatus, validate as ValidateFunc<IStorageVersionMigrationStatus>);

export type {
  IStorageVersionMigrationStatus as IIoK8sApiStoragemigrationV1beta1StorageVersionMigrationStatus,
  StorageVersionMigrationStatus as IoK8sApiStoragemigrationV1beta1StorageVersionMigrationStatus
};
