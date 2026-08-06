// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as semver from 'semver';
import { Logger } from '@logtape/logtape';

export interface SemVerOptions {
  constraint?: string;
  coerce?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export function getLatestSemVer(versions: string[], options?: SemVerOptions, logger?: Logger): string | undefined {
  let latest: semver.SemVer | undefined = undefined;
  let original: string | undefined = undefined;

  for (const version of versions.reverse()) {
    let parsed: semver.SemVer;

    try {
      const coerced = options?.coerce ? semver.coerce(version, {
        includePrerelease: true
      }) : version;

      parsed = new semver.SemVer(coerced, { loose: true });
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
      if (options?.constraint && !semver.satisfies(parsed, options.constraint)) continue;

      latest = parsed;
      original = version;
    }
  }

  return original;
}
