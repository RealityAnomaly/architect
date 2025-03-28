import { execFile } from 'node:child_process';
import * as fs from 'node:fs/promises';
import * as os from 'node:os';
import * as path from 'node:path';
import * as util from 'node:util';
import { KubeResource } from '@perdition/architect-core';

import * as yaml from 'js-yaml';
import { Builder, BuilderParams } from './builder.mts';
import * as semver from 'semver';

export class Helm extends Builder {
  private readonly indexCache: Record<string, HelmIndex> = {};

  constructor(params: BuilderParams) {
    super(params, "helm");
  }

  /**
   * Renders a Helm chart from parameters
   */
  public async template(
    chart: string,
    values: object,
    config: HelmChartOpts,
  ): Promise<KubeResource[]> {
    const params: string[] = [];

    // template operation
    params.push("template");

    // release name
    if (config.releaseName !== undefined) {
      params.push(config.releaseName);
    } else {
      params.push(chart);
    }

    // chart name
    params.push(chart);
    this.buildParams(config, params);

    // consult our cache for the input values plus the params
    const hashInput = [values, params];
    const cacheResult = await this.tryFetchCache(hashInput);
    if (cacheResult) return cacheResult;

    const dir = await fs.mkdtemp(path.join(os.tmpdir(), "architect-"));
    const valuesFile = path.join(dir, "values.yaml");

    try {
      await fs.writeFile(valuesFile, yaml.dump(values));
      const execFileAsync = util.promisify(execFile);

      const buf = await execFileAsync(
        "helm",
        params.concat("--values", valuesFile),
        { maxBuffer: undefined },
      );
      const resources = await this.loader.loadString(buf.stdout);

      // cache the result from the inputs
      await this.storeCache(hashInput, buf.stdout);
      return resources;
    } finally {
      await fs.rm(dir, {
        force: true,
        recursive: true,
      });
    }
  }

  public async getIndex(repository: string): Promise<HelmIndex | undefined> {
    if (repository.startsWith("oci://")) {
      this.logger.warn(
        `OCI Helm repositories are not yet supported: ${repository}`,
      );
      return undefined;
    }

    if (Object.hasOwn(this.indexCache, repository)) {
      return this.indexCache[repository];
    }

    const url = path.join(repository, "index.yaml");
    const response = await fetch(url);
    if (response.status !== 200) {
      this.logger.error(
        `HTTP fetch failed for ${url}: returned code ${response.status}`,
      );
      return undefined;
    }

    const text = await response.text();
    const index = yaml.load(text) as HelmIndex;
    this.indexCache[repository] = index;

    return index;
  }

  public async getLatestVersion(
    chart: string,
    repository: string,
    constraint?: string,
  ): Promise<string | undefined> {
    const index = await this.getIndex(repository);
    if (!index) return undefined;

    if (!Object.hasOwn(index.entries, chart)) {
      this.logger.error(
        `unable to find chart ${chart} in the repository ${repository}`,
      );
      return undefined;
    }

    // first, try and locate the latest version by semver
    const variants = index.entries[chart];
    let version = this.getLatestChartSemVer(chart, variants, constraint);
    if (version) return version;

    if (constraint) {
      this.logger.error(
        `failed to find any semantic version that satisfies the constraint ${constraint} for chart ${chart}`,
      );
      return undefined;
    }

    // if semver fails, fall back to timestamps
    version = this.getLatestChartUnixTime(chart, variants);
    if (!version) {
      this.logger.error(
        `failed to find any versions for chart ${chart}, fallback to timestamp comparison failed`,
      );
      return undefined;
    }

    return version;
  }

  private buildParams(config: HelmChartOpts, params: string[]) {
    // Helm parameters
    if (config.apiVersions !== undefined) {
      params.push("--api-versions", config.apiVersions.join(","));
    }

    if (config.caFile !== undefined) {
      params.push("--ca-file", config.caFile);
    }

    if (config.certFile !== undefined) {
      params.push("--cert-file", config.certFile);
    }

    if (config.includeCRDs === true) {
      params.push("--include-crds");
    }

    if (config.insecureSkipTLSVerify === true) {
      params.push("--insecure-skip-tls-verify");
    }

    if (config.isUpgrade === true) {
      params.push("--is-upgrade");
    }

    if (config.keyFile !== undefined) {
      params.push("--key-file", config.keyFile);
    }

    if (config.keyring !== undefined) {
      params.push("--keyring", config.keyring);
    }

    if (config.kubeVersion !== undefined) {
      params.push("--kube-version", config.kubeVersion);
    }

    if (config.noHooks === true) {
      params.push("--no-hooks");
    }

    if (config.passCredentials === true) {
      params.push("--pass-credentials");
    }

    if (config.password !== undefined) {
      params.push("--password", config.password);
    }

    if (config.renderSubchartNotes === true) {
      params.push("--render-subchart-notes");
    }

    if (config.skipCrds === true) {
      params.push("--skip-crds");
    }

    if (config.skipTests === true) {
      params.push("--skip-tests");
    }

    if (config.username !== undefined) {
      params.push("--username", config.username);
    }

    if (config.namespace !== undefined) {
      params.push("--namespace", config.namespace);
    }

    params.push("--disable-openapi-validation");
    params.push("--repo", config.repo);
    params.push("--version", config.version);
  }

