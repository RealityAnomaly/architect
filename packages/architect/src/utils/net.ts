import { MaybeErr } from './errors.ts';

const DNS_ERROR = /ENOTFOUND|EAI_AGAIN|EAI_NONAME/;

export class NetHelpers {
  public static isDnsError(e: unknown): boolean {
    const err = e as MaybeErr | undefined;
    return [err?.code, err?.message, err?.cause?.code, err?.cause?.message]
      .some((v) => typeof v === 'string' && DNS_ERROR.test(v));
  }

  public static async withDnsRetry<T>(
    fn: () => Promise<T>,
    tries = 3,
    delayMs = 50,
  ): Promise<T> {
    for (let attempt = 1; ; attempt++) {
      try {
        return await fn();
      } catch (e) {
        if (attempt >= tries || !NetHelpers.isDnsError(e)) throw e;
        await new Promise((r) => setTimeout(r, delayMs * attempt));
      }
    }
  }
}
