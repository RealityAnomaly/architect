import path from 'node:path';

export class ProjectUtils {
  public static async findProjectRoot(
    start: string,
  ): Promise<string | undefined> {
    const parts = start.split(path.sep);
    while (parts.length > 0) {
      const fn = path.join(...parts, "architect.yaml");

      try {
        const result = await Deno.stat(fn);
        if (result.isFile) return path.resolve(path.join(...parts));
      } catch {
        // pass
      }

      parts.pop();
    }

    return undefined;
  }
}
