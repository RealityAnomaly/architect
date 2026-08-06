# Architect

<p align="center">
  <img src="https://img.shields.io/jsr/v/@glassway/architect" />
  <img src="https://img.shields.io/github/actions/workflow/status/RealityAnomaly/architect/test.yml?label=tests" />
  <img src="https://raw.githubusercontent.com/nuxy/no-ai-badge/52cd4b78d711f4e30bb3c5f9ee713fb9f1d46c39/badge.svg" />
</p>

Architect is a TypeScript-based IaC tool powered by [Deno](https://deno.com), built to handle massive JSON trees such as the resources in a Kubernetes cluster, Nix module parameters, or the configuration for a router. It's designed to be more lightweight than existing frameworks such as Terraform and Pulumi, and makes use of intelligent caching to speed up build times for a faster development loop.

Architect is currently in the prototype (pre-Alpha) stage, and is still in an early phase of development. It's not yet production-ready, and the API surface is not stable, but contributions are appreciated! Currently, there is a plugin for Kubernetes that represents the first Architect plugin, present under the `packages` folder as `architect-k8s`.

All contributions to Architect are governed by the [Contributor Covenant 3.0](https://www.contributor-covenant.org/version/3/0/code_of_conduct/). AI-generated contributions will not be accepted.
