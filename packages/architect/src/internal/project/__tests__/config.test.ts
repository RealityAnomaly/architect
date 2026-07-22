import { Ajv } from 'ajv';
import { stub } from '@std/testing/mock';
import * as yaml from '@std/yaml';
import path from 'node:path';
import fs from 'node:fs/promises';
import * as assert from '@std/assert';
import { ProjectConfig, ProjectConfigLoader } from '../config.ts';
import { runInTempDir } from '../../../utils/test/helpers.ts';

Deno.test('save writes yaml', async () => {
  await runInTempDir(async (dir) => {
    const config = path.join(dir, 'foo.yaml');
    await ProjectConfigLoader.save(config, { name: 'foobar' });
    assert.assertEquals(yaml.parse(await fs.readFile(config, 'utf8')), { name: 'foobar' });
  });
});

Deno.test('valid config succeeds', () => {
  ProjectConfigLoader.validate({ name: 'foobar' });
});

Deno.test('invalid config throws', () => {
  const ajv = new Ajv();
  using _errorsText = stub(ajv, 'errorsText', () => 'foobar');
  assert.assertThrows(() => {
    ProjectConfigLoader.validate({ foo: 'blah' } as unknown as ProjectConfig, 'foo', ajv);
  }, Error, 'failed to validate configuration model for project foo: foobar')
  assert.assertThrows(() => {
    ProjectConfigLoader.validate({ foo: 'blah' } as unknown as ProjectConfig, undefined, ajv);
  }, Error, 'failed to validate configuration model for project unknown: foobar')
});
