import * as yaml from '@std/yaml';
import * as path from '@std/path';
import * as logtape from '@logtape/logtape';
import { exists } from "jsr:@std/fs/exists";

import { architectGlasswayNet } from '@glassway/architect';
import { SOPSShim } from '../../../architect/src/index.ts';
import { KubeTargetParams } from './target.ts';
import { ClusterSecrets } from '../types/index.ts';

const SOPS_REGEX = new RegExp('ENC\[[^\]]*\]');

export class KubeTargetEncryption {
  private readonly model: architectGlasswayNet.v1alpha1.Target;
  private readonly params: KubeTargetParams;
  private readonly sops: SOPSShim;
  private readonly logger: logtape.Logger;

  private secrets?: ClusterSecrets;
  private secretsPrivate: boolean = false;

  constructor(model: architectGlasswayNet.v1alpha1.Target, params: KubeTargetParams, logger: logtape.Logger) {
    this.model = model;
    this.params = params;
    this.logger = logger;
    this.sops = new SOPSShim();
  }

  public async getClusterSecrets(withPrivate: boolean = false): Promise<ClusterSecrets | undefined> {
    if (this.secrets && (this.secretsPrivate || !withPrivate)) return this.secrets;
    if (!this.params.path) return undefined;
    const location = path.join(this.params.path, 'cluster.sops.yaml');
    let content: string;

    if (!exists(location)) return undefined;

    try {
      content = await Deno.readTextFile(location);
    } catch (e) {
      this.logger.error('could not read cluster secrets file', {
        cause: e
      });

      return undefined;
    }

    if (withPrivate) {
      const decrypted = await this.sops.decryptString(content, {
        inputType: 'yaml',
        outputType: 'yaml',
      });
      this.secrets = yaml.parse(decrypted) as ClusterSecrets;
    } else {
      const data = yaml.parse(content) as { [key: string]: string };
      this.secrets = Object.fromEntries(
        Object.entries(data).filter(([_, v]) => !SOPS_REGEX.test(v))
      );
    }

    this.secretsPrivate = withPrivate;
    return this.secrets;
  }
}
