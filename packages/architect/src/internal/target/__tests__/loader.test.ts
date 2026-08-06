// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import * as yaml from '@std/yaml';
import * as path from '@std/path';
import * as logtape from '@logtape/logtape';

import * as crds from './../../../kubernetes/crds/index.ts';
import { MockArchitect } from '../../../__mocks__/app.ts';
import { MockProject } from '../../project/__mocks__/project.ts';
import { TargetLoader } from '../loader.ts';
import { runInTempDir } from '../../../utils/test/helpers.ts';
import { architectGlasswayNet } from '../../../kubernetes/crds/index.ts';
import { PluginRegistry } from '../../plugin/registry.ts';
import { KubeTypeRegistry, ManifestLoader } from '../../../kubernetes/index.ts';
import { Plugin } from '../../plugin/plugin.ts';
import { TestPluginBase } from '../../plugin/__mocks__/plugin.ts';

let app: MockArchitect;
let project: MockProject;
let logger: logtape.Logger;
let plugins: PluginRegistry;
let loader: ManifestLoader;

@Plugin.decorate(Plugin.TARGET_IDENTIFIERS.kubernetes)
class DummyPlugin extends TestPluginBase {}

const validModel = new architectGlasswayNet.v1alpha1.Target({
  metadata: {
    name: 'foobar'
  },
  spec: {
    plugins: {
      kubernetes: {
        client: {
          context: 'blah'
        },
        flavor: 'docker-desktop',
        dns: 'blah'
      }
    }
  }
});

const unconfiguredModel = new architectGlasswayNet.v1alpha1.Target({
  metadata: {
    name: 'foobar2'
  },
  spec: {}
// deno-lint-ignore no-explicit-any
} as any);

const invalidModel = new architectGlasswayNet.v1alpha1.Target({
  metadata: {
    nam: 'ss',
    name: { km: 1212 }
  },
  spec: {
    blah: 'foo'
  }
// deno-lint-ignore no-explicit-any
} as any);

Deno.test.beforeEach(() => {
  app = new MockArchitect();
  project = new MockProject(app);
  logger = logtape.getLogger(['test']);
  plugins = new PluginRegistry();
  plugins.register(DummyPlugin, app);
  const kube = new KubeTypeRegistry();
  kube.appendModule(crds);
  loader = new ManifestLoader(kube);
});

Deno.test('collects folder', async () => {
  await runInTempDir(async (dir) => {
    await Deno.mkdir(path.join(dir, 'valid'));
    await Deno.mkdir(path.join(dir, 'invalid'));
    await Deno.mkdir(path.join(dir, 'unconfigured'));

    await Deno.symlink(path.join(dir, 'valid/notatarget.yaml'), path.join(dir, 'valid/notatarget2.yaml'));
    await Deno.writeTextFile(path.join(dir, 'valid/notatarget.yaml'), 'ffdffdf');
    await Deno.writeTextFile(path.join(dir, 'valid/target.yaml'), yaml.stringify(validModel));
    await Deno.writeTextFile(path.join(dir, 'invalid/target.yaml'), yaml.stringify(invalidModel));
    await Deno.writeTextFile(path.join(dir, 'unconfigured/target.yaml'), yaml.stringify(unconfiguredModel));
    const results = await TargetLoader.collectFolder(project, plugins, loader, dir, logger);

    assert.assertEquals(results.length, 1);
    assert.assertEquals(results[0].model.metadata.name, 'foobar');

    // not a directory
    const results2 = await TargetLoader.collectFolder(project, plugins, loader, path.join(dir, 'valid/notatarget.yaml'));
    assert.assertEquals(results2.length, 0);
    // not found
    const results3 = await TargetLoader.collectFolder(project, plugins, loader, path.join(dir, 'invalid/notatarget.yaml'));
    assert.assertEquals(results3.length, 0);
  });
});
