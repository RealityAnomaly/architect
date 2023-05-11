#!/usr/bin/env bash
repo_base="https://raw.githubusercontent.com/kyverno/kyverno/v1.7.0/config/crds"

mkdir out && cd out || exit
wget -q "$repo_base/kyverno.io_clusterpolicies.yaml"
wget -q "$repo_base/kyverno.io_clusterreportchangerequests.yaml"
wget -q "$repo_base/kyverno.io_generaterequests.yaml"
wget -q "$repo_base/kyverno.io_policies.yaml"
wget -q "$repo_base/kyverno.io_reportchangerequests.yaml"
wget -q "$repo_base/kyverno.io_updaterequests.yaml"
