#!/usr/bin/env bash
mkdir out && cd out || exit
wget -q "https://raw.githubusercontent.com/kubernetes-sigs/wg-policy-prototypes/master/policy-report/crd/v1alpha1/wgpolicyk8s.io_clusterpolicyreports.yaml"
wget -q "https://raw.githubusercontent.com/kubernetes-sigs/wg-policy-prototypes/master/policy-report/crd/v1alpha1/wgpolicyk8s.io_policyreports.yaml"
