// deno-coverage-ignore-file
// deno-lint-ignore-file no-unused-vars
import { Logger } from '@logtape/logtape';
import {
  IArchitect,
  TargetParams,
  Capability,
  TargetResolveParams,
  IDependencyGraph,
  ICompileListener,
  Result,
  TargetApplyParams,
  IComponent,
  Component,
  ComponentClass,
  ExtractComponentArgs,
  TokenRegistry, IProject, TargetFake
} from '../../../index.ts';
import { architectGlasswayNet } from '../../../kubernetes/crds/index.ts';
import { DeepLazySpec, Condition } from '../../../utils/index.ts';
import { DeepPartial } from '../../../utils/index.ts';
import { Context } from '../../../utils/index.ts';
import { Constructor } from '../../../utils/types.ts';
import { TargetIntrospection } from '../intro.ts';
import { ITarget } from '../target.ts';
import { MockDependencyGraph } from '../../graph/__mocks__/index.ts';
import { MockTargetIntrospection } from './intro.ts';

function getDefaultModel() {
  return new architectGlasswayNet.v1alpha1.Target({
    metadata: {
      name: 'foobar'
    },
    spec: {}
  });
}

export class MockTarget implements ITarget {
  public _project: IProject;
  public _model: architectGlasswayNet.v1alpha1.Target;
  public _params: TargetParams;
  public _context: Partial<Context> = {};

  public _capabilities: Capability<unknown>[] = [];
  public _introspection: TargetIntrospection<unknown> | undefined = undefined;

  public static compileCalled = false;

  constructor(model: architectGlasswayNet.v1alpha1.Target = getDefaultModel(), params: TargetParams = {}, project: IProject) {
    this._model = model;
    this._params = params;
    this._project = project;
  }

  public static fake(): TargetFake {
    return {
      model: new architectGlasswayNet.v1alpha1.Target({
        metadata: {
          name: 'foobar'
        },
        spec: {}
      }),
      state: {
        blah: 'foo'
      }
    }
  }

  get app(): IArchitect { return this.project.app; }
  get model(): architectGlasswayNet.v1alpha1.Target { return this._model; }
  get params(): TargetParams { return this._params; }
  get project(): IProject { return this._project; }

  get components(): TokenRegistry<Component> {
    throw new Error('Method not implemented.');
  }

  get capabilities(): Capability<unknown>[] { return this._capabilities; }

  resolve(params: TargetResolveParams): Promise<IDependencyGraph> {
    throw new Error('Method not implemented.');
  }

  async compile(params?: TargetResolveParams, logger?: Logger, listener?: ICompileListener): Promise<Result | undefined> {
    MockTarget.compileCalled = true;
    const graph = new MockDependencyGraph(this);
    return new Result(graph, {});
  }

  apply(result: Result, params?: TargetApplyParams, logger?: Logger, listener?: ICompileListener): Promise<void> {
    throw new Error('Method not implemented.');
  }

  enable<T extends IComponent>(token: ComponentClass<T>, config?: DeepLazySpec<DeepPartial<ExtractComponentArgs<T>>>, context?: Partial<Context>, weight?: number, force?: boolean, condition?: Condition): void {}

  register<T extends IComponent>(token: ComponentClass<T>, instance: T, context: Context): void {}

  component<T extends IComponent>(token: ComponentClass<T>, context?: Partial<Context>, auto?: boolean): T {
    return new token(this, context as Context, {});
  }

  async capability<T, R extends Capability<T>>(
    token: Constructor<R>,
    condition?: (capability: R) => boolean
  ): Promise<R | undefined> {
    return undefined;
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

  public async hasCapability<T, R extends Capability<T>>(
    token: Constructor<R>,
    condition?: (capability: R) => boolean
  ): Promise<boolean> {
    return !!(await this.capability(token, condition));
  }
}

export class MockTargetReturnsInvalid extends MockTarget {
  override async compile(params?: TargetResolveParams, logger?: Logger, listener?: ICompileListener): Promise<Result | undefined> {
    const graph = new MockDependencyGraph(this);
    graph._valid = false;
    return new Result(graph, {});
  }
}

export class MockTargetForIntrospection extends MockTarget {
  public static introspection = new MockTargetIntrospection();

  constructor(model: architectGlasswayNet.v1alpha1.Target = getDefaultModel(), params: TargetParams = {}, project: IProject) {
    super(model, params, project);
    this._introspection = MockTargetForIntrospection.introspection;
  }
}
