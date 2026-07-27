import * as logtape from '@logtape/logtape';

import { Result } from '@glassway/architect';
import { IKubeTarget } from '../target/index.ts';
import { K8sPluginProps } from '../plugin.ts';
import { ICompileListener, TargetApplyParams } from '../../../architect/src/index.ts';

export type K8sPluginGitOpsProps = NonNullable<K8sPluginProps['gitops']>;

export abstract class GitOpsController {
  public readonly target: IKubeTarget;

  protected constructor(target: IKubeTarget) {
    this.target = target;
  }

  public abstract apply(result: Result, params?: TargetApplyParams, logger?: logtape.Logger, listener?: ICompileListener): Promise<void>;
}
