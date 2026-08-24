// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import path from 'node:path';
import * as commander from 'commander';
import { ITarget, Result, TargetResolveParams } from '../internal/index.ts';
import { Architect, IProject } from '../index.ts';
import { ComponentCommand } from './component.ts';
import { TargetCommand } from './target.ts';
import process from 'node:process';
import { ProjectClass } from '../internal/project/index.ts';
import { DependencyGraphRenderer } from '../internal/graph/render.ts';
import * as logtape from '@logtape/logtape';
import fs from 'node:fs/promises';
import { CompileProgressBar } from './progress.ts';

export interface AppCommandOptions {
  debug: boolean;
}

interface AppCommandCompileOptions extends AppCommandOptions {
  output: string;
  component: string[];
  graph: boolean;
  direct: boolean;
  bootstrap: boolean;
  validate: boolean;
  requirements: boolean;
}

interface AppCommandApplyOptions extends AppCommandCompileOptions {
  dryRun: boolean;
  force: boolean;
}

class App {
  public instance?: Architect;
  public program: commander.Command;
  private readonly _projectClass?: ProjectClass;
  private pluginCommand?: commander.Command;

  constructor(_projectClass?: ProjectClass) {
    this._projectClass = _projectClass;
    this.program = new commander.Command();
  }

  protected get project(): IProject {
    return this.instanceAsserted().getProject();
  }

  public static async run(_projectClass?: ProjectClass) {
    const instance = new App(_projectClass);
    const command = await instance.build();
    await command.parseAsync();
  }

  protected instanceAsserted(): Architect {
    if (!this.instance) throw new Error('parent not initialised');
    return this.instance;
  }

  protected async build(): Promise<commander.Command> {
    this.program.hook('preSubcommand', this.preSubcommand.bind(this));

    this.program
      .name('architect')
      .description(
        'Architect is a framework for generating structured configuration trees in TypeScript.',
      )
      .option(
        '-v, --verbose',
        'increase the verbosity (can be specified up to two times)',
        this.increaseVerbosity.bind(this),
        0,
      );

    if (this._projectClass) {
      this.program.command('compile [target]')
        .description(
          'Compiles resources for the specified target or all targets',
        )
        .option(
          '-o, --output <dir>',
          'output directory',
          path.join(process.cwd(), 'build'),
        )
        .option(
          '-c, --component [components...]',
          'list of component names to compile',
          [],
        )
        .option(
          '-d, --direct',
          'skips transforms for any GitOps providers'
        )
        .option(
          '-b, --bootstrap',
          'performs transforms for bootstrapping'
        )
        .option('-g, --graph', 'render and write a dependency graph')
        .option('--no-validate', 'skips resource validation')
        .option('--no-requirements', 'skips requirement validation')
        .action(this.compile.bind(this));

      this.program.command('apply [target]')
        .description('Applies compiled resources to infrastructure')
        .option(
          '-o, --output <dir>',
          'output directory',
          path.join(process.cwd(), 'build'),
        )
        .option(
          '-c, --component [components...]',
          'list of component names to apply',
          [],
        )
        .option(
          '-f, --force',
          'forcible apply, bypassing any checks'
        )
        .option(
          '-d, --direct',
          'applies in direct mode, skipping any proxy such as GitOps'
        )
        .option(
          '-b, --bootstrap',
          'applies only resources marked for bootstrapping the target'
        )
        .option('--dry-run', 'shows the changes that would be applied')
        .option('--no-validate', 'skips resource validation')
        .option('--no-requirements', 'skips requirement validation')
        .action(this.apply.bind(this));

      this.program.addCommand(new ComponentCommand(this));
      this.program.addCommand(new TargetCommand(this));
    }

    this.pluginCommand = this.program.command('plugin')
      .description('Commands for plugin modules');

    return this.program;
  }

  private increaseVerbosity(_dummyValue: string, previous: number): number {
    return previous + 1;
  }

  private async preSubcommand(
    thisCommand: commander.Command,
    actionCommand: commander.Command,
  ): Promise<void> {
    const options = thisCommand.opts();
    let logLevel: logtape.LogLevel = 'info';
    if (options.verbose === 1) {
      logLevel = 'debug';
    } else if (options.verbose >= 2) {
      logLevel = 'trace';
    }

    this.instance = await Architect.create(this._projectClass, logLevel);

    // we have to do this late because the config file is only loaded once we have the -c parameter
    if (actionCommand == this.pluginCommand!) {
      for (const plugin of Object.values(this.instance.pluginRegistry.data)) {
        await plugin.registerCommand(actionCommand);
      }
    }
  }

