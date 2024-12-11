# Architect

<p align="center">
  <img src="https://img.shields.io/jsr/v/@perdition/architect-core" />
  <img src="https://img.shields.io/github/actions/workflow/status/RealityAnomaly/architect/test.yml?label=tests" />
</p>

Architect is a TypeScript-based IaC tool powered by [Deno](https://deno.com), built to handle massive JSON trees such as the resources in a Kubernetes cluster, Nix module parameters, or the configuration for a router. It's designed to be more lightweight than existing frameworks such as Terraform and Pulumi, and makes use of intelligent caching to speed up build times for a faster development loop.

Architect is currently in the prototype (pre-Alpha) stage, and is still in an early phase of development. It's not yet production-ready, and the API surface is not stable, but contributions are appreciated! Currently, there is a plugin for Kubernetes that represents the first Architect plugin, present under the `packages` folder as `architect-k8s`.
