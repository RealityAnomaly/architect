// deno-coverage-ignore-file
import { Command } from 'commander';
import { type IArchitect, Plugin, TargetClass } from '../../../index.ts';
import { IPlugin } from '../plugin.ts';
import { MockTarget } from '../../target/__mocks__/target.ts';

export const MOCK_PLUGIN_CLASS = "plugin.architect.glassway.net/test";

@Plugin.decorate(MOCK_PLUGIN_CLASS)
export class MockPlugin implements IPlugin {
  public static readonly MOCK_TARGET_IDENTIFIER = 'target.architect.glassway.net/test'

  public _parent: IArchitect;
  public _targets: Record<string, TargetClass> = {
    [MockPlugin.MOCK_TARGET_IDENTIFIER]: MockTarget
  }

  public _commands: Command[] = [];

  constructor(parent: IArchitect) {
    this._parent = parent;
  }

  get parent(): IArchitect {
    return this._parent;
  }

  get targets(): Record<string, TargetClass> {
    return this._targets;
  }

  async init(): Promise<void> {}

  async registerCommand(_command: Command): Promise<void> {
    this._commands.push(_command);
  }
}
