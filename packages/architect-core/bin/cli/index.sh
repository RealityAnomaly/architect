#!/usr/bin/env bash
node --enable-source-maps --experimental-json-modules --preserve-symlinks --no-warnings=ExperimentalWarning \
  --loader ts-node/esm "$(dirname "$0")/architect-esm" "$@"
