import path from 'path';
import * as fs from 'node:fs/promises';

export async function* walk(location: string): any {
  try {
    const result = await fs.stat(location);
    if (!result.isDirectory()) {
      yield location;
      return;
    };
  } catch {
    return;
  };

  for await (const d of await fs.opendir(location)) {
    const entry = path.join(location, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  };
}
