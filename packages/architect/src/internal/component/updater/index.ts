// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import path from 'node:path';

import * as logtape from '@logtape/logtape';
import { IProject } from '../../project/index.ts';
import { ComponentClass } from '../index.ts';
import { ComponentModel, ComponentModelFileInstance, ComponentModelUtilities, } from '../model.ts';
import { ComponentMetadata } from '../metadata.ts';

export interface ComponentUpgradeState<
  TModel extends ComponentModel = ComponentModel,
> {
  clazz: ComponentClass;
  meta: ComponentMetadata;
  model: TModel;
  file: ComponentModelFileInstance<TModel>;
  logger?: logtape.Logger;
}

/**
 * Component updater, responsible for updating component inputs.
 */
export class Updater {
  private readonly project: IProject;
  private readonly logger: logtape.Logger;

  constructor(project: IProject) {
    this.project = project;
    this.logger = logtape.getLogger(['architect', 'updater']);
  }

  public async update(components: ComponentClass[], dry: boolean = false) {
    this.logger.debug('updater: loading model definition files');
    const modelFiles = await ComponentModelUtilities.collect([
      path.join(this.project.getRoot(), 'src/components'),
    ]);

    const map: ComponentUpgradeState[] = [];

    // collect valid components
    for (const component of components) {
      const meta = ComponentMetadata.from(component);
      if (!meta.model || !meta.model.class) {
        this.logger.warn(
          `updater: skipping ${component.name}, missing model or class name`,
        );
        continue;
      }

      let foundModel: ComponentModel | undefined;
      let fileInstance: ComponentModelFileInstance | undefined;
      for (const file of modelFiles) {
        for (const fileModel of Object.values(file.model)) {
          if (
            fileModel && fileModel.class && fileModel.class === meta.model.class
          ) {
            foundModel = fileModel;
            fileInstance = file;
          }
        }
      }

      if (!foundModel || !fileInstance) {
        this.logger.warn(
          `updater: skipping ${component.name}, unable to locate definition file`,
        );
        continue;
      }

      map.push({
        clazz: component,
        meta: meta,
        model: foundModel,
        file: fileInstance,
        logger: this.logger,
      });
    }

    for (const component of map) {
      const result = await this.updateComponent(component);
      if (dry || !result || !component.file.dirty) continue;
      await Deno.writeTextFile(component.file.path, JSON.stringify(component.file.model, null, 2));
    }

    if (dry) {
      this.logger.warn(
        `updater: dry run specified, not writing definition files`,
      );
    }
  }

  private async updateComponent(component: ComponentUpgradeState): Promise<boolean> {
    // Create the fake target, which is used to build the component in isolation for testing
    // The fake target is an approximation and is not intended to simulate all use cases, component requirements are also disabled
    const targetType =
      this.project.app.pluginRegistry.targetMap[component.meta.target!];
    const fake = targetType.fake();
    const target = new targetType(fake.model, {}, this.project);

    target.enable(
      component.clazz,
      {inputs: component.model.inputs},
      undefined,
      100,
      true,
    );

    const introspection = target.getIntrospection();
    if (introspection) {
      introspection.setState(fake.state);
    }

    const instance = target.component(component.clazz, undefined, true)!;
    const changed = await instance.upgrade(component);
    if (changed) {
      const params = {requirements: false};
      const resolved = await target.compile(params);

      const logger = logtape.getLogger(['architect', 'updater', 'validator']);
      if (resolved && !resolved.graph.assertValid(logger)) return false;
    }

    return true;
  }
}
