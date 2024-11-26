import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GeneratorsExternalSecretsIoV1alpha1Password.js";

/**
 * Password generates a random password based on the
 * configuration parameters in spec.
 * You can specify the length, characterset and other attributes.
 */
export interface IPassword {
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
  "kind": "Password";
  "metadata"?: IObjectMeta;
  /**
   * PasswordSpec controls the behavior of the password generator.
   */
  "spec"?: {
    /**
     * set AllowRepeat to true to allow repeating characters.
     */
    "allowRepeat": boolean;
    /**
     * Digits specifies the number of digits in the generated
     * password. If omitted it defaults to 25% of the length of the password
     */
    "digits"?: number;
    /**
     * Length of the password to be generated.
     * Defaults to 24
     */
    "length": number;
    /**
     * Set NoUpper to disable uppercase characters
     */
    "noUpper": boolean;
    /**
     * SymbolCharacters specifies the special characters that should be used
     * in the generated password.
     */
    "symbolCharacters"?: string;
    /**
     * Symbols specifies the number of symbol characters in the generated
     * password. If omitted it defaults to 25% of the length of the password
     */
    "symbols"?: number;
  };
}

/**
 * Password generates a random password based on the
 * configuration parameters in spec.
 * You can specify the length, characterset and other attributes.
 */
export class Password extends Model<IPassword> implements IPassword {
  "apiVersion": IPassword["apiVersion"];
  "kind": IPassword["kind"];
  "metadata"?: IPassword["metadata"];
  "spec"?: IPassword["spec"];

static apiVersion: IPassword["apiVersion"] = "generators.external-secrets.io/v1alpha1";
static kind: IPassword["kind"] = "Password";
static is = createTypeMetaGuard<IPassword>(Password);

constructor(data?: ModelData<IPassword>) {
  super({
    apiVersion: Password.apiVersion,
    kind: Password.kind,
    ...data
  } as IPassword);
}
}


setValidateFunc(Password, validate as ValidateFunc<IPassword>);
