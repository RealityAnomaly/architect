// deno-coverage-ignore-file
// deno-lint-ignore-file no-unused-vars
import {
  Capability, ComponentMetadata, ComponentModel, IComponentMatcher, ConfigurationContext, ComponentUpgradeState,
  ITarget, Context, LazyAuto, ComponentArgs, Lazy
} from '../../../index.ts';
import { IComponent } from '../component.ts';

export class MockComponent implements IComponent {
  public _context: Context = { name: 'blah123' };
  public _capabilities: Capability<unknown>[] = [];
  public _result = (() => { return { foo: 'result' } });

  constructor(context: Context = { name: 'blah123' }) {
    this._context = context;
  }

  get context(): Context {
    return this._context;
  }
  get target(): ITarget {
    throw new Error('Method not implemented.');
  }
  get name(): string {
    return this.context.name;
  }
  public get parent() {
    return undefined;
  }
  public get children() {
    return [];
  }
  public get independent() {
    return true;
  }
  get capabilities(): Capability<unknown>[] {
    return this._capabilities;
  }
  get clazz(): string {
    throw new Error('Method not implemented.');
  }
  get meta(): ComponentMetadata {
    throw new Error('Method not implemented.');
  }
  get model(): ComponentModel {
    throw new Error('Method not implemented.');
  }
  get props(): LazyAuto<ComponentArgs> {
    return Lazy.from({ enable: true } as ComponentArgs);
  }
  get rid(): string {
    return `${this.name}-b475d49`;
  }
  // deno-lint-ignore no-explicit-any
  setParent(parent?: any): void {}
  async getRequirements(): Promise<IComponentMatcher[]> {
    return [];
  }
  async build(result?: object | undefined): Promise<object> {
    return this._result();
  }
  configure(context: ConfigurationContext): void {}
  init(): void {}
  async postBuild(data: object): Promise<object> { return data; }
  async upgrade(_state: ComponentUpgradeState): Promise<boolean> {
    return true;
  }
  toString(): string {
    return this._context.name;
  }
}
