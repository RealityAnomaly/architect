import * as fs from "node:fs/promises";

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
