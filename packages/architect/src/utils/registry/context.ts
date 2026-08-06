// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import "reflect-metadata";

import { Constructor, ReflectionUtilities } from '../types.ts';
import { Constants } from '../../internal/constants.ts';

/**
 * A Context is a structured object that identifies a unique value within a registry.
 */
export interface Context {
  name: string;
  [p: string]: unknown;
}

export class ContextUtils {
  public static defaultContext<T>(
    token: Constructor<T>,
    context?: Partial<Context>,
    force?: boolean,
  ): Context {
    if (!context) context = {};
    if (
      (!context.name || force) &&
      Reflect.hasMetadata(Constants.CLASS_META_KEY, token)
    ) {
      context.name = ReflectionUtilities.classToName(
        Reflect.getMetadata(Constants.CLASS_META_KEY, token),
      );
    }

    return context as Context;
  }

  public static compareTokens<T>(lhs: Constructor<T>, rhs: Constructor<T>): boolean {
    if (!Reflect.hasMetadata(Constants.CLASS_META_KEY, lhs) || !Reflect.hasMetadata(Constants.CLASS_META_KEY, rhs)) return false;
    return Reflect.getMetadata(Constants.CLASS_META_KEY, lhs) === Reflect.getMetadata(Constants.CLASS_META_KEY, rhs);
  }
}
