import { execFile } from 'node:child_process';
import * as fs from 'node:fs/promises';
import * as os from 'node:os';
import * as path from 'node:path';
import * as util from 'node:util';
import * as yaml from '@std/yaml';
import * as url from '@std/url';
import { KubeResource, KubeResourceFilter, getLatestSemVer } from '@glassway/architect';

import { OCIHelper } from '../helpers/oci.ts';
import { Builder, BuilderParams } from './builder.ts';
import { KubeResourceUtilities, SemVerOptions } from '../../../architect/src/index.ts';
import { KubeWriter } from '../writer.ts';

export class Helm extends Builder {
  private readonly indexCache: Record<string, HelmIndex> = {};
  private readonly oci: OCIHelper;
  private static hooksWarned = false;

  constructor(params: BuilderParams, oci: OCIHelper) {
    super(params, "helm");
    this.oci = oci;
  }

  private filter(chart: string, config: HelmChartOpts, resources: KubeResource[]) {
    return config.privileged ? resources : KubeResourceUtilities.filterResources(resources, config.namespace, `Chart ${chart}`, config.filter);
  }

  private filterHooks(chart: string, resources: KubeResource[]) {
    this.assertNoHooks(chart, resources);
    return resources.filter(r => !(r.metadata?.annotations && "helm.sh/hook" in r.metadata.annotations));
  }

  private assertNoHooks(chart: string, resources: KubeResource[]) {
    const collected = new Set(resources.map(
      r => (r.metadata?.annotations ?? {})['helm.sh/hook']
    ).filter(h => h !== undefined && h !== null));

    if (collected.size > 0) {
      if (!Helm.hooksWarned) {
        this.logger.warn('Architect does not currently support running Helm hooks. Consider using an alternative controller to deploy the chart, such as the FluxCD Helm Controller.')
        Helm.hooksWarned = true;
      }

      this.logger.warn(`The following Helm hooks were detected for chart ${chart} and will not run: ${Array.from(collected).join(', ')}.`)
    }
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

    this.buildParams(chart, config, params);

    // consult our cache for the input values plus the params
    const hashInput = [values, params];
    const cacheResult = await this.tryFetchCache(hashInput);
    if (cacheResult) return this.filterHooks(chart, this.filter(chart, config, cacheResult));

    const dir = await fs.mkdtemp(path.join(os.tmpdir(), "architect-"));
    const valuesFile = path.join(dir, "values.yaml");

    try {
      await fs.writeFile(valuesFile, yaml.stringify(values, {
        skipInvalid: true,
        lineWidth: -1
      }));
      const execFileAsync = util.promisify(execFile);

      const buf = await execFileAsync(
        "helm",
        params.concat("--values", valuesFile),
        { maxBuffer: undefined },
      );

      let documents = yaml.parseAll(buf.stdout) as Record<string, unknown>[];
      // OCI charts include Pulled and Digest entries as the first document
      documents = documents.filter(resource => resource && !("Pulled" in resource) && !("Digest" in resource));
      const resources = this.filter(chart, config, this.loader.loadArray(documents));

      // cache the result from the inputs
      const output = resources.map((r) => KubeWriter.stringify(r)).join("\n---\n");
      await this.storeCache(hashInput, output);
      return this.filterHooks(chart, resources);
    } finally {
      await fs.rm(dir, {
        force: true,
        recursive: true,
      });
    }
  }

  public async getIndex(repository: string): Promise<HelmIndex | undefined> {
    if (Object.hasOwn(this.indexCache, repository)) {
      return this.indexCache[repository];
    }

    const _url = url.join(repository, "index.yaml");
    const response = await fetch(_url);
    if (response.status !== 200) {
      this.logger.error(
        `HTTP fetch failed for ${_url}: returned code ${response.status}`,
      );
      return undefined;
    }

    const text = await response.text();
    const index = yaml.parse(text) as HelmIndex;
    this.indexCache[repository] = index;

    return index;
  }

  public async getLatestVersion(
    chart: string,
    repository: string,
    options?: SemVerOptions
  ): Promise<string | undefined> {
    if (repository.startsWith("oci://")) {
      const path = this.getChartRepositoryPath(repository, chart);
      return await this.oci.getLatestVersion(path, options);
    }

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
    let version = getLatestSemVer(variants.map(v => v.version), options);
    if (version) return version;

    if (options?.constraint) {
      this.logger.error(
        `failed to find any semantic version that satisfies the constraint ${options?.constraint} for chart ${chart}`,
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

  private buildParams(chart: string, config: HelmChartOpts, params: string[]) {
    const repo = this.getChartRepositoryPath(config.repo, chart);
    if (repo.startsWith("oci://")) {
      params.push(repo);
    } else {
      params.push(chart);
      params.push("--repo", repo);
    }

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
    params.push("--version", config.version);
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
        this.logger.trace(
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

  private getChartRepositoryPath(repository: string, chart: string) {
    if (repository.startsWith("oci://")) {
      return `${repository}/${chart}`;
    }

    return repository;
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
   * allow creating resources outside the namespace passed to the build function
   */
  privileged?: boolean;

  /**
   * Filter to use to permit and deny resource types
   */
  filter?: KubeResourceFilter;

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
