#!/usr/bin/env bash
mkdir out && cd out || exit
wget -q https://github.com/prometheus-operator/prometheus-operator/releases/download/v0.57.0/bundle.yaml
