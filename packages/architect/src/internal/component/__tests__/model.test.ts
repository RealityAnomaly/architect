import * as assert from '@std/assert';
import fs from 'node:fs/promises';
import path from 'node:path';
import { ComponentModelUtilities } from '../model.ts';
import { runInTempDir } from '../../../utils/test/helpers.ts';

Deno.test('finds architect.json', async () => {
  await runInTempDir(async (dir) => {
    const dirTest = path.join(dir, 'dirtest');
    await fs.mkdir(dirTest);

    const fileTest = path.join(dir, 'filetest')
    await fs.writeFile(fileTest, JSON.stringify({'foo': 'bar'}))

    const dirTest2 = path.join(dirTest, 'dirtest2')
    await fs.mkdir(dirTest2);

    const wrongFile = path.join(dirTest, 'wrong.json')
    const rightFile = path.join(dirTest, 'architect.json')
    const rightFile2 = path.join(dirTest2, 'architect.json')
    await fs.writeFile(wrongFile, JSON.stringify({'foo': 'bar'}))
    await fs.writeFile(rightFile, JSON.stringify({'foo': 'bar2'}))
    await fs.writeFile(rightFile2, JSON.stringify({'foo': 'bar3'}))

    const results = await ComponentModelUtilities.collect([dirTest,  fileTest, 'notfound']);
    assert.assertEquals(results.length, 2);
    assert.assert(results[0].path.endsWith('architect.json'))
    //assert.assertEquals(results[0].model, {'foo': 'bar2'} as ComponentModelFile)
    assert.assert(results[1].path.endsWith('architect.json'))
    //assert.assertEquals(results[1].model, {'foo': 'bar3'} as ComponentModelFile)
  });
});
