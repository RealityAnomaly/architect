import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1beta1AggregationRule.js";

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export interface IAggregationRule {
  /**
 * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
 */
"clusterRoleSelectors"?: Array<IIoK8sApimachineryPkgApisMetaV1LabelSelector>;
}

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export class AggregationRule extends Model<IAggregationRule> implements IAggregationRule {
  "clusterRoleSelectors"?: Array<IIoK8sApimachineryPkgApisMetaV1LabelSelector>;

constructor(data?: ModelData<IAggregationRule>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AggregationRule, validate as ValidateFunc<IAggregationRule>);

export type {
  IAggregationRule as IIoK8sApiRbacV1beta1AggregationRule,
  AggregationRule as IoK8sApiRbacV1beta1AggregationRule
};
