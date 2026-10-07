// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as path from '@std/path';
import * as client from 'oci-client';
import * as toolkit from '@es-toolkit/es-toolkit';
import { userInfo } from "node:os";

import { Logger } from '@logtape/logtape';
import { getImageReferenceParameters } from "oci-client/dist/parse-uri.js";
import { getLatestSemVer, SemVerOptions } from '@glassway/architect';
import LinkHeader from 'http-link-header';

export interface OCIVersions {
  name: string,
  tags: string[]
}

interface DockerConfig {
  auths?: Record<string, DockerCredentials>;
  credsStore?: string;
  credHelpers?: Record<string, string>;
}

interface DockerCredentialOutput {
  'ServerURL': string,
  'Username': string;
  'Secret': string;
}

interface DockerCredentials {
  auth?: string;
  username?: string;
  password?: string;
}

export class OCIHelper {
  protected readonly logger: Logger;
  private readonly bearerCache = new Map<string, string>();

  constructor(logger: Logger) {
    this.logger = logger;
  }

  private getBearerCacheName(url: string): string {
    const u = new URL(url);
    const match = u.pathname.match(/^\/v2\/(.+?)\/(?:tags|manifests|blobs)\//);
    return `${u.origin}/${match ? match[1] : u.pathname}`;
  }

  public async getCredentials(registry: string) : Promise<DockerCredentials | undefined> {
    const configPath = path.join(userInfo().homedir, ".docker/config.json");

    try {
      const result = await Deno.stat(configPath);
      if (!result.isFile) return undefined;

      const config = JSON.parse(await Deno.readTextFile(configPath)) as DockerConfig;

      const entry = config.auths?.[registry];
      if (entry?.username && entry?.password) {
        return { username: entry.username, password: entry.password };
      }

      if (entry?.auth) {
        const decoded = atob(entry.auth);
        const sep = decoded.indexOf(":");
        if (sep > 0) return { username: decoded.slice(0, sep), password: decoded.slice(sep + 1) };
      }

      const helper = config.credHelpers?.[registry] ?? config.credsStore;
      if (!helper) return undefined;

      const command = new Deno.Command(`docker-credential-${helper}`, {
        args: ['get'],
        stdin: 'piped',
        stdout: 'piped',
        stderr: 'piped',
      });

      const process = command.spawn();
      const writer = process.stdin.getWriter();
      await writer.write(new TextEncoder().encode(registry));
      await writer.close();

      const status = await process.status;
      if (!status.success) {
        this.logger.debug(`Failed to run credential helper: ${await process.stderr.text()}`);
        return undefined;
      }

      const output: DockerCredentialOutput = await process.stdout.json();

      return {
        username: output.Username,
        password: output.Secret
      }
    } catch (e) {
      this.logger.debug(`Failed to run credential helper: ${e}`)
      return undefined;
    }
  }

  private async fetchAuthenticate(url: string, credentials?: DockerCredentials) {
    const key = this.getBearerCacheName(url);
    const cached = this.bearerCache.get(key);

    if (cached) {
      const response = await fetch(url, {
        headers: { Authorization: cached },
      });
      if (response.status !== 401) return response;

      await response.body?.cancel();
      this.bearerCache.delete(key);
    }

    let response = await fetch(url);
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
      const tokenHeaders: Record<string, string> = {};
      if (credentials) {
        tokenHeaders.Authorization = `Basic ${btoa(`${credentials.username}:${credentials.password}`)}`;
      }

      const authResult = await fetch(`${params.realm}?${sp.toString()}`, { headers: tokenHeaders });
      const body = await authResult.json();
      const token = body["token"] ?? body["access_token"];

      if (token) {
        const authorization = `${scheme} ${token}`;
        response = await fetch(url, {
          headers: { Authorization: authorization },
        });

        if (response.ok) {
          this.bearerCache.set(key, authorization);
          return response;
        }

        await response.body?.cancel();
      }
    }

    // finally try with anonymous bearer token as a last resort
    // required for stuff like ghcr.io?
    const anonymous = 'Bearer QQ==';
    response = await fetch(url, {
      headers: { Authorization: anonymous }
    });

    if (response.ok) this.bearerCache.set(key, anonymous);
    return response;
  }

  private async fetchVersions(ref: client.ImageReferenceUriOrParams, credentials?: DockerCredentials): Promise<OCIVersions> {
    function parseNextLink(header: string | null, base: string): string | undefined {
      if (!header) return undefined;

      const [next] = LinkHeader.parse(header).rel("next");
      return next ? new URL(next.uri, base).toString() : undefined;
    }

    const imageRefParams = getImageReferenceParameters(ref);
    //const portString = new URL(`dummyprotocol://${imageRefParams.registry}`).port;
    //const registryPort = portString ? parseInt(portString) : 443;
    const base = `https://${imageRefParams.registry}`;

    const result: OCIVersions = { name: imageRefParams.repository, tags: [] };
    const visited = new Set<string>();

    let next: string | undefined = `${base}/v2/${imageRefParams.repository}/tags/list`;

    while (next && !visited.has(next)) {
      visited.add(next);

      const response = await this.fetchAuthenticate(next, credentials);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch versions: ${response.status} ${response.statusText}`,
        );
      }

      const page = await response.json() as Partial<OCIVersions>;
      if (page.name) result.name = page.name;
      if (page.tags) result.tags.push(...page.tags);

      next = parseNextLink(response.headers.get("link"), response.url);
    }

    return result;
  }

  public async getLatestVersion(repository: string, options?: SemVerOptions): Promise<string | undefined> {
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

    if (host === "docker.io" || host === "index.docker.io") {
      host = "registry-1.docker.io";
    }

    const uri = `oci://${host}/${parts.join("/")}`;
    const credentials = await this.getCredentials(host);

    let versions: OCIVersions;

    try {
      versions = await this.fetchVersions(uri, credentials);
    } catch (e) {
      this.logger.error(`OCI version fetch failed for ${uri}: ${e}`);
      return undefined;
    }

    return getLatestSemVer(versions.tags, options, this.logger);
  }
}
