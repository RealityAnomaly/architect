// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import * as yaml from '@std/yaml';
import { stub } from '@std/testing/mock';
import { apiextensionsK8sIo, coordinationK8sIo } from '@glassway/kubernetes-models';
import * as path from '@std/path';

import { runInTempDir } from '../../utils/test/helpers.ts';
import { CRDModelGenerator } from '../crd.ts';
import { KubeTypeRegistry } from '../types/index.ts';
import { ManifestLoader } from '../yaml.ts';

Deno.test('generates CRDs', async () => {
  const registry = new KubeTypeRegistry();
  const loader = new ManifestLoader(registry);
  const generator = new CRDModelGenerator(loader);

  const crd = new apiextensionsK8sIo.v1.CustomResourceDefinition({
    spec: {
      group: 'architect.glassway.net',
      names: {
        kind: 'Foobar',
        plural: 'Foobars'
      },
      versions: [
        {
          name: 'v1',
          served: true,
          storage: true
        },
        {
          name: 'v1alpha1',
          served: true,
          storage: true
        }
      ],
      scope: 'blah'
    }
  });

  const noncrd = new coordinationK8sIo.v1.Lease({
    spec: {}
  })

  await runInTempDir(async (dir) => {
    const yamlDir = path.join(dir, 'yaml');
    await Deno.mkdir(yamlDir);
    await Deno.writeTextFile(path.join(yamlDir, 'test.yaml'), yaml.stringify(crd, {
      skipInvalid: true
    }));

    await Deno.writeTextFile(path.join(yamlDir, 'test2.yaml'), yaml.stringify(noncrd, {
      skipInvalid: true
    }));

    await Deno.writeTextFile(path.join(yamlDir, 'wrongfile.txt'), 'foobar');

    const outDir = path.join(dir, 'out');
    await Deno.mkdir(outDir);

    using generate = stub(generator, 'generator');
    await generator.generate(yamlDir, outDir);

    assert.assertEquals(generate.calls[0].args[0].input, [crd]);
    assert.assertEquals(generate.calls[0].args[0].outputPath, outDir);

    // ensure blob exists and is well formed
    assert.assertEquals(await Deno.readTextFile(
      path.join(outDir, 'blob.min.json')
    ), JSON.stringify([crd]));
  });
});
