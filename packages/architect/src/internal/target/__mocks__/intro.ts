import { TargetIntrospection } from '../intro.ts';

export class MockTargetIntrospection extends TargetIntrospection<object> {
  protected override async loadState(): Promise<object> {
    return {}
  }
}
