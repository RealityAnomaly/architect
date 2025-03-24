import { Reflect } from '@dx/reflect';

import Module from 'node:module';
import { ModuleUtilities } from '../../utils/modules.mts';
import { TypeUtilities } from '../../utils/index.mts';
import { Architect } from '../../app.mts';
import { ComponentClass } from './component.mts';

export class ComponentLoader {
  /**
   * Recursively collects Components from an ECMAScript module
   * @param module The module to scan for components
   */
  public static async fromModule(module: Module): Promise<ComponentClass[]> {
    return ModuleUtilities.collectClasses(module, (clazz) => {
      return TypeUtilities.isObject(clazz) &&
        Reflect.hasMetadata(Architect.TYPE_META_KEY, clazz) &&
        Reflect.getMetadata(Architect.TYPE_META_KEY, clazz) === 'component';
    });
  }
}
