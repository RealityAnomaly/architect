// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { CollectionUtilities } from '../../utils/index.ts';
import { IDependencyGraph } from '../graph/index.ts';

export interface WriterParams {}

export interface IWriter<T extends WriterParams = WriterParams> {
  write(result: Result, dir: string, params?: T): Promise<void>;
}

/**
 * Represents a response produced from a {Target}.
 */
export class Result {
  /**
   * The second stage dependency graph.
   */
  public readonly graph: IDependencyGraph;

  /**
   * The resultant data from each component.
   */
  public readonly components: Record<string, unknown>;

  /**
   * Writer that will be used to write the result
   */
  public writer?: IWriter;

  constructor(graph: IDependencyGraph, components: Record<string, unknown>) {
    this.graph = graph;
    this.components = components;
  }

  /**
   * Returns all merged configuration for this result
   */
  public get all(): unknown {
    return Object.values(this.components).reduce<unknown>((prev, cur) => {
      return CollectionUtilities.recursiveMerge(prev as object, cur as object);
    }, []);
  }

  /**
   * Writes the output of the {Result} to the specified directory.
   */
  public async write(dir: string): Promise<void> {
    if (!this.writer) return;

    await Deno.mkdir(dir, { recursive: true });
    await this.writer.write(this, dir);
  }
}
