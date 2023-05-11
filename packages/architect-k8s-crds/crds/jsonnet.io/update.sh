#!/usr/bin/env bash
mkdir out && cd out || exit
kustomize build "https://github.com/pelotech/jsonnet-controller//config/crd/?ref=v0.0.9" > result.yaml
