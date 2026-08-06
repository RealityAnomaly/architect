// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import { stub } from '@std/testing/mock';
import { apiextensionsK8sIo } from '@glassway/kubernetes-models';

import { KubeResource } from '../../resource.ts';
import { GVK } from '../gvk.ts';

Deno.test('GVK parsed from resource model', () => {
  const resource: KubeResource = {
    apiVersion: 'architect.glassway.net/v1alpha1',
    kind: 'Target',
    metadata: {
      name: 'foo'
    }
  };

  using call = stub(GVK, 'fromAK');
  GVK.fromResource(resource);
  assert.assertStrictEquals(call.calls.length, 1);
  assert.assertEquals(call.calls[0].args[0], resource.apiVersion);
  assert.assertEquals(call.calls[0].args[1], resource.kind);
});

Deno.test('GVK parsed from apiVersion and kind', () => {
  const gvk = GVK.fromAK('architect.glassway.net/v1alpha1', 'Target');
  assert.assertEquals(gvk.group, 'architect.glassway.net');
  assert.assertEquals(gvk.version, 'v1alpha1');
  assert.assertEquals(gvk.kind, 'Target');

  // test with no group
  const gvk2 = GVK.fromAK('v1', 'Foobar');
  assert.assertEquals(gvk2.group, undefined);
  assert.assertEquals(gvk2.version, 'v1');
  assert.assertEquals(gvk2.kind, 'Foobar');
});

Deno.test('GVKs from CRD', () => {
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

  const gvk = GVK.fromCRD(crd);
  assert.assertEquals(gvk.length, 2);
  assert.assertEquals(gvk[0].group, 'architect.glassway.net');
  assert.assertEquals(gvk[0].version, 'v1');
  assert.assertEquals(gvk[0].kind, 'Foobar');
  assert.assertEquals(gvk[1].group, 'architect.glassway.net');
  assert.assertEquals(gvk[1].version, 'v1alpha1');
  assert.assertEquals(gvk[1].kind, 'Foobar');
});

Deno.test('Unique GVKs from resources', () => {
  const resource: KubeResource = {
    apiVersion: 'architect.glassway.net/v1alpha1',
    kind: 'Target',
    metadata: {
      name: 'foo'
    }
  };

  const results = GVK.uniqueGVKs([resource, resource]);
  assert.assertEquals(results.length, 1);
  assert.assertEquals(results[0].group, 'architect.glassway.net');
  assert.assertEquals(results[0].version, 'v1alpha1');
  assert.assertEquals(results[0].kind, 'Target');
});

Deno.test('GVK comparison', () => {
  const gvk = new GVK('v1', 'Foobar', 'architect.glassway.net');
  assert.assert(gvk.compare(new GVK('v1', 'Foobar', 'architect.glassway.net')));
  assert.assertFalse(gvk.compare(new GVK('v1alpha1', 'Foobar', 'architect.glassway.net')));
  assert.assertFalse(gvk.compare(new GVK('v1', 'Foo', 'architect.glassway.net')));
  assert.assertFalse(gvk.compare(new GVK('v1', 'Foobar', 'blah')));
});

Deno.test('Built in types test', () => {
  const gvk = new GVK('v1', 'CustomResourceDefinition', 'api.apiextensions.k8s.io');
  assert.assert(gvk.isAPIModel());
  const gvk2 = new GVK('v1', 'CustomResourceDefinition');
  assert.assert(gvk2.isAPIModel());
  const gvk3 = new GVK('v1', 'CustomResourceDefinition', 'blah');
  assert.assert(gvk3.isAPIModel());
  const gvk4 = new GVK('v1', 'CustomResourceDefinition', 'blah.com');
  assert.assertFalse(gvk4.isAPIModel());
});

Deno.test('Stringify', () => {
  const gvk = new GVK('v1', 'CustomResourceDefinition', 'api.apiextensions.k8s.io');
  assert.assertEquals(gvk.toString(), 'api.apiextensions.k8s.io_v1/CustomResourceDefinition');
  const gvk2 = new GVK('v1', 'CustomResourceDefinition');
  assert.assertEquals(gvk2.toString(), 'v1/CustomResourceDefinition');
});

Deno.test('Convert to path', () => {
  const gvk = new GVK('v1', 'CustomResourceDefinition', 'api.apiextensions.k8s.io');
  assert.assertEquals(gvk.toPath(), 'api.apiextensions.k8s.io/v1/CustomResourceDefinition');
  const gvk2 = new GVK('v1', 'CustomResourceDefinition');
  assert.assertEquals(gvk2.toPath(), 'v1/CustomResourceDefinition');
});
