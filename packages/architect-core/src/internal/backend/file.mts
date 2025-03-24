import { Project } from '../project/index.mts';
import { Target } from '../index.mts';
import { Backend } from './base.mts';

/**
 * Backend that uses a local Project to resolve targets
 */
export class FileBackend extends Backend {
  private readonly project: Project;

  constructor(project: Project) {
    super();
    this.project = project;
  }

  public async targets(): Promise<Target[]> {
    return await this.project.getTargets();
  }
}
