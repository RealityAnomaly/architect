// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as yaml from '@std/yaml';
import { Shim } from './../shim.ts'

/**
 * Reference to a key in a SOPS secret file
 */
export interface SOPSRef {
  file: string
  path: string
}

export interface SOPSOptions {
  disableVersionCheck?: boolean;
  checkForUpdates?: boolean;
  kms?: string[];
  awsProfile?: string;
  gcpKms?: string[];
  hcKms?: string[];
  azureKv?: string[];
  hcVaultTransit?: string[];
  pgp?: string[];
  age?: string[];
  extract?: string;
  inputType: 'json' | 'yaml' | 'dotenv' | 'ini' | 'binary';
  outputType: 'json' | 'yaml' | 'dotenv' | 'ini' | 'binary';
  showMasterKeys?: boolean;
  addGcpKms?: string[];
  rmGcpKms?: string[];
  addHcKms?: string[];
  rmHcKms?: string[];
  addAzureKv?: string[];
  rmAzureKv?: string[];
  addKms?: string[];
  rmKms?: string[];
  addHcVaultTransit?: string[];
  rmHcVaultTransit?: string[];
  addAge?: string[];
  rmAge?: string[];
  addPgp?: string[];
  rmPgp?: string[];
  ignoreMac?: boolean;
  macOnlyEncrypted?: boolean;
  unencryptedSuffix?: string;
  encryptedSuffix?: string;
  unencryptedRegex?: string;
  encryptedRegex?: string;
  unencryptedCommentRegex?: string;
  encryptedCommentRegex?: string;
  config?: string;
  encryptionContext?: Record<string, string>;
  shamirSecretSharingThreshold?: number;
  indent?: number;
  verbose?: boolean;
  filenameOverride?: string;
  decryptionOrder?: string[];
  enableLocalKeyService?: boolean;
  keyService?: string[];
}

export class SOPSShim extends Shim {
  constructor(binary: string = 'sops') {
    super(binary);
  }

