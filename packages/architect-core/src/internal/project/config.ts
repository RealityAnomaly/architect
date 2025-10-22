import * as fs from 'node:fs/promises';
import { Ajv, JSONSchemaType } from 'ajv';

export interface ProjectConfig {
  name: string;
  backend?: object;
  plugins?: Record<string, object>;
}

const ProjectConfigSchema: JSONSchemaType<ProjectConfig> = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
    },
    library: {
      type: 'boolean',
      nullable: true,
    },
    backend: {
      type: 'object',
      nullable: true,
    },
    plugins: {
      type: 'object',
      required: [],
      nullable: true,
      additionalProperties: {
        type: 'object',
      },
    },
  },
};

export class ProjectConfigLoader {
  public static async save(path: string, config: ProjectConfig): Promise<void> {
    await fs.writeFile(path, JSON.stringify(config, undefined, 2));
  }

  public static validate(
    config: ProjectConfig,
    ctx?: string,
    ajv: Ajv = new Ajv(),
  ) {
    const validator = ajv.compile(ProjectConfigSchema);
    if (!validator(config)) {
      throw new Error(
        `failed to validate configuration model for project ${
          ctx || 'unknown'
        }: ${ajv.errorsText(validator.errors)}`,
      );
    }
  }
}
