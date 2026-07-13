import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1ParamKind.js";

/**
 * ParamKind is a tuple of Group Kind and Version.
 */
export interface IParamKind {
  /**
 * apiVersion is the API group version the resources belong to. In format of "group/version". Required.
 */
"apiVersion"?: string;
/**
 * kind is the API kind the resources belong to. Required.
 */
"kind"?: string;
}

/**
 * ParamKind is a tuple of Group Kind and Version.
 */
export class ParamKind extends Model<IParamKind> implements IParamKind {
  "apiVersion"?: IParamKind["apiVersion"];
"kind"?: IParamKind["kind"];

constructor(data?: ModelData<IParamKind>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ParamKind, validate as ValidateFunc<IParamKind>);

export type {
  IParamKind as IIoK8sApiAdmissionregistrationV1ParamKind,
  ParamKind as IoK8sApiAdmissionregistrationV1ParamKind
};
