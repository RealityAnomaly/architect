import { JSONSchemaType } from "ajv";

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
