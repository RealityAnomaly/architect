import { Target } from "./index.mts";
import { Project } from "./project.mts";

/**
 * A Backend is a storage location for Targets.
 */
export abstract class Backend {
  public abstract targets(): Promise<Target[]>;
};

/**
 * Backend that uses a local Project to resolve targets
 */
export class FileBackend extends Backend {
  private readonly project: Project;

  constructor(project: Project) {
    super();
    this.project = project;
  };

  public async targets(): Promise<Target[]> {
    return await this.project.getTargets(false);
  };
};