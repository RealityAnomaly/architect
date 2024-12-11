# Kubernetes module for Architect

<p align="center">
  <img src="https://img.shields.io/jsr/v/@perdition/architect-k8s" />
</p>

This is an extension to the [Architect framework](https://github.com/realityanomaly/architect) which allows you to define, validate, and deploy Kubernetes resources in TypeScript. It can scale to hundreds of thousand of resources and allows you to manage entire fleets of clusters in a DRY fashion.

## Example

Please see `src/components/vendor` for a few initial examples.

## Current features

- **GitOps support** (FluxCD implemented, ArgoCD planned)
- **Typed CRDs for in-editor and compile-time validation** - never watch your CI fail again! (Thanks to Tommy Chen ([@tommy351](https://github.com/tommy351)) for their excellent [Kubernetes models](https://github.com/tommy351/kubernetes-models-ts) library)
- **Helm, Kustomize, and Jsonnet support**, including caching - a feature not found on other frameworks - which intelligently caches builds based on their input values, significantly reducing compile time
- **Component system** - define your cluster resources in logical units
  - Declare relationships between resources as dependencies which are respected when applying via FluxCD
  - A lazy parameter system, reminiscent of Nix's structured configuration tree

## Planned features

- **GitOps bootstrapping** - Bootstrap the cluster with a GitOps provider automatically
- **Direct apply** - apply your changes directly to the cluster
- **Hybrid apply** - apply your changes via GitOps and watch them happen live with a connection to the target cluster

## CRDs

Architect has a philosophy of delegating CRD generation to you, the developer. Why? We believe that creating our own CRD packages have the potential to become outdated or break as they change, and there are too many Kubernetes applications out there to maintain an up-to-date package for all of them. CRDs will be bundled with applications [we support](https://github.com/realityanomaly/architect/packages/architect-k8s-apps), but others are up to you to manage.

## FAQ

- **Why TypeScript?** JavaScript/TypeScript is the home of JSON, the language that YAML extends from. It provided the best working experience as WYSIWYG.
- **Aren't there other frameworks that do the same thing?** Architect was built specifically to address the existing shortfalls in other JavaScript/TypeScript-based frameworks, such as a lengthy development loop and heavy levels of complexity.
- **What was wrong with Fractal?**
  - Fractal was a decent attempt at a framework, but it unfortunately ran into pitfalls surrounding the interactions between Nix and Kubernetes types/Jsonnet. Nix was never really built to handle or validate Kubernetes' complex models.
  - Neither Nix nor Jsonnet were typed, so validation could only occur (slowly) either at compile time or when the manifests were applied to the cluster.
  - The framework was also overengineered and overcomplicated, making use of Go, Nix, and Jsonnet, for different components. Here, we unify everything into TypeScript.

## Comparison with other frameworks

| Framework | Model | Apply Methodology | Language | Overhead | Caching | Typing | Integrations |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Pulumi | Stateful | Direct | Multiple | Heavy | Helm-only | Static | Helm, Kustomize |
| CDK8s | Stateful | Direct | Multiple | Heavy | No | Static | Helm, Kustomize |
| Tanka | Stateless | Direct | Jsonnet | Light | No | Dynamic | Helm, Kustomize, Jsonnet |
| Kosko | Stateless | Direct | JS/TS | Light | No | Static | Helm, Kustomize |
| Fractal | Stateless | GitOps | Jsonnet | Light | Yes | Dynamic | Helm, Kustomize, Jsonnet |
| Architect | Stateless | GitOps, Direct (planned), Hybrid (planned) | JS/TS | Light | Yes | Static | Helm, Kustomize, Jsonnet |

## Example

Please see the [architect-k8s-template](https://github.com/realityanomaly/architect-k8s-template) repository for a starting point and a component example. You can use this repository as a template for your own clusters.
