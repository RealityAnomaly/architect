import { Context } from '@perdition/architect-core';

export interface KubeContext extends Context {
  namespace: string;
}
