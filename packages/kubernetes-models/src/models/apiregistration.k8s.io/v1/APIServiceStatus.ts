import { IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition } from "./APIServiceCondition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apiregistration.k8s.io/v1/APIServiceStatus.js";

/**
 * APIServiceStatus contains derived information about an API server
 */
export interface IAPIServiceStatus {
  /**
 * Current service state of apiService.
 */
"conditions"?: Array<IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition>;
}

/**
 * APIServiceStatus contains derived information about an API server
 */
export class APIServiceStatus extends Model<IAPIServiceStatus> implements IAPIServiceStatus {
  "conditions"?: Array<IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition>;

constructor(data?: ModelData<IAPIServiceStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(APIServiceStatus, validate as ValidateFunc<IAPIServiceStatus>);

export type {
  IAPIServiceStatus as IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus,
  APIServiceStatus as IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus
};
