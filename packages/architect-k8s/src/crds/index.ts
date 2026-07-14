import path from 'node:path';
import * as yaml from '@std/yaml';
import * as fs from 'node:fs/promises';
import * as api from '@glassway/kubernetes-models';
import * as logtape from '@logtape/logtape';
import { K8sPlugin } from '../plugin.ts';
import { CrdsConfig } from './config.ts';
import { CRDModelGenerator, KubeResource } from '@glassway/architect';

export * from './cli.ts';
export * from './config.ts';
export * from './graph.ts';

export interface CRDSyncOptions {
  fetchOnly?: boolean;
}

export class CRDManager {
  public readonly plugin: K8sPlugin;
  private readonly logger: logtape.Logger;

  private readonly generator: CRDModelGenerator;
  private configDirty: boolean = false;
  private modelsDirty: boolean = false;

  constructor(plugin: K8sPlugin) {
    this.plugin = plugin;
    this.logger = logtape.getLogger(['architect', 'plugin', 'kubernetes', 'CRDManager']);
    this.generator = new CRDModelGenerator(plugin.parent.kubeLoader);
  }

  private get srcDir(): string {
    return path.join(this.plugin.parent.getProject().getRoot(), 'src/generated/crds');
  }

  private get dataDir(): string {
    return path.join(this.plugin.parent.getProject().getRoot(), 'src/generated/crds');
  }

  public async add(crd: CrdsConfig): Promise<void> {
    if (this.exists(crd.name)) {
      throw Error(
        `A CRD class for ${crd.name} is already registered, remove it or use the force option`,
      );
    }

    await this.sync(crd, {});

    if (!this.plugin.config.crds) {
      this.plugin.config.crds = [];
    }

    this.plugin.config.crds.push(crd);
    this.configDirty = true;
  }

  public async remove(name: string): Promise<void> {
    if (!this.plugin.config.crds) return;
    const idx = this.plugin.config.crds.findIndex((i) => i.name === name);
    if (idx === -1) return;

    if (!this.dataDir) throw Error("Project is not writable");

    // delete data dir, and regenerate models
    const dataDir = path.join(this.dataDir, name);
    await fs.rm(dataDir, {recursive: true, force: true});

    this.plugin.config.crds.splice(idx, 1);
    this.configDirty = true;
    this.modelsDirty = true;
  }

  public get(name: string): CrdsConfig | undefined {
    for (const crd of this.plugin.config.crds || []) {
      if (crd.name === name) return crd;
    }

    return undefined;
  }

  public exists(name: string): boolean {
    return this.get(name) !== undefined;
  }

  public list(): CrdsConfig[] {
    return this.plugin.config.crds || [];
  }

  public async sync(crd: CrdsConfig, options: CRDSyncOptions): Promise<void> {
    const resources = await this.fetch(crd);
    if (resources.length > 0) {
      if (!this.dataDir) throw Error("Project is not writable");

      const dir = path.join(this.dataDir, crd.name);
      await fs.rm(dir, {recursive: true, force: true});
      await fs.mkdir(dir, {recursive: true});

      await Promise.all(resources.map(async (r) => {
        const name = `${r.spec.group}_${r.spec.names.singular!}.yaml`;
        delete r["status"];
        await fs.writeFile(path.join(dir, name), yaml.stringify(r));
      }));
    }

    if (!options.fetchOnly) {
      this.modelsDirty = true;
    }
  }

  public async syncAll(options: CRDSyncOptions): Promise<void> {
    for (const crd of this.plugin.config.crds || []) {
      await this.sync(crd, options);
    }
  }

  public async commit(): Promise<void> {
    if (this.configDirty) {
      this.logger.debug('configuration marked dirty, writing');
      await this.plugin.parent.getProject().saveConfig();
    }

    if (this.modelsDirty) {
      this.logger.info('models marked dirty, running generation');
      await this.generator.generate(this.dataDir, this.srcDir);
    }
  }

  private async fetch(
    crd: CrdsConfig,
  ): Promise<api.apiextensionsK8sIo.v1.CustomResourceDefinition[]> {
    const resources = [] as KubeResource[];

    for (const repo of crd.git?.repos || []) {
      const refStr = repo.ref ? `+${repo.ref}` : '';
      try {
        resources.push(
          ...await this.plugin.gitBuilder.fetch(repo.url, repo.ref, {
            paths: repo.paths,
          }),
        );
      } catch (exception) {
        this.logger.warn(
          `git fetch failed for CRD domain ${crd.name} repository ${repo.url}${refStr}: ${exception}`,
          {url: repo.url, ref: repo.ref},
        );
      }
    }

    for (const chart of crd.helm?.charts || []) {
      try {
        resources.push(
          ...await this.plugin.helm.template(
            chart.name,
            chart.values,
            chart.options,
          ),
        );
      } catch (exception) {
        this.logger.warn(
          `helm build failed for CRD domain ${crd.name} chart ${chart.name}: ${exception}`,
          {domain: crd.name, chart: chart.name},
        );
      }
    }

    for (const path of crd.http?.paths || []) {
      try {
        resources.push(...await this.plugin.httpBuilder.fetch(path));
      } catch (exception) {
        this.logger.warn(
          `HTTP fetch failed for CRD domain ${crd.name}: ${exception}`,
        );
      }
    }

    for (const kustomization of crd.kustomize?.kustomizations || []) {
      try {
        resources.push(
          ...await this.plugin.kustomize.build(
            kustomization.path,
            kustomization.config,
          ),
        );
      } catch (exception) {
        this.logger.warn(
          `kustomize build failed for CRD domain ${crd.name} path ${kustomization.path}: ${exception}`,
          {domain: crd.name, path: kustomization.path},
        );
      }
    }

    const crds = resources.filter((r) =>
      r instanceof api.apiextensionsK8sIo.v1.CustomResourceDefinition
    );
    this.logger.info(
      `completed fetch for CRD domain ${crd.name}, found ${crds.length} resources`,
    );
    return crds;
  }
}
