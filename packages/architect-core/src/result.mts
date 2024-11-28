import * as fs from 'node:fs/promises';
import { Component } from './components/index.mts';
import { ValidationError } from './target.mts';
import { recursiveMerge } from './utils/index.mts';

export interface Writer {
  write(result: Result, dir: string): Promise<void>;
};

export interface ResolvedComponent {
  component: Component;
  dependencies: Component[];
  result: unknown;
};

/**
 * Represents a response produced from a {Target}.
 */
export class Result {
  /**
   * Validation errors on the configuration tree
   */
  public errors: ValidationError[] = [];

  /**
   * Component-specific resources
   */
  public components: Record<string, ResolvedComponent> = {};

  /**
   * Writer that will be used to write the result
   */
  public writer?: Writer;

  /**
   * Returns all merged configuration for this result
   */
  public get all(): unknown {
    return Object.values(this.components).reduce<unknown>((prev, cur) => {
      return recursiveMerge(prev as object, cur.result as object);
    }, null);
  };

  /**
   * Writes the output of the {Result} to the specified directory.
   */
  public async write(dir: string): Promise<void> {
    if (!this.writer) return;

    await fs.mkdir(dir, { recursive: true });
    await this.writer.write(this, dir);
  };
};
