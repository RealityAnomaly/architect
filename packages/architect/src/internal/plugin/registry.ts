import { TargetClass } from '../index.ts';
import { Architect } from '../../app.ts';
import { Plugin, PluginClass } from './plugin.ts';

export class PluginRegistry {
  public readonly data: Record<string, Plugin> = {};

  public get targetMap(): Record<string, TargetClass> {
    const results = {} as Record<string, TargetClass>;
    Object.values(this.data).forEach((p) => {
      for (const [k, v] of Object.entries(p.targets)) results[k] = v;
    });

    return results;
  }

  public async register(plugin: PluginClass, parent: Architect): Promise<void> {
    const clazz = Reflect.getMetadata(Architect.CLASS_META_KEY, plugin);
    this.data[clazz] = new plugin(parent);
  }

  public async resolve(): Promise<void> {}

  public async init(): Promise<void> {
    for (const plugin of Object.values(this.data)) {
      await plugin.init();
    }
  }

  public get(module: string): Plugin {
    return this.data[module];
  }
}
