// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

export interface ShimProcessOptions {
  cwd?: string;
  env?: Record<string, string>;
}

export class Shim {
  protected readonly binary;
  protected readonly encoder: TextEncoder;
  protected readonly decoder: TextDecoder;

  constructor(binary: string) {
    this.binary = binary;
    this.encoder = new TextEncoder();
    this.decoder = new TextDecoder();
  }

  protected async run(params: string[], processOptions?: ShimProcessOptions, work?: (p: Deno.ChildProcess) => Promise<void>): Promise<Deno.ChildProcess> {
    const command = new Deno.Command(this.binary, {
      args: params,
      stdin: "piped",
      stdout: "piped",
      stderr: "piped",
      cwd: processOptions?.cwd,
      env: processOptions?.env,
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
