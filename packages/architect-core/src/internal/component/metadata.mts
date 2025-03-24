import { ComponentModel, ComponentModelUtilities } from './model.mts';
import { Architect } from '../../app.mts';
import { Component, ComponentClass } from './component.mts';

import { Ajv, ValidateFunction } from 'ajv';
import { Reflect } from '@dx/reflect';

/**
 * Information exposed on components via reflection metadata
 */
export class ComponentMetadata<TModel extends ComponentModel = ComponentModel> {
  public model?: TModel;
  public target?: string;
  public clazz?: string;

  private validated = false;

  constructor(model: TModel, target: string, clazz?: string) {
    this.model = model;
    this.target = target;
    this.clazz = clazz;
  }

  public static from<
    TModel extends ComponentModel,
    T extends Component = Component,
  >(clazz: ComponentClass<T>): ComponentMetadata<TModel> {
    return new ComponentMetadata<TModel>(
      Reflect.hasMetadata(Architect.MODEL_META_KEY, clazz)
        ? Reflect.getMetadata(Architect.MODEL_META_KEY, clazz)
        : undefined,
      Reflect.hasMetadata(Architect.TARGET_TYPE_META_KEY, clazz)
        ? Reflect.getMetadata(Architect.TARGET_TYPE_META_KEY, clazz)
        : undefined,
      Reflect.hasMetadata(Architect.CLASS_META_KEY, clazz)
        ? Reflect.getMetadata(Architect.CLASS_META_KEY, clazz)
        : undefined,
    );
  }

  public assign<T extends object>(target: T) {
    Reflect.defineMetadata(Architect.TYPE_META_KEY, 'component', target);
    Reflect.defineMetadata(Architect.MODEL_META_KEY, this.model, target);
    Reflect.defineMetadata(Architect.TARGET_TYPE_META_KEY, this.target, target);
    if (this.clazz) {
      Reflect.defineMetadata(Architect.CLASS_META_KEY, this.clazz, target);
    }
  }

  public validate(parent: string, ajv: Ajv, validator?: ValidateFunction) {
    if (this.validated) return;

    if (this.model) {
      validator = validator ? validator : ComponentModelUtilities.createValidator(ajv);
      if (!validator(this.model)) {
        throw new Error(
          `failed to validate model for ${parent}: ${
            ajv.errorsText(validator.errors)
          }`,
        );
      }
    }

    this.validated = true;
  }
}
