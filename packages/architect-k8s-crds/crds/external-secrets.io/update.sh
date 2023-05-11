#!/usr/bin/env bash
mkdir out && cd out || exit
wget -q "https://raw.githubusercontent.com/external-secrets/external-secrets/main/deploy/crds/bundle.yaml"
