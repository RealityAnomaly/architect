import { IIoK8sApiStoragemigrationV1beta1StorageVersionMigration } from "./StorageVersionMigration.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiStoragemigrationV1beta1StorageVersionMigrationList.js";

/**
 * StorageVersionMigrationList is a collection of storage version migrations.
 */
export interface IStorageVersionMigrationList extends TypeMeta {
  "apiVersion": "storagemigration.k8s.io/v1beta1";
/**
 * Items is the list of StorageVersionMigration
 */
"items": Array<IIoK8sApiStoragemigrationV1beta1StorageVersionMigration>;
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
"items": Array<IIoK8sApiStoragemigrationV1beta1StorageVersionMigration>;
"kind": IStorageVersionMigrationList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IStorageVersionMigrationList["apiVersion"] = "storagemigration.k8s.io/v1beta1";
static kind: IStorageVersionMigrationList["kind"] = "StorageVersionMigrationList";
static is = createTypeMetaGuard<IStorageVersionMigrationList>(StorageVersionMigrationList);

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
  IStorageVersionMigrationList as IIoK8sApiStoragemigrationV1beta1StorageVersionMigrationList,
  StorageVersionMigrationList as IoK8sApiStoragemigrationV1beta1StorageVersionMigrationList
};
