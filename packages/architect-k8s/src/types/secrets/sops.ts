import * as yaml from '@std/yaml';

import * as api from '@glassway/kubernetes-models';
import { ModelData } from "@glassway/kubernetes-types/model";
import { SOPSShim } from '@glassway/architect';

const SOPS_REGEX = new RegExp('ENC\[[^\]]*\]');

export interface ISOPSSecret extends api.v1.ISecret {
  "sops"?: object;
}

export class SOPSSecret extends api.v1.Secret {
  "sops"?: object;

  constructor(data?: ModelData<ISOPSSecret>) {
    super(data);
    this.sops = data?.sops;
  }

  /**
   * Decrypts the secret and strips the SOPS tag off of it
   */
  public async decrypt(): Promise<api.v1.Secret> {
    const shim = new SOPSShim();
    const stringData = { ...(this.stringData ?? {}) };
    const plainKeys = Object.fromEntries(
      Object.entries(stringData).filter(([_, v]) => !SOPS_REGEX.test(v))
    );
    const cipherKeys = Object.fromEntries(
      Object.entries(stringData).filter(([_, v]) => SOPS_REGEX.test(v))
    );

    const input = yaml.stringify({
      sops: this.sops,
      ...cipherKeys
    }, {
      lineWidth: -1,
      skipInvalid: true
    });

    const result = await shim.decrypt(
      new TextEncoder().encode(input), {
        inputType: 'yaml',
        outputType: 'yaml'
      }
    );

    const decryptedKeys = yaml.parse(
      new TextDecoder().decode(result)
    ) as { [key: string]: string };

    // to preserve the order of values
    for (const [key, value] of Object.entries(plainKeys))
      stringData[key] = value;
    for (const [key, value] of Object.entries(decryptedKeys))
      stringData[key] = value;

    return new api.v1.Secret({
      metadata: this.metadata,
      stringData: stringData,
    });
  }
}
