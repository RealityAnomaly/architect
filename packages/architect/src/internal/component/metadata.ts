import { ComponentModel, ComponentModelUtilities } from './model.ts';
import { Architect } from '../../app.ts';
import { Component, ComponentClass } from './component.ts';

import { Ajv, ValidateFunction } from 'ajv';
import 'reflect-metadata';

/**
 * Information exposed on components via reflection metadata
 */
export class ComponentMetadata<TModel extends ComponentModel = ComponentModel> {
  public model?: TModel;
  public target?: string;

  private validated = false;

  constructor(model: TModel, target?: string) {
    this.model = model;
    this.target = target;
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
    );
  }

  // noinspection JSUnusedGlobalSymbols
  public assign<T extends object>(target: T) {
    Reflect.defineMetadata(Architect.TYPE_META_KEY, 'component', target);
    Reflect.defineMetadata(Architect.MODEL_META_KEY, this.model, target);
    Reflect.defineMetadata(Architect.TARGET_TYPE_META_KEY, this.target, target);
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
