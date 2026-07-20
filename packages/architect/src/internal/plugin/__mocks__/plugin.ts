import { Command } from 'commander';
import { IArchitect, TargetClass } from '../../../index.ts';
import { IPlugin } from '../plugin.ts';

export class MockPlugin implements IPlugin {
  get parent(): IArchitect {
    throw new Error('Method not implemented.');
  }
  get targets(): Record<string, TargetClass> {
    throw new Error('Method not implemented.');
  }
  init(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  registerCommand(_command: Command): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
