import * as yaml from '@std/yaml';
import * as path from '@std/path';
import * as logtape from '@logtape/logtape';
import { exists } from '@std/fs/exists';

import { TargetType } from '@glassway/architect';
import { SOPSShim } from '../../../architect/src/index.ts';
import { KubeTargetParams } from './target.ts';
import { ClusterSecrets } from '../types/index.ts';

const SOPS_REGEX = new RegExp('ENC\[[^\]]*\]');

export class KubeTargetEncryption {
  private readonly model: TargetType;
  private readonly params: KubeTargetParams;
  private readonly sops: SOPSShim;
  private readonly logger: logtape.Logger;

  private secrets?: ClusterSecrets;
  private secretsPrivate: boolean = false;

  constructor(model: TargetType, params: KubeTargetParams, logger: logtape.Logger) {
    this.model = model;
    this.params = params;
    this.logger = logger;
    this.sops = new SOPSShim();
  }

  /**
   * Returns an instance of {@link ClusterSecrets} from cluster.sops.yaml in the target folder, if it exists
   * @param withPrivate Whether or not to decrypt the private portion of the secret file
   */
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
