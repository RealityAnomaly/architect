// deno-coverage-ignore-file
import { Result, IWriter } from '../index.ts';

export class MockWriter implements IWriter {
  async write(_result: Result, _dir: string): Promise<void> {}
}
