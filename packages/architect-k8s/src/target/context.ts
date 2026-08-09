import { BuildContext } from '@glassway/architect';

export interface KubeBuildContext extends BuildContext {
  /**
   * Whether the cluster is being bootstrapped for the first time
   */
  bootstrap?: boolean;

  /**
   * Whether these resources are being built for GitOps deployment
   * (note this is separate from GitOps being enabled)
   */
  gitops?: boolean;
}
