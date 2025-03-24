import { Target } from '../target/index.mts';

/**
 * A Backend is a storage location for Targets.
 */
export abstract class Backend {
  public abstract targets(): Promise<Target[]>;
}
