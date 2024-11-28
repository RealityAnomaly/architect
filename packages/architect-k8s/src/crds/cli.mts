import { Command } from "commander";
import { K8sPlugin } from "../plugin.mts";
import { CrdsConfig } from "./config.mts";
import { CRDSyncOptions } from "./index.mts";

export class CRDCommand extends Command {
  private readonly plugin: K8sPlugin;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async add(options: any) {
    const crd = {
      name: options.domain
    } as CrdsConfig;

    if (typeof(options.url) === 'string') {
      const paths = (options.url as string).split(',');
      crd.http = {
        paths: paths,
      };
    }

    if (typeof(options.git) === 'string') {
      const paths = (options.git as string).split('+');

      let ref = undefined;
      if (paths.length >= 2)
        ref = paths[1];

      crd.git = {
        repos: [{
          url: paths[0],
          ref: ref,
          paths: ['.'],
        }],
      };
    }

    if (typeof(options.kustomize) === 'string') {
      const paths = (options.kustomize as string).split(',');
      crd.kustomize = {
        kustomizations: [],
      };

      for (const path of paths) {
        crd.kustomize.kustomizations.push({
          path: path
        });
      };
    }

    await this.plugin.crds.add(crd);
    await this.plugin.crds.commit();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async remove(options: any) {
    await this.plugin.crds.remove(options.domain);
    await this.plugin.crds.commit();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async list(_: any) {
    const crds = this.plugin.crds.list();
    console.log(crds)
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async sync(options: any) {
    const syncOptions = {
      fetchOnly: options.fetchOnly,
    } as CRDSyncOptions;

    if (typeof(options.domain) === 'string') {
      const domains = (options.domain as string).split(',')
      for (const domain of domains) {
        const crd = this.plugin.crds.get(domain);
        if (crd === undefined) continue;

        await this.plugin.crds.sync(crd, syncOptions);
      }
    } else {
      await this.plugin.crds.syncAll(syncOptions);
    }

    await this.plugin.crds.commit();
  };

  constructor(plugin: K8sPlugin) {
    super('crd');

    this.plugin = plugin;
    this.description('Commands for interacting with and manipulating CRDs')

    this.command('add')
      .description('Adds CRDs from a specific location')
      .requiredOption('-d, --domain <domain>', 'Specify the CRD domain (required)')
      .option('-u, --url <urls>', 'Specify a list of URLs where CRD YAML files are located')
      .option('-g, --git <paths>', 'Specify a list of Git repositories with subpaths')
      .option('-k, --kustomize <paths>', 'Specify a list of kustomizations to run Kustomize on')
      .action(this.add.bind(this));
    this.command('remove')
      .description('Removes the specific CRD domain')
      .requiredOption('-d, --domain <domain>', 'Specify the CRD domain (required)')
      .action(this.remove.bind(this));
    this.command('list')
      .description('List all currently registered CRDs')
      .action(this.list.bind(this));
    this.command('sync')
      .description('Fetch CRDs and generate TypeScript models')
      .option('-d, --domain <domain>', 'Only fetch these CRD domains')
      .option('-f, --fetch-only', 'Skip model generation and only fetch YAML definitions', false)
      .action(this.sync.bind(this));
  };
}