  private async _compile(
    params: TargetResolveParams,
    targets: ITarget[],
    options: AppCommandCompileOptions | AppCommandApplyOptions,
    apply: boolean,
    bar?: CompileProgressBar
  ): Promise<Record<string, Result>> {
    const architect = this.instanceAsserted();
    const logger = architect.logger;
    const ignoreErrors = false;
    let errors = false;

    const promises = targets.map(async (v): Promise<[string, Result | undefined]> => {
      const targetName = v.model.metadata.name!;
      if (!v) return [targetName, undefined];

      const result = await v.compile(params, logger, bar);
      if (result == null) return [targetName, undefined];

      result.graph.assertValid(logger);

      if (apply) {
        if (!result.graph.valid) {
          if (ignoreErrors) {
            logger.warn(`validation errors occurred, but continuing anyway as the ignore option was specified`);
          } else {
            bar?.setCompleted();
            errors = true;
            return [v.model.metadata.name!, result];
          }
        }

        result.diffs = await v.diff(result, params, logger, bar);
      } else {
        const output = path.join(options.output, v.model.metadata.name!);
        await fs.rm(output, {recursive: true, force: true});
        await fs.mkdir(output, {recursive: true});
        await result.write(output);

        if (options.graph) {
          await DependencyGraphRenderer.render(result.graph, {
            path: output,
          });
        }
      }

      bar?.setCancelled();

      if (!result.graph.valid) {
        errors = true;
      }

      return [v.model.metadata.name!, result];
    });

    const [results] = await Promise.all([
      Promise.all(promises),
      bar?.render()
    ]);

    if (errors) {
      Deno.exit(2);
    }

    return Object.fromEntries(
      results.filter(([_, v]) => v !== undefined)
    ) as Record<string, Result>;
  }

  private async run(target: string | undefined, options: AppCommandCompileOptions | AppCommandApplyOptions, apply: boolean) {
    const params: TargetResolveParams = {
      direct: options.direct,
      bootstrap: options.bootstrap,
      components: options.component.length > 0 ? options.component : undefined,
      requirements: options.requirements,
      validate: options.validate,
      graph: options.graph,
    };

    if (apply && params?.validateOnly) {
      this.program.error('validateOnly cannot be used at the same time as apply', { exitCode: 2 });
    }

    const targets = (target
      ? [await this.project.getTarget(target)]
      : await this.project.getTargets()).filter((t) => !!t);

    if (targets.length <= 0) {
      this.program.error('unable to find any targets', { exitCode: 2 });
    }

    // currently the bar only works when we're not rendering multiple targets in parallel
    const bar = targets.length == 1 ? new CompileProgressBar() : undefined;
    const results = await this._compile(params, targets, options, apply, bar);
    if (!apply) return;

    // print the diffs and prompt the user for consent
    let changes = false;
    for (const result of Object.values(results)) {
      if (!result.diffs) continue;
      for (const diff of Object.values(result.diffs)) {
        if (!diff) continue;
        console.log(diff);
        changes = true;
      }
    }

    if (!changes) {
      console.log('No changes to apply');
      Deno.exit(0);
    }

    console.log(); // print newline
    const confirmed = confirm('Do you want to perform these actions?');
    if (!confirmed) Deno.exit(3);

    const architect = this.instanceAsserted();
    const logger = architect.logger;
    const applyOptions = options as AppCommandApplyOptions;

    const promises = Object.values(results).map(async v => {
      await v.target.apply(v, {
        force: applyOptions.force,
        dryRun: applyOptions.dryRun,
        ...params,
      }, logger, bar);

      bar?.setCompleted();
    });

    await Promise.all([
      Promise.all(promises),
      bar?.render()
    ]);
  }

  private async compile(target: string | undefined, options: AppCommandCompileOptions) {
    await this.run(target, options, false);
  }

  private async apply(target: string | undefined, options: AppCommandApplyOptions) {
    await this.run(target, options, true);
  }
}

export default App
