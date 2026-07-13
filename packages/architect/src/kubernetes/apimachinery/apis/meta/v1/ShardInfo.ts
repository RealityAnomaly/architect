import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../../_schemas/IoK8sApimachineryPkgApisMetaV1ShardInfo.js";

/**
 * ShardInfo describes the shard selector that was applied to produce a list response. Its presence on a list response indicates the list is a filtered subset.
 */
export interface IShardInfo {
  /**
 * selector is the shard selector string from the request, echoed back so clients can verify which shard they received and merge responses from multiple shards.
 */
"selector": string;
}

/**
 * ShardInfo describes the shard selector that was applied to produce a list response. Its presence on a list response indicates the list is a filtered subset.
 */
export class ShardInfo extends Model<IShardInfo> implements IShardInfo {
  "selector": string;

constructor(data?: ModelData<IShardInfo>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ShardInfo, validate as ValidateFunc<IShardInfo>);

export type {
  IShardInfo as IIoK8sApimachineryPkgApisMetaV1ShardInfo,
  ShardInfo as IoK8sApimachineryPkgApisMetaV1ShardInfo
};
