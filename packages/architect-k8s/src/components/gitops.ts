// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { KubeComponent, KubeComponentGenericResources } from '../component.ts';

@KubeComponent.decorate({ class: 'architect.glassway.net/gitops' })
export class GitOpsComponent extends KubeComponent {
  public override init(): void {
    this.standardRequirements = false;
    this.setWeight(1000); // evaluate after all others
  }

  public override async build(resources: KubeComponentGenericResources = {}): Promise<KubeComponentGenericResources> {
    if (!this.target.gitops) return resources;

    resources.result = await this.target.gitops.clusterObjects();
    return resources;
  }
}
