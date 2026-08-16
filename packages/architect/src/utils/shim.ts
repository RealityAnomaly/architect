// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

export interface ShimProcessOptions {
  cwd?: string;
  env?: Record<string, string>;
  retries?: number;
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
    let lastError: Error;

    for (let retry = 0; retry <= (processOptions?.retries ?? 0); retry++) {
      try {
        if (work) await work(process);
        if (!process.stdin.locked)
          await process.stdin.close();
      } catch (e) {
        await process.status;
        lastError = new Error(`Failed to feed process ${this.binary}: ${e}`, {
          cause: await process.stderr.text()
        });
        continue;
      }

      const status = await process.status;
      if (!status.success) {
        lastError = new Error(`Failed to run ${this.binary}`, {
          cause: await process.stderr.text()
        });
        continue;
      }

      return process;
    }

    throw lastError!;
  }
}
