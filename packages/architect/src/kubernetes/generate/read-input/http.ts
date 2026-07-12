export async function httpGet(url: string): Promise<string> {
  // TODO: caching?
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Request "${url}" failed: ${res.status} ${res.statusText}`);
  }

  return res.text();
}
