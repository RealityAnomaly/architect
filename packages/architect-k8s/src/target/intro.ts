// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as _client from '@kubernetes/client-node';
import * as net from 'node:net';

import { TargetIntrospection } from '@glassway/architect';

interface KubeTargetStateNodes {
  control: number;
  worker: number;
  ipFamilies: ('IPv4'|'IPv6')[];
}

export interface KubeTargetState {
  stateVersion: 'v1';
  version: string;
  nodes: KubeTargetStateNodes;
}

/**
 * Provides access to the deployed properties of a Kubernetes cluster
 */
export class KubeTargetIntrospection extends TargetIntrospection<KubeTargetState> {
  protected readonly config: () => _client.KubeConfig;
  protected _api: _client.CoreV1Api | undefined;

  constructor(config: () => _client.KubeConfig) {
    super();
    this.config = config;
  }

  protected get api(): _client.CoreV1Api {
    if (!this._api) {
      this._api = this.config().makeApiClient(_client.CoreV1Api);
    }

    return this._api;
  }

  public override async loadState(): Promise<KubeTargetState> {
    const version = await this.getVersion();
    const nodes = await this.getNodes();

    return {
      stateVersion: 'v1',
      version, nodes
    }
  }

  protected async getVersion(): Promise<string> {
    const api = this.config().makeApiClient(_client.VersionApi);
    const response = await api.getCode();
    return response['gitVersion'];
  }

  protected async getNodes(): Promise<KubeTargetStateNodes> {
    const nodes = await this.api.listNode();
    const ipFamilies = new Set();

    let control = 0;
    let worker = 0;

    for (const node of nodes.items) {
      const labels = node?.metadata?.labels ?? ({});
      if ("node-role.kubernetes.io/control-plane" in labels) {
        control++;
      }

      // control plane nodes without the taint are treated as workers
      if (!("node-role.kubernetes.io/control-plane:NoSchedule" in labels)) {
        worker++;
      }

      for (const addr of node.status?.addresses ?? []) {
        if (addr.type != 'InternalIP') continue;

        if (net.isIPv4(addr.address)) {
          ipFamilies.add('IPv4');
        } else if (net.isIPv6(addr.address)) {
          ipFamilies.add('IPv6');
        }
      }
    }

    return {
      control, worker,
      ipFamilies: Array.from(ipFamilies) as ('IPv4'|'IPv6')[]
    }
  }
}
