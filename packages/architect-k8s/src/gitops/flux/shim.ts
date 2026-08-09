// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Shim } from '@glassway/architect';

export interface FluxCDOptions {
  as?: string;
  asGroup?: string[];
  asUid?: string;
  asUserExtra?: string[];
  cacheDir?: string;
  certificateAuthority?: string;
  clientCertificate?: string;
  clientKey?: string;
  cluster?: string;
  context?: string;
  disableCompression?: boolean;
  insecureSkipTlsVerify?: boolean;
  kubeApiBurst?: number;
  kubeApiQps?: number;
  kubeConfig?: string;
  namespace?: string;
  server?: string;
  timeout?: string;
  tlsServerName?: string;
  token?: string;
  user?: string;
  verbose?: boolean;
}

export interface FluxCDPushArtifactOptions extends FluxCDOptions {
  annotations?: string[];
  creds?: string;
  debug?: boolean;
  ignorePaths?: string[];
  insecureRegistry?: boolean;
  output?: 'json' | 'yaml';
  path?: string;
  provider?: 'generic' | 'aws' | 'azure' | 'gcp';
  reproducible?: boolean;
  revision?: string;
  source?: string;
}

export class FluxCDShim extends Shim {
  constructor(binary: string = 'flux') {
    super(binary);
  }

  private buildCommonParams(options: FluxCDOptions): string[] {
    const params: string[] = [];

    if (options.as) params.push('--as', options.as);
    if (options.asGroup) options.asGroup.forEach((p) => params.push('--as-group', p));
    if (options.asUid) params.push('--as-uid', options.asUid);
    if (options.asUserExtra) options.asUserExtra.forEach((p) => params.push('--as-user-extra', p));
    if (options.cacheDir) params.push('--cache-dir', options.cacheDir);
    if (options.certificateAuthority) params.push('--certificate-authority', options.certificateAuthority);
    if (options.clientCertificate) params.push('--client-certificate', options.clientCertificate);
    if (options.clientKey) params.push('--client-key', options.clientKey);
    if (options.cluster) params.push('--cluster', options.cluster);
    if (options.context) params.push('--context', options.context);
    if (options.disableCompression) params.push('--disable-compression');
    if (options.insecureSkipTlsVerify) params.push('--insecure-skip-tls-verify');
    if (options.kubeApiBurst) params.push('--kube-api-burst', options.kubeApiBurst.toString());
    if (options.kubeApiQps) params.push('--kube-api-qps', options.kubeApiQps.toString());
    if (options.kubeConfig) params.push('--kubeconfig', options.kubeConfig);
    if (options.namespace) params.push('--namespace', options.namespace);
    if (options.server) params.push('--server', options.server);
    if (options.timeout) params.push('--timeout', options.timeout);
    if (options.tlsServerName) params.push('--tls-server-name', options.tlsServerName);
    if (options.token) params.push('--token', options.token);
    if (options.user) params.push('--user', options.user);
    if (options.verbose) params.push('--verbose');

    return params;
  }

  public async pushArtifact(image: string, options: FluxCDPushArtifactOptions): Promise<void> {
    const params = this.buildCommonParams(options);

    params.push(image);
    if (options.annotations) options.annotations.forEach((p) => params.push('--annotations', p));
    if (options.creds) params.push('--creds', options.creds);
    if (options.ignorePaths) options.ignorePaths.forEach((p) => params.push('--ignore-paths', p));
    if (options.insecureRegistry) params.push('--insecure-registry');
    if (options.output) params.push('--output', options.output);
    if (options.path) params.push('--path', options.path);
    if (options.provider) params.push('--provider', options.provider);
    if (options.reproducible) params.push('--reproducible');
    if (options.revision) params.push('--revision', options.revision);
    if (options.source) params.push('--source', options.source);

    params.unshift('push', 'artifact');
    await this.run(params);
  }
}
