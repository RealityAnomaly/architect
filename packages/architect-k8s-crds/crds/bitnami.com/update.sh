#!/usr/bin/env bash
mkdir out && cd out || exit
wget -q https://raw.githubusercontent.com/bitnami-labs/sealed-secrets/main/helm/sealed-secrets/crds/sealedsecret-crd.yaml
