#!/usr/bin/env bash
mkdir out && cd out || exit
wget -q "https://raw.githubusercontent.com/istio/istio/1.14.0/manifests/charts/base/crds/crd-all.gen.yaml"