  private getLatestChartSemVer(
    name: string,
    variants: HelmIndexEntry[],
    constraint?: string,
  ): string | undefined {
    let version: semver.SemVer | undefined = undefined;
    let original: string | undefined = undefined;

    for (const variant of variants) {
      let parsed: semver.SemVer;

      try {
        parsed = new semver.SemVer(variant.version, true);
      } catch (exception) {
        this.logger.silly(
          `failed to parse version as semver for chart ${name}: ${exception}`,
        );
        continue;
      }

      if (
        (!version || parsed.compare(version) === 1) &&
        parsed.prerelease.length <= 0
      ) {
        if (constraint && !semver.satisfies(parsed, constraint)) continue;

        version = parsed;
        original = variant.version;
      }
    }

    return original;
  }

  private getLatestChartUnixTime(
    name: string,
    variants: HelmIndexEntry[],
  ): string | undefined {
    let date: Date | undefined = undefined;
    let version: string | undefined = undefined;

    for (const variant of variants) {
      let parsed: Date;

      try {
        parsed = new Date(variant.created);
      } catch (exception) {
        this.logger.silly(
          `failed to parse created timestamp for chart ${name}: ${exception}`,
        );
        continue;
      }

      if (!date || parsed > date) {
        date = parsed;
        version = variant.version;
      }
    }

    return version;
  }
}

interface HelmIndexEntry {
  annotations: Record<string, object>;
  apiVersion: string;
  appVersion: string;
  created: string;
  description: string;
  digest: string;
  home: string;
  keywords: string[];
  maintainers: object[];
  name: string;
  sources: string[];
  urls: string[];
  version: string;
}

interface HelmIndex {
  apiVersion: string;
  entries: Record<string, HelmIndexEntry[]>;
  generated: string;
  serverInfo: object;
}

export interface HelmChartOpts {
  /**
   * Kubernetes api versions used for Capabilities.APIVersions
   */
  apiVersions?: string[];

  /**
   * verify certificates of HTTPS-enabled servers using this CA bundle
   */
  caFile?: string;

  /**
   * identify HTTPS client using this SSL certificate file
   */
  certFile?: string;

  /**
   * include CRDs in the templated output
   */
  includeCRDs?: boolean;

  /**
   * skip tls certificate checks for the chart download
   */
  insecureSkipTLSVerify?: boolean;

  /**
   * set .Release.IsUpgrade instead of .Release.IsInstall
   */
  isUpgrade?: boolean;

  /**
   * identify HTTPS client using this SSL key file
   */
  keyFile?: string;

  /**
   * location of public keys used for verification
   */
  keyring?: string;

  /**
   * Kubernetes version used for Capabilities.KubeVersion
   */
  kubeVersion?: string;

  /**
   * prevent hooks from running during install
   */
  noHooks?: boolean;

  /**
   * pass credentials to all domains
   */
  passCredentials?: boolean;

  /**
   * chart repository password where to locate the requested chart
   */
  password?: string;

  /**
   * if set, render subchart notes along with the parent
   */
  renderSubchartNotes?: boolean;

  /**
   * chart repository url where to locate the requested chart
   */
  repo: string;

  /**
   * if set, no CRDs will be installed. By default, CRDs are installed if not already present
   */
  skipCrds?: boolean;

  /**
   * skip tests from templated output
   */
  skipTests?: boolean;

  /**
   * chart repository username where to locate the requested chart
   */
  username?: string;

  /**
   * specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used
   */
  version: string;

  /**
   * namespace scope for this request
   */
  namespace?: string;

  /**
   * release name override for the chart
   */
  releaseName?: string;
}
