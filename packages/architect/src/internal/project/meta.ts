import { ProjectConfig, ProjectConfigLoader } from './config.ts';
import { Architect } from '../../app.ts';
import { Project, ProjectClass } from './index.ts';

export class ProjectMetadata<TModel extends ProjectConfig = ProjectConfig> {
  public model: TModel;

  constructor(model: TModel) {
    this.model = model;
  }

  public static from<TModel extends ProjectConfig, T extends Project = Project>(
    clazz: T | ProjectClass<T>,
  ): ProjectMetadata<TModel> {
    const model = Reflect.getMetadata(Architect.MODEL_META_KEY, clazz);
    return new ProjectMetadata<TModel>(model);
  }

  // deno-lint-ignore no-explicit-any
  public assign(target: any) {
    ProjectConfigLoader.validate(this.model, target.name);

    Reflect.defineMetadata(Architect.TYPE_META_KEY, 'project', target);
    Reflect.defineMetadata(Architect.MODEL_META_KEY, this.model, target);
    Reflect.defineMetadata(Architect.CLASS_META_KEY, this.model.name, target);
  }
}