// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { KubeComponent, KubeComponentGenericResources } from '../component.ts';
import { KubeBuildContext } from '../target/index.ts';

@KubeComponent.decorate({ class: 'architect.glassway.net/gitops', context: { namespace: '$features$' } })
export class GitOpsComponent extends KubeComponent {
  public override init(): void {
    this.standardRequirements = false;
    this.setBootstrap(true);
    this.setWeight(1000); // evaluate after all others
  }

  public override async build(context: KubeBuildContext, resources: KubeComponentGenericResources = {}):
    Promise<KubeComponentGenericResources> {
    if (!this.target.gitops) return super.build(context, resources);

    resources.result = await this.target.gitops.clusterObjects(context);
    return super.build(context, resources);
  }
}
