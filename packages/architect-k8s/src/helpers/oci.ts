import * as client from 'oci-client';
import * as toolkit from '@es-toolkit/es-toolkit';

import { Logger } from '@logtape/logtape';
import { getImageReferenceParameters } from "oci-client/dist/parse-uri.js";
import { generateAuthenticationHeaders } from "oci-client/dist/util/generate-authentication-headers.js";
import { getLatestSemVer } from '@glassway/architect';

export interface OCIVersions {
  name: string,
  tags: string[]
}

export class OCIHelper {
  protected readonly logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  private async fetchAuthenticate(url: string, headers?: Record<string, string>) {
    let response = await fetch(url, {
      headers: headers
    });

    if (response.ok) return response;

    const authenticate = response.headers.get("www-authenticate");

    if (authenticate) {
      const [ scheme, paramStr ] = authenticate.split(" ");
      const params: Record<string, string> = Object.fromEntries(paramStr.split(",").map(p => p.split("=")));
      for (const [k, v] of Object.entries(params)) {
        params[k] = toolkit.trim(v, '"');
      }

      const filtered: [string, string][] = Object.entries(params).filter(o => o[0] !== "realm");
      const sp = new URLSearchParams(filtered);
      const authResult = await fetch(`${params.realm}?${sp.toString()}`);
      const token = (await authResult.json())["token"];

      response = await fetch(url, {
        headers: Object.assign({}, headers, {Authorization: `${scheme} ${token}`})
      });
    }

    if (response.ok) return response;

    // finally try with anonymous bearer token as a last resort
    // required for stuff like ghcr.io?
    return await fetch(url, {
      headers: Object.assign({}, headers, {Authorization: 'Bearer QQ=='})
    });
  }

  private async fetchVersions(ref: client.ImageReferenceUriOrParams, auth?: client.RegistryAuthentication): Promise<OCIVersions> {
    const imageRefParams = getImageReferenceParameters(ref);

    const registryPort =
      new URL(`dummyprotocol://${imageRefParams.registry}`).port || 443;
    const fetchProtocol = registryPort === 443 ? "https:" : "http:";

    const authHeaders = generateAuthenticationHeaders(auth);
    const tagsUrl =
      `${fetchProtocol}//${imageRefParams.registry}/v2/${imageRefParams.repository}/tags/list`;

    const manifestResponse = await this.fetchAuthenticate(tagsUrl, authHeaders);

    if (!manifestResponse.ok) {
      throw new Error(
        `Failed to fetch versions: ${manifestResponse.status} ${manifestResponse.statusText}`,
      );
    }

    return await manifestResponse.json() as OCIVersions;
  }

  public async getLatestVersion(repository: string, constraint?: string): Promise<string | undefined> {
    repository = repository.replace("oci://", "");
    const parts = repository.split('/');
    if (parts.length < 2) {
      this.logger.error(`invalid OCI identifier ${repository}`);
    }

    let host: string;
    if (parts.length >= 3) {
      host = parts.shift()!;
    } else {
      host = "registry-1.docker.io"
    }

    const uri = `oci://${host}/${parts.join("/")}`;
    let versions: OCIVersions;

    try {
      versions = await this.fetchVersions(uri);
    } catch (e) {
      this.logger.error(`OCI version fetch failed for ${uri}: ${e}`);
      return undefined;
    }

    return getLatestSemVer(versions.tags, constraint, this.logger);
  }
}
