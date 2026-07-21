import {
  CapabilityMatcher,
  CollectionUtilities,
  IComponent, ITarget,
  ValidationError,
  ValidationErrorCount,
  ValidationErrorLevel,
} from '../../index.ts';

import * as logtape from '@logtape/logtape';

export interface ResolvedComponent {
  component: IComponent;
  dependencies: IComponent[];
  errors: ValidationError[];
}

/**
 * Result of a resolve operation, a dependency graph showing relationships between components and any dependency errors.
 */
export interface IDependencyGraph {
  get target(): ITarget;

  /**
   * Validation errors on the configuration tree
   */
  get errors(): ReadonlyArray<ValidationError>;

  /**
   * Component-specific resources
   */
  get components(): Record<string, ResolvedComponent>;

  /**
   * Whether the graph is valid (there are no fatal errors)
   */
  get valid(): boolean;

  addErrors(...errors: ValidationError[]): void;

  assertValid(logger?: logtape.Logger): boolean;
}

export class DependencyGraph implements IDependencyGraph {
  private readonly _target: ITarget;
  private readonly _errors: ValidationError[] = [];
  private readonly _components: Record<string, ResolvedComponent>;

  private constructor(
    target: ITarget,
    components: Record<string, ResolvedComponent>,
  ) {
    this._target = target;
    this._components = components;
  }

  public static async resolve(
    target: ITarget,
    components: IComponent[],
    validate: boolean = true,
  ): Promise<IDependencyGraph> {
    components = await CollectionUtilities.asyncFilter(
      components,
      async (c: IComponent) => await c.props.enable.$resolve() === true,
    );
    const results: Record<string, Partial<ResolvedComponent>> = Object
      .fromEntries(components.map((v): [string, Partial<ResolvedComponent>] => {
        return [v.rid, { component: v, errors: [] }];
      }));

    // validate dependency requirements
    await Promise.all(components.map(async (v) => {
      const requirements = await v.getRequirements();
      results[v.rid].dependencies = requirements.reduce<IComponent[]>(
        (prev, cur) => {
          const matches = components.filter((v2) => cur.match(v2));

          if ((matches.length <= 0) && validate) {
            // if the target itself declares the capability we want, then allow validation to succeed
            if (
              cur instanceof CapabilityMatcher &&
              cur.matchArray(target.capabilities)
            ) {
              return prev.concat(matches);
            }

            results[v.rid].errors!.push(
              new ValidationError(
                `failed to satisfy dependency on ${cur.toString()}`,
                ValidationErrorLevel.ERROR,
                v.toString(),
              ),
            );
          }

          return prev.concat(matches);
        },
        [],
      );
    }));

    return new DependencyGraph(
      target,
      results as Record<string, ResolvedComponent>,
    );
  }

  public get target(): ITarget {
    return this._target;
  }

  public get errors(): ReadonlyArray<ValidationError> {
    const result = [...this._errors];
    for (const component of Object.values(this.components)) {
      result.push(...component.errors);
    }

    return result;
  }

  public get components(): Record<string, ResolvedComponent> {
    return this._components;
  }

  public get valid(): boolean {
    const errors = this.countErrors();
    return errors.errors <= 0;
  }

  public addErrors(...errors: ValidationError[]) {
    this._errors.push(...errors);
  }

  protected countErrors(): ValidationErrorCount {
    const count: ValidationErrorCount = {
      messages: 0,
      warnings: 0,
      errors: 0,
    };

    for (const error of this.errors) {
      if (error.level == ValidationErrorLevel.WARNING) count.warnings++;
      if (error.level == ValidationErrorLevel.ERROR) count.errors++;
      if (error.level == ValidationErrorLevel.INFO) count.messages++;
    }

    return count;
  }

  /**
   * Logs any global or component-specific validation errors, and returns false if any are fatal
   */
  public assertValid(logger?: logtape.Logger): boolean {
    if (logger) {
      for (const error of this.errors) {
        error.assert(logger);
      }
    }

    const errors = this.countErrors();

    let error = false;
    let message = 'passed';
    if (errors.errors > 0) {
      error = true;
      message = 'failed';
    }

    const line = `validation ${message} for ${this.target.toString()}: ${errors.errors} errors, ${errors.warnings} warnings, ${errors.messages} messages`;

    if (error) {
      logger?.error(line);
    } else {
      logger?.info(line);
    }

    return errors.errors <= 0;
  }
}
