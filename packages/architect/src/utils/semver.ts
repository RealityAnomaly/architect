import * as semver from 'semver';
import { Logger } from '@logtape/logtape';

// noinspection JSUnusedGlobalSymbols
export function getLatestSemVer(versions: string[], constraint?: string, logger?: Logger): string | undefined {
  let latest: semver.SemVer | undefined = undefined;
  let original: string | undefined = undefined;

  for (const version of versions.reverse()) {
    let parsed: semver.SemVer;

    try {
      parsed = new semver.SemVer(semver.coerce(version, {
        includePrerelease: true
      }), { loose: true });
    } catch (exception) {
      // logger?.trace(
      //   `failed to parse version as semver for chart ${name}: ${exception}`,
      // );
      logger?.trace(
        `failed to parse version ${version} as semver: ${exception}`,
      );
      continue;
    }

    if (
      (!latest || parsed.compare(latest) === 1) &&
      parsed.prerelease.length <= 0
    ) {
      if (constraint && !semver.satisfies(parsed, constraint)) continue;

      latest = parsed;
      original = version;
    }
  }

  return original;
}
