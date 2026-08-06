// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Constructor } from './types.ts';

export class ModuleUtilities {
  public static collectClasses<T>(
    // deno-lint-ignore no-explicit-any
    module: any,
    matcher: (clazz: Constructor<T>) => boolean,
  ): Constructor<T>[] {
    const result: Constructor<T>[] = [];

    if (matcher(module)) {
      result.push(module);
    } else if (
      typeof module === "object" && module[Symbol.toStringTag] === "Module"
    ) {
      for (const value of Object.values(module)) {
        result.push(...this.collectClasses(value, matcher));
      }
    }

    return result;
  }
}
