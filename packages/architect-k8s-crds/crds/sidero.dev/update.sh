#!/usr/bin/env bash
mkdir out && cd out || exit
kustomize build "https://github.com/siderolabs/sidero//app/sidero-controller-manager/config/crd?ref=v0.5.1" > result.yaml
