// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import 'reflect-metadata';

import Module from 'node:module';
import { ModuleUtilities } from '../../utils/modules.ts';
import { TypeUtilities } from '../../utils/index.ts';
import { ComponentClass } from './component.ts';
import { Constants } from '../constants.ts';

export class ComponentLoader {
  /**
   * Recursively collects Components from an ECMAScript module
   * @param module The module to scan for components
   */
  public static async fromModule(module: Module): Promise<ComponentClass[]> {
    return ModuleUtilities.collectClasses(module, (clazz) => {
      return TypeUtilities.isObject(clazz) &&
        Reflect.hasMetadata(Constants.TYPE_META_KEY, clazz) &&
        Reflect.getMetadata(Constants.TYPE_META_KEY, clazz) === 'component';
    });
  }
}
