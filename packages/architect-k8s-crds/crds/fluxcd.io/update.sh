#!/usr/bin/env bash
mkdir out && cd out || exit
wget -q https://github.com/fluxcd/flux2/releases/latest/download/install.yaml
