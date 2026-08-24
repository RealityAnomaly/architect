import { Shim, ShimProcessOptions } from '@glassway/architect';

export interface CosignOptions {
  timeout?: string;
}

export interface CosignSignOptions extends CosignOptions {
  allowHttpRegistry?: boolean;
  allowInsecureRegistry?: boolean;
  annotations?: Record<string, string>;
  bundle?: string;
  certificate?: string;
  certificateChain?: string;
  fulcioAuthFlow?: 'normal' | 'device' | 'token' | 'client_credentials';
  identityToken?: string;
  k8sKeychain?: boolean;
  key?: string;
  oidcClientId?: string;
  oidcClientSecretFile?: string;
  oidcDisableAmbientProviders?: boolean;
  oidcProvider?: 'spiffe' | 'google' | 'github-actions' | 'filesystem' | 'buildkite-agent';
  oidcRedirectUrl?: string;
  recursive?: boolean;
  registryCacert?: string;
  registryClientCert?: string;
  registryClientKey?: string;
  registryPassword?: string;
  registryReferrersMode?: 'legacy' | 'oci-1-1';
  registryServerName?: string;
  registryToken?: string;
  registryUsername?: string;
  signingConfig?: string;
  sk?: boolean;
  slot?: 'authentication' | 'signature' | 'card-authentication' | 'key-management';
  timestampClientCacert?: string;
  timestampClientCert?: string;
  timestampClientKey?: string;
  timestampServerName?: string;
  trustedRoot?: string;
  upload?: boolean;
  useSigningConfig?: boolean;
  yes?: boolean;
}

export class CosignShim extends Shim {
  constructor(binary: string = 'cosign') {
    super(binary);
  }

  private buildCommonParams(options: CosignOptions): string[] {
    const params: string[] = [];
    if (options.timeout) params.push('--timeout', options.timeout);
    return params;
  }

  public async sign(digest: string, options: CosignSignOptions, processOptions?: ShimProcessOptions): Promise<void> {
    options.yes = true;

    const params = this.buildCommonParams(options);
    params.push('sign');

    if (options.allowHttpRegistry) params.push('--allow-http-registry');
    if (options.allowInsecureRegistry) params.push('--allow-insecure-registry');
    if (options.annotations) params.push('--annotations', Object.entries(options.annotations).map(([k, v]) => `${k}:${v}`).join(','));
    if (options.bundle) params.push('--bundle', options.bundle);
    if (options.certificate) params.push('--certificate', options.certificate);
    if (options.certificateChain) params.push('--certificate-chain', options.certificateChain);
    if (options.fulcioAuthFlow) params.push('--fulcio-auth-flow', options.fulcioAuthFlow);
    if (options.identityToken) params.push('--identity-token', options.identityToken);
    if (options.k8sKeychain) params.push('--k8s-keychain');
    if (options.key) params.push('--key', options.key);
    if (options.oidcClientId) params.push('--oidc-client-id', options.oidcClientId);
    if (options.oidcClientSecretFile) params.push('--oidc-client-secret-file', options.oidcClientSecretFile);
    if (options.oidcDisableAmbientProviders) params.push('--oidc-disable-ambient-providers');
    if (options.oidcProvider) params.push('--oidc-provider', options.oidcProvider);
    if (options.oidcRedirectUrl) params.push('--oidc-redirect-url', options.oidcRedirectUrl);
    if (options.recursive) params.push('--recursive');
    if (options.registryCacert) params.push('--registry-cacert', options.registryCacert);
    if (options.registryClientCert) params.push('--registry-client-cert', options.registryClientCert);
    if (options.registryClientKey) params.push('--registry-client-key', options.registryClientKey);
    if (options.registryPassword) params.push('--registry-password', options.registryPassword);
    if (options.registryReferrersMode) params.push('--registry-referrers-mode', options.registryReferrersMode);
    if (options.registryServerName) params.push('--registry-server-name', options.registryServerName);
    if (options.registryToken) params.push('--registry-token', options.registryToken);
    if (options.registryUsername) params.push('--registry-username', options.registryUsername);
    if (options.signingConfig) params.push('--signing-config', options.signingConfig);
    if (options.sk) params.push('--sk');
    if (options.slot) params.push('--slot', options.slot);
    if (options.timestampClientCacert) params.push('--timestamp-client-cacert', options.timestampClientCacert);
    if (options.timestampClientCert) params.push('--timestamp-client-cert', options.timestampClientCert);
    if (options.timestampClientKey) params.push('--timestamp-client-key', options.timestampClientKey);
    if (options.timestampServerName) params.push('--timestamp-server-name', options.timestampServerName);
    if (options.trustedRoot) params.push('--trusted-root', options.trustedRoot);
    if (options.upload) params.push('--upload');
    if (options.useSigningConfig) params.push('--use-signing-config');
    if (options.yes) params.push('--yes');

    params.push(digest);

    await this.run(params, processOptions);
  }
}
