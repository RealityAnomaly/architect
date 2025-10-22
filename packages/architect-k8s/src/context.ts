import { Context } from '@glassway/architect-core';

export interface KubeContext extends Context {
  namespace?: string;
}
