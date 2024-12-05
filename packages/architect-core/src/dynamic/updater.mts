import fs from 'node:fs/promises';
import path from 'node:path';

import { Architect, ComponentClass, ComponentMetadata, ComponentModel, ComponentModelFileInstance, ComponentModelUtilities } from "../index.mts";
import { Project } from "../project.mts";
import { Logger } from 'npm:winston';

export interface ComponentUpgradeState<TModel extends ComponentModel = ComponentModel> {
  clazz: ComponentClass;
  meta: ComponentMetadata;
  model: TModel;
  file: ComponentModelFileInstance<TModel>;
  logger: Logger;
};

/**
 * Component updater, responsible for updating component inputs.
 */
export class Updater {
  private readonly parent: Architect;
  private readonly project: Project;
  private readonly logger: Logger;

  constructor(parent: Architect, project: Project) {
    this.parent = parent;
    this.project = project;
    this.logger = this.parent.logger.child({ component: 'updater' });
  };

  private async updateComponent(component: ComponentUpgradeState) {
    // Create the fake target, which is used to build the component in isolation for testing
    // The fake target is an approximation and is not intended to simulate all usecases, component requirements are also disabled
    const targetType = this.parent.plugins.targetMap[component.meta.target!];
    const target = new targetType(targetType.fake(), {}, this.parent);
    target.enable(component.clazz, { inputs: component.model.inputs }, undefined, 100, true);
    
    const instance = target.component(component.clazz, undefined, true);
    const changed = await instance.upgrade(component);
    if (changed) {
      const params = { requirements: false };
      const graph = await target.resolve(params);
      const resolved = await target.compile(graph, params);

      if (!resolved.graph.assertValid(true))
        throw new Error(`failed to validate component ${component.clazz.name} after input upgrade`);
    };
  };

  public async update(components: ComponentClass[], dry: boolean = false) {
    this.logger.debug('updater: loading model definition files');
    const modelFiles = await ComponentModelUtilities.collect([
      path.join(this.project.root!, 'src/components')
    ]);
    
    const map: ComponentUpgradeState[] = [];

    // collect valid components
    for (const component of components) {
      const meta = ComponentMetadata.from(component);
      if (!meta.model || !meta.model.class) {
        this.logger.warn(`updater: skipping ${component.name}, missing model or class name`);
        continue;
      };

      if (!meta.model.inputs || Object.values(meta.model.inputs).length <= 0) {
        this.logger.info(`updater: skipping ${component.name}, no inputs to update`);
        continue;
      };

      let foundModel: ComponentModel | undefined;
      let fileInstance: ComponentModelFileInstance | undefined;
      for (const file of modelFiles) {
        for (const fileModel of Object.values(file.model)) {
          if (fileModel && fileModel.class && fileModel.class === meta.model.class) {
            foundModel = fileModel;
            fileInstance = file;
          };
        };
      };

      if (!foundModel || !fileInstance) {
        this.logger.warn(`updater: skipping ${component.name}, unable to locate definition file`);
        continue;
      };

      map.push({
        clazz: component,
        meta: meta,
        model: foundModel,
        file: fileInstance,
        logger: this.logger,
      });
    };

    for (const component of map) {
      await this.updateComponent(component);
    };

    if (dry) {
      this.logger.warn(`updater: dry run specified, not writing definition files`);
    } else {
      for (const file of modelFiles) {
        if (!file.dirty) continue;
        await fs.writeFile(file.path, JSON.stringify(file.model, null, 2));
      };
    };
  };
}