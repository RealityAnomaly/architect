export class AsyncHelpers {
  public static async sequential<T>(promises: Array<Promise<T>>): Promise<Array<T>> {
    if (promises.length === 0) return [];
    const [firstElement, ...rest] = promises;
    return [await firstElement, ...(await AsyncHelpers.sequential(rest))];
  }
}
