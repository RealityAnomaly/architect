import { Command } from 'commander';
import { K8sPlugin } from '../plugin.mts';
import { CrdsConfig } from './config.mts';
import { CRDSyncOptions } from './index.mts';
import { AppCommandOptions } from '@perdition/architect-core';

interface CRDCommandOptions extends AppCommandOptions {}

interface CRDCommandAddOptions extends CRDCommandOptions {
  domain: string;
  url?: string;
  git?: string;
  kustomize?: string;
}

interface CRDCommandRemoveOptions extends CRDCommandOptions {
  domain: string;
}

interface CRDCommandSyncOptions extends CRDCommandOptions {
  domain?: string;
  dryRun: boolean;
  fetchOnly: boolean;
}

export class CRDCommand extends Command {
  private readonly plugin: K8sPlugin;

  constructor(plugin: K8sPlugin) {
    super("crd");

    this.plugin = plugin;
    this.description("Commands for interacting with and manipulating CRDs");

    this.command("add")
      .description("Adds CRDs from a specific location")
      .requiredOption(
        "-d, --domain <domain>",
        "Specify the CRD domain (required)",
      )
      .option(
        "-u, --url <urls>",
        "Specify a list of URLs where CRD YAML files are located",
      )
      .option(
        "-g, --git <paths>",
        "Specify a list of Git repositories with subpaths",
      )
      .option(
        "-k, --kustomize <paths>",
        "Specify a list of kustomizations to run Kustomize on",
      )
      .action(this.add.bind(this));
    this.command("remove")
      .description("Removes the specific CRD domain")
      .requiredOption(
        "-d, --domain <domain>",
        "Specify the CRD domain (required)",
      )
      .action(this.remove.bind(this));
    this.command("list")
      .description("List all currently registered CRDs")
      .action(this.list.bind(this));
    this.command("sync")
      .description("Fetch CRDs and generate TypeScript models")
      .option(
        "-d, --dry-run",
        "Simulate only, do not generate or commit changes",
        false,
      )
      .option(
        "-f, --fetch-only",
        "Skip model generation and only fetch YAML definitions",
        false,
      )
      .option("--domain <domain>", "Only fetch these CRD domains")
      .action(this.sync.bind(this));
  }

  private async add(options: CRDCommandAddOptions) {
    const crd = {
      name: options.domain,
    } as CrdsConfig;

    if (options.url) {
      const paths = options.url.split(",");
      crd.http = {
        paths: paths,
      };
    }

    if (options.git) {
      const paths = options.git.split("+");

      let ref = undefined;
      if (paths.length >= 2) {
        ref = paths[1];
      }

      crd.git = {
        repos: [{
          url: paths[0],
          ref: ref,
          paths: ["."],
        }],
      };
    }

    if (options.kustomize) {
      const paths = options.kustomize.split(",");
      crd.kustomize = {
        kustomizations: [],
      };

      for (const path of paths) {
        crd.kustomize.kustomizations.push({
          path: path,
        });
      }
    }

    await this.plugin.crds.add(crd);
    await this.plugin.crds.commit();
  }

  private async remove(options: CRDCommandRemoveOptions) {
    await this.plugin.crds.remove(options.domain);
    await this.plugin.crds.commit();
  }

  private async list(_: CRDCommandOptions) {
    const crds = this.plugin.crds.list();
    console.log(crds);
  }

  private async sync(options: CRDCommandSyncOptions) {
    const syncOptions = {
      fetchOnly: options.fetchOnly,
    } as CRDSyncOptions;

    if (options.domain) {
      const domains = options.domain.split(",");
      for (const domain of domains) {
        const crd = this.plugin.crds.get(domain);
        if (crd === undefined) continue;

        await this.plugin.crds.sync(crd, syncOptions);
      }
    } else {
      await this.plugin.crds.syncAll(syncOptions);
    }

    if (!options.dryRun) {
      await this.plugin.crds.commit();
    }
  }
}
