#!/usr/bin/env bash
mkdir out && cd out || exit

# External DNS
wget -q -O external-dns.yaml "https://raw.githubusercontent.com/kubernetes-sigs/external-dns/v0.12.0/docs/contributing/crd-source/crd-manifest.yaml"

# Storage Snapshotter
kustomize build "https://github.com/kubernetes-csi/external-snapshotter//client/config/crd/?ref=v6.0.1" > storage.yaml
