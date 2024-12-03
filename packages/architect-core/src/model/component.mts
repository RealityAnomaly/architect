import fs from 'fs/promises';

import { Ajv, JSONSchemaType } from "ajv";
import { walk } from "../index.mts";
import { Logger } from 'winston';

export interface ComponentInputOCIModel {
  name: string,
  version: string,
};

export interface ComponentInputHelmModel {
  name: string,
  repo: string,
  version: string,
};

export interface ComponentInputModel {
  oci?: ComponentInputOCIModel,
  helm?: ComponentInputHelmModel,
};

export interface ComponentModel {
  class?: string,
  context?: object,
  inputs?: Record<string, ComponentInputModel>,
};

export type ComponentModelFile = Record<string, ComponentModel>;

export interface ComponentModelFileInstance {
  path: string,
  model: ComponentModelFile
};

export const ComponentModelSchema: JSONSchemaType<ComponentModel> = {
  type: "object",
  required: [],
  properties: {
    class: {
      type: "string",
      nullable: true,
    },
    context: {
      type: "object",
      nullable: true,
    },
    inputs: {
      type: "object",
      nullable: true,
      required: [],
      additionalProperties: {
        type: "object",
        properties: {
          oci: {
            type: "object",
            nullable: true,
            required: ["name", "version"],
            properties: {
              name: {
                type: "string",
              },
              version: {
                type: "string",
              },
            },
          },
          helm: {
            type: "object",
            nullable: true,
            required: ["name", "repo"],
            properties: {
              name: {
                type: "string",
              },
              repo: {
                type: "string",
              },
              version: {
                type: "string",
              },
            },
          },
        }
      },
    },
  },
};

export const ComponentModelFileSchema: JSONSchemaType<ComponentModelFile> = {
  type: "object",
  required: [],
  additionalProperties: ComponentModelSchema
};

export class ComponentModelUtilities {
  public static async collect(paths: string[], logger: Logger, ajv = new Ajv()): Promise<ComponentModelFileInstance[]> {
    const results: ComponentModelFileInstance[] = [];
    const validator = await ajv.compileAsync(ComponentModelFileSchema);

    for (const path of paths) {
      try {
        const statr = await fs.stat(path);
        if (!statr.isDirectory()) return [];
      } catch {
        continue;
      };

      for await (const p of walk(path)) {
        if (!p.endsWith('architect.json')) continue;

        const content = JSON.parse(await fs.readFile(p, 'utf-8'));
        if (!validator(content)) {
          logger.error(`failed to parse configuration file at ${p}: ${validator.errors}`);
          continue;
        };

        results.push({
          path: p,
          model: content
        });
      };
    };

    return results;
  };
};
