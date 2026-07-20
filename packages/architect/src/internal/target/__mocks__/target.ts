// deno-coverage-ignore-file
// deno-lint-ignore-file no-unused-vars
import { Logger } from '@logtape/logtape';
import {
  IArchitect,
  TargetParams,
  Capability,
  TargetResolveParams,
  ICompileListener,
  Result,
  TargetApplyParams,
  Component,
  ComponentClass,
  ExtractComponentArgs,
  TokenRegistry, IProject
} from '../../../index.ts';
import { architectGlasswayNet } from '../../../kubernetes/crds/index.ts';
import { DeepLazySpec, Condition } from '../../../utils/index.ts';
import { DeepPartial } from '../../../utils/index.ts';
import { Context } from '../../../utils/index.ts';
import { Constructor } from '../../../utils/types.ts';
import { DependencyGraph } from '../../graph/index.ts';
import { TargetIntrospection } from '../intro.ts';
import { ITarget } from '../target.ts';
import { MockComponent } from '../../component/__mocks__/component.ts';

export class MockTarget implements ITarget {
  public _project: IProject;
  public _model: architectGlasswayNet.v1alpha1.Target = new architectGlasswayNet.v1alpha1.Target({
    metadata: {
      name: 'foobar'
    },
    spec: {}
  });
  public _params: TargetParams = {};
  public _context: Partial<Context> = {};

  public _capabilities: Capability<unknown>[] = [];
  public _introspection: TargetIntrospection<unknown> | undefined = undefined;

  constructor(project: IProject) {
    this._project = project;
  }

  get app(): IArchitect { return this.project.app; }
  get model(): architectGlasswayNet.v1alpha1.Target { return this._model; }
  get params(): TargetParams { return this._params; }
  get project(): IProject { return this._project; }

  get components(): TokenRegistry<Component> {
    throw new Error('Method not implemented.');
  }

  get capabilities(): Capability<unknown>[] { return this._capabilities; }

  resolve(params: TargetResolveParams): Promise<DependencyGraph> {
    throw new Error('Method not implemented.');
  }

  compile(params?: TargetResolveParams, logger?: Logger, listener?: ICompileListener): Promise<Result | undefined> {
    throw new Error('Method not implemented.');
  }

  apply(result: Result, params?: TargetApplyParams, logger?: Logger, listener?: ICompileListener): Promise<void> {
    throw new Error('Method not implemented.');
  }

  enable<T extends Component>(token: ComponentClass<T>, config?: DeepLazySpec<DeepPartial<ExtractComponentArgs<T>>>, context?: Partial<Context>, weight?: number, force?: boolean, condition?: Condition): void {
    throw new Error('Method not implemented.');
  }

  register<T extends Component>(token: ComponentClass<T>, instance: T, context: Context): void {
    throw new Error('Method not implemented.');
  }

  component<T extends Component>(token: ComponentClass<T>, context?: Partial<Context>, auto?: boolean): T {
    return new MockComponent() as unknown as T;
  }

  declare(capability: Capability<unknown>): void {
    throw new Error('Method not implemented.');
  }

  defaultContext<T extends Component>(token: Constructor<T>, context?: Partial<Context>, force?: boolean): Partial<Context> {
    return this._context;
  }

  toString(): string { return "foobar"; }
  async init(): Promise<void> {}

  getIntrospection(): TargetIntrospection<unknown> | undefined { return this._introspection; }
}
