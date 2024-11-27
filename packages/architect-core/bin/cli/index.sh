#!/usr/bin/env bash
node --enable-source-maps --preserve-symlinks --no-warnings=ExperimentalWarning \
  --loader ts-node/esm "$(dirname "$0")/architect-esm" "$@"
