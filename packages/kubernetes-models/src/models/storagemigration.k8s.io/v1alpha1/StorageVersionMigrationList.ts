import { IIoK8sApiStoragemigrationV1alpha1StorageVersionMigration } from "./StorageVersionMigration.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storagemigration.k8s.io/v1alpha1/StorageVersionMigrationList.js";

/**
 * StorageVersionMigrationList is a collection of storage version migrations.
 */
export interface IStorageVersionMigrationList extends TypeMeta {
  "apiVersion": "storagemigration.k8s.io/v1alpha1";
/**
 * Items is the list of StorageVersionMigration
 */
"items": Array<IIoK8sApiStoragemigrationV1alpha1StorageVersionMigration>;
"kind": "StorageVersionMigrationList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * StorageVersionMigrationList is a collection of storage version migrations.
 */
export class StorageVersionMigrationList extends Model<IStorageVersionMigrationList> implements IStorageVersionMigrationList {
  "apiVersion": IStorageVersionMigrationList["apiVersion"];
"items": Array<IIoK8sApiStoragemigrationV1alpha1StorageVersionMigration>;
"kind": IStorageVersionMigrationList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IStorageVersionMigrationList["apiVersion"] = "storagemigration.k8s.io/v1alpha1";
static kind: IStorageVersionMigrationList["kind"] = "StorageVersionMigrationList";
static is: TypeMetaGuard<IStorageVersionMigrationList> = createTypeMetaGuard<IStorageVersionMigrationList>(StorageVersionMigrationList);

constructor(data?: ModelData<IStorageVersionMigrationList>) {
  super();

  this.setDefinedProps({
    apiVersion: StorageVersionMigrationList.apiVersion,
    kind: StorageVersionMigrationList.kind,
    ...data
  } as IStorageVersionMigrationList);
}
}

setValidateFunc(StorageVersionMigrationList, validate as ValidateFunc<IStorageVersionMigrationList>);

export type {
  IStorageVersionMigrationList as IIoK8sApiStoragemigrationV1alpha1StorageVersionMigrationList,
  StorageVersionMigrationList as IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationList
};
