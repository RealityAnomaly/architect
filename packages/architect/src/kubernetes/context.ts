import { Context } from '../utils/index.ts';

export interface KubeContext extends Context {
  namespace?: string;
}
