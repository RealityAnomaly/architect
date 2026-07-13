import { IIoK8sApiRbacV1Role } from "./Role.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/rbac.authorization.k8s.io/v1/RoleList.js";

/**
 * RoleList is a collection of Roles
 */
export interface IRoleList extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1";
/**
 * Items is a list of Roles
 */
"items": Array<IIoK8sApiRbacV1Role>;
"kind": "RoleList";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * RoleList is a collection of Roles
 */
export class RoleList extends Model<IRoleList> implements IRoleList {
  "apiVersion": IRoleList["apiVersion"];
"items": Array<IIoK8sApiRbacV1Role>;
"kind": IRoleList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IRoleList["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IRoleList["kind"] = "RoleList";
static is: TypeMetaGuard<IRoleList> = createTypeMetaGuard<IRoleList>(RoleList);

constructor(data?: ModelData<IRoleList>) {
  super();

  this.setDefinedProps({
    apiVersion: RoleList.apiVersion,
    kind: RoleList.kind,
    ...data
  } as IRoleList);
}
}

setValidateFunc(RoleList, validate as ValidateFunc<IRoleList>);

export type {
  IRoleList as IIoK8sApiRbacV1RoleList,
  RoleList as IoK8sApiRbacV1RoleList
};
