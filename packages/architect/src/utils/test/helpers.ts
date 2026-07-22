// deno-coverage-ignore-file
import * as fs from "node:fs/promises";

export class DummyWriter {
  public async write(_p: Uint8Array): Promise<number> { return _p.byteLength; };
  public writeSync(_p: Uint8Array): number { return _p.byteLength; }
  public close(): void {}
  public readonly writable: WritableStream<Uint8Array<ArrayBufferLike>> = new WritableStream<Uint8Array<ArrayBufferLike>>();
  public isTerminal(): boolean { return true; }
}

/**
 * Run a function in a temporary directory
 */
export async function runInTempDir(fn: (dir: string) => Promise<void>) {
  // create a temporary directory and clean it up after use
  const tmpdir = await Deno.makeTempDir();

  try {
    await fn(tmpdir);
  } finally {
    await fs.rm(tmpdir, { recursive: true });
  }
}
