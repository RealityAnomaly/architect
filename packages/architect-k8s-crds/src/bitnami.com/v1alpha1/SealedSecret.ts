import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/BitnamiComV1alpha1SealedSecret.js";

export interface ISealedSecret {
  "spec"?: {
  };
  "status"?: any;
  "apiVersion": "bitnami.com/v1alpha1";
  "kind": "SealedSecret";
  "metadata"?: IObjectMeta;
}

export class SealedSecret extends Model<ISealedSecret> implements ISealedSecret {
  "spec"?: ISealedSecret["spec"];
  "status"?: ISealedSecret["status"];
  "apiVersion": ISealedSecret["apiVersion"];
  "kind": ISealedSecret["kind"];
  "metadata"?: ISealedSecret["metadata"];

static apiVersion: ISealedSecret["apiVersion"] = "bitnami.com/v1alpha1";
static kind: ISealedSecret["kind"] = "SealedSecret";
static is = createTypeMetaGuard<ISealedSecret>(SealedSecret);

constructor(data?: ModelData<ISealedSecret>) {
  super({
    apiVersion: SealedSecret.apiVersion,
    kind: SealedSecret.kind,
    ...data
  } as ISealedSecret);
}
}


setValidateFunc(SealedSecret, validate as ValidateFunc<ISealedSecret>);
