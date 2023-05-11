#!/usr/bin/env bash
repo_base="https://raw.githubusercontent.com/cilium/cilium/v1.11.5/pkg/k8s/apis/cilium.io/client/crds/v2"

mkdir out && cd out || exit
wget -q "$repo_base/ciliumclusterwidenetworkpolicies.yaml"
wget -q "$repo_base/ciliumendpoints.yaml"
wget -q "$repo_base/ciliumexternalworkloads.yaml"
wget -q "$repo_base/ciliumidentities.yaml"
wget -q "$repo_base/ciliumlocalredirectpolicies.yaml"
wget -q "$repo_base/ciliumnetworkpolicies.yaml"
wget -q "$repo_base/ciliumnodes.yaml"
