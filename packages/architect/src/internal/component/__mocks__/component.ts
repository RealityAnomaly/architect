// deno-lint-ignore-file no-unused-vars
import { Capability, ComponentMetadata, ComponentModel, IComponentMatcher, ConfigurationContext, ComponentUpgradeState } from '../../../index.ts';
import { IComponent } from '../component.ts';

export class MockComponent implements IComponent {
  get name(): string {
    throw new Error('Method not implemented.');
  }
  get capabilities(): Capability<unknown>[] {
    throw new Error('Method not implemented.');
  }
  get clazz(): string {
    throw new Error('Method not implemented.');
  }
  get meta(): ComponentMetadata<ComponentModel<unknown, unknown>> {
    throw new Error('Method not implemented.');
  }
  get model(): ComponentModel<unknown, unknown> {
    throw new Error('Method not implemented.');
  }
  get rid(): string {
    throw new Error('Method not implemented.');
  }
  setParent(parent?: any): void {
    throw new Error('Method not implemented.');
  }
  getRequirements(): Promise<IComponentMatcher[]> {
    throw new Error('Method not implemented.');
  }
  build(result?: object | undefined): Promise<object> {
    throw new Error('Method not implemented.');
  }
  configure(context: ConfigurationContext): void {
    throw new Error('Method not implemented.');
  }
  init(): void {
    throw new Error('Method not implemented.');
  }
  postBuild(data: object): Promise<object> {
    throw new Error('Method not implemented.');
  }
  upgrade(_state: ComponentUpgradeState): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  toString(): string {
    throw new Error('Method not implemented.');
  }
}

