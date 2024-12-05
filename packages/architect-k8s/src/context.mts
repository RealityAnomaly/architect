import { Context } from "jsr:@perdition/architect-core";

export interface KubeContext extends Context {
  namespace: string;
};
