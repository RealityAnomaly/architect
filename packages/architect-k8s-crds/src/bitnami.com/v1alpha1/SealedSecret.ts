import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "bitnami.com.v1alpha1.SealedSecret";
const schema = {
  "type": "object",
  "properties": {
    "spec": {
      "type": "object",
      "properties": {},
      "nullable": true
    },
    "status": {
      "oneOf": [
        {},
        {
          "type": "null"
        }
      ]
    },
    "apiVersion": {
      "type": "string",
      "enum": [
        "bitnami.com/v1alpha1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "SealedSecret"
      ]
    },
    "metadata": {
      "oneOf": [
        {
          "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "required": [
    "apiVersion",
    "kind"
  ]
};

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


setSchema(SealedSecret, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
