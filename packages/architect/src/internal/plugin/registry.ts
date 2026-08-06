// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { TargetClass } from '../index.ts';
import { IArchitect } from '../../app.ts';
import { IPlugin, PluginClass } from './plugin.ts';
import { Constants } from '../constants.ts';

export class PluginRegistry {
  public readonly data: Record<string, IPlugin> = {};

  public get targetMap(): Record<string, TargetClass> {
    const results = {} as Record<string, TargetClass>;
    Object.values(this.data).forEach((p) => {
      for (const [k, v] of Object.entries(p.targets)) results[k] = v;
    });

    return results;
  }

  public register(plugin: PluginClass, parent: IArchitect): void {
    const clazz = Reflect.getMetadata(Constants.CLASS_META_KEY, plugin);
    this.data[clazz] = new plugin(parent);
  }

  public async init(): Promise<void> {
    for (const plugin of Object.values(this.data)) {
      await plugin.init();
    }
  }

  public get(module: string): IPlugin {
    return this.data[module];
  }
}
