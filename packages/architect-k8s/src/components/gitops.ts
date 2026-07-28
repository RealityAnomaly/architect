import { KubeComponent, KubeComponentGenericResources } from '../component.ts';

@KubeComponent.decorate({ class: 'architect.glassway.net/gitops' })
export class GitOpsComponent extends KubeComponent {
  public override init(): void {
    this.standardRequirements = false;
  }

  public override async build(resources: KubeComponentGenericResources = {}): Promise<KubeComponentGenericResources> {
    if (!this.target.gitops) return resources;

    resources.result = await this.target.gitops.clusterObjects();
    return resources;
  }
}
