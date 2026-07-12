import type { Generator, GroupVersion, OutputFile } from "./types.ts";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

//const WRITE_CONCURRENCY = 16;

export class PathConflictError extends Error {
  public path: string;

  constructor(path: string) {
    super(`Path conflict: ${path}`);
    this.path = path;
  }
}

PathConflictError.prototype.name = "PathConflictError";

export function composeGenerators(generators: readonly Generator[]): Generator {
  return async (definitions, root) => {
    const fileMap = new Map<string, OutputFile>();

    for (const g of generators) {
      const files = await g(definitions, root);

      for (const f of files) {
        if (fileMap.has(f.path)) {
          throw new PathConflictError(f.path);
        }

        fileMap.set(f.path, f);
      }
    }

    return [...fileMap.values()];
  };
}

export async function writeOutputFiles(
  outDir: string,
  files: readonly OutputFile[],
): Promise<void> {
  await rm(outDir, { recursive: true, force: true });
  const paths = files.map((file) => ({
    ...file,
    outputPath: join(outDir, file.path),
  }));
  const dirs = new Set(paths.map((file) => dirname(file.outputPath)));

  await Promise.all(Array.from(dirs).map((dir) => mkdir(dir, { recursive: true })))
  await Promise.all(paths.map(async (file) => {
    console.log("Writing:", file.path);

    let content2 = file.content;
    const schemaPath = join(dirname(file.outputPath), "_schemas");
    if (file.outputPath.endsWith("index.ts") && dirs.has(schemaPath)) {
      content2 += '\nexport * as _schemas from "./_schemas/index.ts";';
    }

    await writeFile(file.outputPath, content2);
  }))
}

export function getAPIVersion({ group, version }: GroupVersion): string {
  return group ? `${group}/${version}` : version;
}
