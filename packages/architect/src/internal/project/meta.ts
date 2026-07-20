import { ProjectConfig, ProjectConfigLoader } from './config.ts';
import { Project, ProjectClass } from './index.ts';
import { Constants } from '../constants.ts';

export class ProjectMetadata<TModel extends ProjectConfig = ProjectConfig> {
  public model: TModel;

  constructor(model: TModel) {
    this.model = model;
  }

  public static from<TModel extends ProjectConfig, T extends Project = Project>(
    clazz: T | ProjectClass<T>,
  ): ProjectMetadata<TModel> {
    const model = Reflect.getMetadata(Constants.MODEL_META_KEY, clazz);
    return new ProjectMetadata<TModel>(model);
  }

  // deno-lint-ignore no-explicit-any
  public assign(target: any) {
    ProjectConfigLoader.validate(this.model, target.name);

    Reflect.defineMetadata(Constants.TYPE_META_KEY, 'project', target);
    Reflect.defineMetadata(Constants.MODEL_META_KEY, this.model, target);
    Reflect.defineMetadata(Constants.CLASS_META_KEY, this.model.name, target);
  }
}