import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GeneratorsExternalSecretsIoV1alpha1Fake.js";

/**
 * Fake generator is used for testing. It lets you define
 * a static set of credentials that is always returned.
 */
export interface IFake {
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
  "kind": "Fake";
  "metadata"?: IObjectMeta;
  /**
   * FakeSpec contains the static data.
   */
  "spec"?: {
    /**
     * Used to select the correct ESO controller (think: ingress.ingressClassName)
     * The ESO controller is instantiated with a specific controller name and filters VDS based on this property
     */
    "controller"?: string;
    /**
     * Data defines the static data returned
     * by this generator.
     */
    "data"?: {
      [key: string]: string;
    };
  };
}

/**
 * Fake generator is used for testing. It lets you define
 * a static set of credentials that is always returned.
 */
export class Fake extends Model<IFake> implements IFake {
  "apiVersion": IFake["apiVersion"];
  "kind": IFake["kind"];
  "metadata"?: IFake["metadata"];
  "spec"?: IFake["spec"];

static apiVersion: IFake["apiVersion"] = "generators.external-secrets.io/v1alpha1";
static kind: IFake["kind"] = "Fake";
static is = createTypeMetaGuard<IFake>(Fake);

constructor(data?: ModelData<IFake>) {
  super({
    apiVersion: Fake.apiVersion,
    kind: Fake.kind,
    ...data
  } as IFake);
}
}


setValidateFunc(Fake, validate as ValidateFunc<IFake>);
