#!/usr/bin/env node
import tsNode from 'ts-node';
import path from 'path';

tsNode.register({
  project: path.resolve(`${import.meta.dirname}/../../tsconfig.json`),
});

import { App } from '@perdition/architect-core';
await App.run(process.cwd());
