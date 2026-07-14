export class ProjectUtils {
  public static async findProjectRoot(
    start: string,
  ): Promise<string | undefined> {
    let perm = await Deno.permissions.query({ name: "read", path: start });
    if (perm.state !== "granted") return undefined;

    perm = await Deno.permissions.query({ name: "write", path: start });
    if (perm.state !== "granted") return undefined;

    return start;
  }
}
