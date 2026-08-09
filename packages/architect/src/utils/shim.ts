// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

export class Shim {
  protected readonly binary;

  constructor(binary: string) {
    this.binary = binary;
  }

  protected async run(params: string[], work?: (p: Deno.ChildProcess) => Promise<void>, cwd?: string): Promise<Deno.ChildProcess> {
    const command = new Deno.Command(this.binary, {
      args: params,
      stdin: "piped",
      stdout: "piped",
      stderr: "piped",
      cwd: cwd
    });

    const process: Deno.ChildProcess = command.spawn();

    try {
      if (work) await work(process);
      if (!process.stdin.locked)
        await process.stdin.close();
    } catch (e) {
      await process.status;
      throw new Error(`Failed to feed process ${this.binary}: ${e}`, {
        cause: await process.stderr.text()
      });
    }

    const status = await process.status;
    if (!status.success) throw new Error(`Failed to run ${this.binary}`, {
      cause: await process.stderr.text()
    });

    return process;
  }
}