  private buildCommonParams(options: SOPSOptions): string[] {
    const params: string[] = [];

    if (options.disableVersionCheck) params.push('--disable-version-check');
    if (options.checkForUpdates) params.push('--check-for-updates');
    if (options.kms) params.push('--kms', options.kms.join(','));
    if (options.awsProfile) params.push('--aws-profile', options.awsProfile);
    if (options.gcpKms) params.push('--gcp-kms', options.gcpKms.join(','));
    if (options.hcKms) params.push('--hckms', options.hcKms.join(','));
    if (options.azureKv) params.push('--azure-kv', options.azureKv.join(','));
    if (options.hcVaultTransit) params.push('--hc-vault-transit', options.hcVaultTransit.join(','));
    if (options.pgp) params.push('--pgp', options.pgp.join(','));
    if (options.age) params.push('--age', options.age.join(','));
    if (options.extract) params.push('--extract', options.extract);
    if (options.inputType) params.push('--input-type', options.inputType);
    if (options.outputType) params.push('--output-type', options.outputType);
    if (options.showMasterKeys) params.push('--show-master-keys');
    if (options.addGcpKms) params.push('--add-gcp-kms', options.addGcpKms.join(','));
    if (options.rmGcpKms) params.push('--rm-gcp-kms', options.rmGcpKms.join(','));
    if (options.addHcKms) params.push('--add-hckms', options.addHcKms.join(','));
    if (options.rmHcKms) params.push('--rm-hckms', options.rmHcKms.join(','));
    if (options.addAzureKv) params.push('--add-azure-kv', options.addAzureKv.join(','));
    if (options.rmAzureKv) params.push('--rm-azure-kv', options.rmAzureKv.join(','));
    if (options.addKms) params.push('--add-kms', options.addKms.join(','));
    if (options.rmKms) params.push('--rm-kms', options.rmKms.join(','));
    if (options.addHcVaultTransit) params.push('--add-hc-vault-transit', options.addHcVaultTransit.join(','));
    if (options.rmHcVaultTransit) params.push('--rm-hc-vault-transit', options.rmHcVaultTransit.join(','));
    if (options.addAge) params.push('--add-age', options.addAge.join(','));
    if (options.rmAge) params.push('--rm-age', options.rmAge.join(','));
    if (options.addPgp) params.push('--add-pgp', options.addPgp.join(','));
    if (options.rmPgp) params.push('--rm-pgp', options.rmPgp.join(','));
    if (options.ignoreMac) params.push('--ignore-mac');
    if (options.macOnlyEncrypted) params.push('--mac-only-encrypted');
    if (options.unencryptedSuffix) params.push('--unencrypted-suffix', options.unencryptedSuffix);
    if (options.encryptedSuffix) params.push('--encrypted-suffix', options.encryptedSuffix);
    if (options.unencryptedRegex) params.push('--unencrypted-regex', options.unencryptedRegex);
    if (options.encryptedRegex) params.push('--encrypted-regex', options.encryptedRegex);
    if (options.unencryptedCommentRegex) params.push('--unencrypted-comment-regex', options.unencryptedCommentRegex);
    if (options.encryptedCommentRegex) params.push('--encrypted-comment-regex', options.encryptedCommentRegex);
    if (options.config) params.push('--config', options.config);
    if (options.encryptionContext) params.push('--encryption-context', Object.entries(options.encryptionContext).map(([k, v]) => `${k}:${v}`).join(','));
    if (options.shamirSecretSharingThreshold) params.push('--shamir-secret-sharing-threshold', options.shamirSecretSharingThreshold.toString());
    if (options.indent) params.push('--indent', options.indent.toString());
    if (options.filenameOverride) params.push('--filename-override', options.filenameOverride);
    if (options.decryptionOrder) params.push('--decryption-order', options.decryptionOrder.join(','));
    if (options.enableLocalKeyService) params.push('--enable-local-keyservice');
    if (options.keyService) options.keyService.forEach(k => params.push('--keyservice', k));

    return params;
  }

  private async encryptDecryptOp(op: string, data: string | Uint8Array<ArrayBufferLike>, options: SOPSOptions): Promise<Uint8Array<ArrayBufferLike>> {
    const params = this.buildCommonParams(options);
    if (typeof data === 'string') params.unshift(data);
    params.unshift(op);

    // run in temporary directory for idempotency
    const tmpdir = await Deno.makeTempDir();

    try {
      const process = await this.run(params, {
        cwd: tmpdir,
      }, async (p) => {
        if (typeof data === 'string') return;

        const writer = p.stdin.getWriter();
        await writer.write(data);
        await writer.close();
      });

      return await process.stdout.bytes();
    } finally {
      await Deno.remove(tmpdir, {
        recursive: true
      });
    }
  }

  /**
   * Decrypts
   * @param data
   * @param options
   */
  public async decrypt(data: string | Uint8Array<ArrayBufferLike>, options: SOPSOptions): Promise<Uint8Array<ArrayBufferLike>> {
    return await this.encryptDecryptOp('decrypt', data, options);
  }

  public async encrypt(data: string | Uint8Array<ArrayBufferLike>, options: SOPSOptions): Promise<Uint8Array<ArrayBufferLike>> {
    return await this.encryptDecryptOp('encrypt', data, options);
  }

  public async decryptString(data: string, options: SOPSOptions): Promise<string> {
    return this.decoder.decode(await this.decrypt(this.encoder.encode(data), options));
  }

  public async encryptString(data: string, options: SOPSOptions): Promise<string> {
    return this.decoder.decode(await this.encrypt(this.encoder.encode(data), options));
  }

  // deno-lint-ignore no-explicit-any
  public async decryptYaml(data: string, options: Partial<SOPSOptions> = {}): Promise<any> {
    return yaml.parse(await this.decryptString(data, {
      inputType: 'yaml',
      outputType: 'yaml',
      ...options
    }));
  }
}
