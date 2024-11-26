#!/usr/bin/env bash
node --enable-source-maps --no-warnings=ExperimentalWarning \
  --loader ts-node/esm "$(dirname "$0")/architect-esm" "$@"
