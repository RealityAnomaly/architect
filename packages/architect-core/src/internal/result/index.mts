import * as fs from 'node:fs/promises';
import { recursiveMerge } from '../../utils/index.mts';
import { DependencyGraph } from '../graph/index.mts';

export interface Writer {
  write(result: Result, dir: string): Promise<void>;
}

/**
 * Represents a response produced from a {Target}.
 */
export class Result {
  /**
   * The second stage dependency graph.
   */
  public readonly graph: DependencyGraph;

  /**
   * The resultant data from each component.
   */
  public readonly components: Record<string, unknown>;

  /**
   * Writer that will be used to write the result
   */
  public writer?: Writer;

  constructor(graph: DependencyGraph, components: Record<string, unknown>) {
    this.graph = graph;
    this.components = components;
  }

  /**
   * Returns all merged configuration for this result
   */
  public get all(): unknown {
    return Object.values(this.components).reduce<unknown>((prev, cur) => {
      return recursiveMerge(prev as object, cur as object);
    }, []);
  }

  /**
   * Writes the output of the {Result} to the specified directory.
   */
  public async write(dir: string): Promise<void> {
    if (!this.writer) return;

    await fs.mkdir(dir, { recursive: true });
    await this.writer.write(this, dir);
  }
}
