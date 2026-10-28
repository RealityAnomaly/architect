export class AsyncHelpers {
  public static async sequential<T>(promises: Array<Promise<T>>): Promise<Array<T>> {
    if (promises.length === 0) return [];
    const [firstElement, ...rest] = promises;
    return [await firstElement, ...(await AsyncHelpers.sequential(rest))];
  }

  public static async mapLimit<T, R>(
    items: readonly T[],
    limit: number,
    fn: (item: T, index: number) => Promise<R>,
  ): Promise<R[]> {
    const results = new Array<R>(items.length);
    let next = 0;
    const worker = async () => {
      while (next < items.length) {
        const i = next++;
        results[i] = await fn(items[i], i);
      }
    };
    await Promise.all(
      Array.from({ length: Math.min(Math.max(limit, 1), items.length) }, worker),
    );
    return results;
  }

  public static singleFlight<T>(fn: () => Promise<T>): () => Promise<T> {
    let pending: Promise<T> | undefined;
    return () => {
      pending ??= fn().catch((e) => {
        pending = undefined;
        throw e;
      });
      return pending;
    };
  }
}
