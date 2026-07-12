import { Context } from '@glassway/architect';

export interface KubeContext extends Context {
  namespace?: string;
}
