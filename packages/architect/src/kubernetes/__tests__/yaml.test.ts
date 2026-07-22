import fs from 'node:fs/promises';
import * as assert from '@std/assert';
import * as yaml from '@std/yaml';
import { stub } from '@std/testing/mock';
import { KubeTypeRegistry } from '../types/index.ts';
import { ManifestLoader } from '../yaml.ts';
import * as crds from './../../kubernetes/crds/index.ts';
import { architectGlasswayNet } from './../../kubernetes/crds/index.ts';

let registry: KubeTypeRegistry;
let loader: ManifestLoader;

const validModel = {
  apiVersion: 'architect.glassway.net/v1alpha1',
  kind: 'Target',
  metadata: {
    name: 'foobar'
  },
  spec: {}
};

const notKnown = {
  apiVersion: 'blah.com/blah',
  kind: 'Blah',
  metadata: {
    name: 'foobar'
  },
  spec: {}
};

const notResource = {
  blah: 'foobar'
}

Deno.test.beforeEach(() => {
  registry = new KubeTypeRegistry();
  registry.appendModule(crds);
  loader = new ManifestLoader(registry);
});

Deno.test('loads array', () => {
  const result = loader.loadArray([validModel, notKnown]);
  assert.assertEquals(result, [new architectGlasswayNet.v1alpha1.Target(validModel), notKnown]);

  assert.assertThrows(() => {
    loader.loadArray(['blah']);
  }, Error, `The value is not an object: ${JSON.stringify('blah')}`);

  assert.assertThrows(() => {
    loader.loadArray([notResource]);
  }, Error, `The value is not a Kubernetes API resource (apiVersion and kind required): ${JSON.stringify(notResource)}`);
});

Deno.test('loads string', () => {
  using loadArray = stub(loader, 'loadArray');
  const value = [{ foo: 'bar' }];
  loader.loadString(yaml.stringify(value));
  assert.assertStrictEquals(loadArray.calls.length, 1);
});

Deno.test('loads file', async () => {
  using loadString = stub(loader, 'loadString');
  using readFile = stub(fs, 'readFile');
  await loader.loadFile('foobar.yaml');
  assert.assertStrictEquals(readFile.calls.length, 1);
  assert.assertStrictEquals(loadString.calls.length, 1);
});
