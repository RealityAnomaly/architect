import fs from "node:fs/promises";

import { Ajv, JSONSchemaType, ValidateFunction } from "ajv";
import { walk } from "@std/fs/walk";

export interface ComponentModel<
  TContext = unknown,
  TInput = unknown,
> {
  class?: string; // not required for child components
  context?: TContext;
  inputs?: Record<string, TInput>;
}

export type ComponentModelFile<
  TModel = ComponentModel,
> = Record<string, TModel>;

export interface ComponentModelFileInstance<
  TModel = ComponentModel,
> {
  path: string;
  dirty: boolean;
  model: ComponentModelFile<TModel>;
}

export class ComponentModelUtilities {
  public static async collect(
    paths: string[],
  ): Promise<ComponentModelFileInstance[]> {
    const results: ComponentModelFileInstance[] = [];
    //logger: Logger, ajv = new Ajv()
    //const validator = ajv.compile(ComponentModelFileSchema);

    for (const path of paths) {
      try {
        const stat = await fs.stat(path);
        if (!stat.isDirectory()) continue;
      } catch {
        continue;
      }

      for await (const p of walk(path)) {
        if (!p.name.endsWith("architect.json")) continue;

        const content = JSON.parse(await fs.readFile(p.path, "utf-8"));
        // if (!validator(content)) {
        //   logger.error(`failed to parse configuration file at ${p}: ${validator.errors}`);
        //   continue;
        // };

        results.push({
          path: p.path,
          dirty: false,
          model: content,
        });
      }
    }

    return results;
  }

  public static createValidator<
    TContext = unknown,
    TInput = unknown,
  >(
    ajv: Ajv,
    context?: JSONSchemaType<TContext>,
    input?: JSONSchemaType<TInput>,
  ): ValidateFunction<ComponentModel<TContext, TInput>> {
    return ajv.compile({
      type: "object",
      required: [],
      properties: {
        class: {
          type: "string",
          nullable: true,
        },
        context: {
          ...context || {},
          type: "object",
          nullable: true,
        },
        inputs: {
          type: "object",
          nullable: true,
          required: [],
          additionalProperties: input || {},
        },
      },
    } as JSONSchemaType<ComponentModel<TContext, TInput>>);
  }
}
