import { asyncFilter, Component, Target, ValidationError, ValidationErrorCount, ValidationErrorLevel } from "../index.mts";

export interface ResolvedComponent {
  component: Component;
  dependencies: Component[];
  errors: ValidationError[];
};

/**
 * Result of a resolve operation, a dependency graph showing relationships between components and any dependency errors.
 */
export class DependencyGraph {
  public readonly target: Target;

  /**
   * Validation errors on the configuration tree
   */
  public readonly errors: ValidationError[] = [];

  /**
   * Component-specific resources
   */
  public readonly components: Record<string, ResolvedComponent>;

  private constructor(target: Target, components: Record<string, ResolvedComponent>) {
    this.target = target;
    this.components = components;
  };

  public countErrors(): ValidationErrorCount {
    const count: ValidationErrorCount = {
      messages: 0,
      warnings: 0,
      errors: 0,
    };

    for (const error of this.errors) {
      if (error.level == ValidationErrorLevel.WARNING) count.warnings++;
      if (error.level == ValidationErrorLevel.ERROR) count.errors++;
      if (error.level == ValidationErrorLevel.INFO) count.messages++;
    };

    for (const component of Object.values(this.components)) {
      for (const error of component.errors) {
        if (error.level == ValidationErrorLevel.WARNING) count.warnings++;
        if (error.level == ValidationErrorLevel.ERROR) count.errors++;
        if (error.level == ValidationErrorLevel.INFO) count.messages++;
      };
    };

    return count;
  };

  /**
   * Logs any global or component-specific validation errors, and returns false if any are fatal
   */
  public assertValid(): boolean {
    for (const error of this.errors) {
      error.assert(this.target.parent.logger);
    };

    for (const component of Object.values(this.components)) {
      for (const error of component.errors) {
        error.assert(this.target.parent.logger);
      };
    };

    const errors = this.countErrors();

    let level = 'info';
    let message = 'passed';
    if (errors.errors > 0) {
      level = 'error';
      message = 'failed';
    };

    this.target.parent.logger.log(level, `validation ${message} for ${this.target.toString()}: ${errors.errors} errors, ${errors.warnings} warnings, ${errors.messages} messages`);
    return errors.errors <= 0;
  };

  public static async resolve(target: Target, components: Component[], validate: boolean = true): Promise<DependencyGraph> {
    components = await asyncFilter(components, async (c: Component) => await c.props.enable.$resolve() === true);
    const results: Record<string, Partial<ResolvedComponent>> = Object.fromEntries(components.map((v): [string, Partial<ResolvedComponent>] => {
      return [v.rid, { component: v, errors: [] }];
    }));

    await Promise.all(components.map(async (v) => {
      const requirements = await v.getRequirements();
      results[v.rid].dependencies = requirements.reduce<Component[]>((prev, cur) => {
        const matches = components.filter(v2 => cur.match(v2));
        if ((matches.length <= 0) && validate) {
          results[v.rid].errors!.push(new ValidationError(`failed to satisfy dependency on ${cur.constraint()}`, ValidationErrorLevel.ERROR, v));
        };

        return prev.concat(matches);
      }, []);
    }));

    return new DependencyGraph(target, results as Record<string, ResolvedComponent>);
  };
};