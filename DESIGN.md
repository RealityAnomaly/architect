# Design

## Commands

There will be two versions of the `architect` CLI: an optional one that is installed in the user's PATH and can be used only to create new projects with `architect new`, and one that exists in Architect project directories from which all the main build/deployment commands run.

### architect compile

Use: for a specific target (or all targets), transform resource definitions in code into the form that would be applied to a provider (i.e. Kubernetes manifests, CDK YAML, Terraform modules, Nix code, etc), after running validation. Can be scoped to a specific component or resource pattern. This command will not "fail fast" if a validation or dependency error occurs, it will collect all warnings and errors and present them to the user together.

```
project$> architect compile --target test-cluster
info:    target test-cluster: 23 components to build
info:    target test-cluster: validating dependencies
info:    target test-cluster: validation passed with 0 errors, 0 warnings, 0 messages
```

Dependency validation failures:

```
project$> architect compile --target test-cluster2
info:    target test-cluster2: 103 components to build
info:    target test-cluster2: validating dependencies
error:   target test-cluster2: infra-system/kubernetes-dashboard: failed to satisfy dependency on Capability("k8s.architect.glassway.net/cni")
error:   target test-cluster2: infra-system/kubernetes-dashboard: failed to satisfy dependency on Capability("k8s.architect.glassway.net/dns")
error:   target test-cluster2: validation failed with 2 errors, 0 warnings, 0 messages
```

Example of forcing compilation with a validation failure:

```
project$> architect compile --target test-cluster2 --no-validate
info:    target test-cluster2: 103 components to build
info:    target test-cluster2: validating dependencies
warn:    target test-cluster2: infra-system/kubernetes-dashboard: failed to satisfy dependency on Capability("k8s.architect.glassway.net/cni")
warn:    target test-cluster2: infra-system/kubernetes-dashboard: failed to satisfy dependency on Capability("k8s.architect.glassway.net/dns")
warn:    target test-cluster2: validation passed with 0 errors, 2 warnings, 0 messages
```

### architect apply

Use: a superset of `architect compile`, this command actually applies the compiled resources to a provider.

```
project$> architect apply --target test-cluster
info:    target test-cluster: 23 components to build
info:    target test-cluster: refreshing provider state
info:    target test-cluster: validating dependencies
info:    target test-cluster: validation passed with 0 errors, 0 warnings, 0 messages
173 resources will be created, 23 will be updated, do you want to continue: [Y/n] Y
applying 53/173 resources [====================>      ] 70%, 10c/s, eta: 1m23s
```

### architect destroy

Use: a superset of `architect compile`, this command deletes all defined resources.

### architect diff

Use: a superset of `architect compile`, builds resource definitions and then compares them to the state of the infrastructure in the provider to ascertain the changes that would be made.

### architect new

Use: creates a new Architect project in the current directory.

### architect component list

Use: lists all available components classes in the current project, and the projects that are included as dependencies.

```
project$> architect component list

Current project:
  - architect.glassway.net/crds
  - architect.glassway.net/external-secrets
  - architect.glassway.net/fluxcd
  - architect.glassway.net/kyverno
  - architect.glassway.net/metrics-server
  - architect.glassway.net/minio-operator
  - architect.glassway.net/replicator
  - architect.glassway.net/rook-operator
  - architect.glassway.net/secret-generator
```

### architect component show

Use: shows information about a specific component, such as its version, its options or its required dependency constraints.

### architect component upgrade

Use: upgrades versions of external dependencies a component references, such as container images, Helm charts, or binary blobs that a component's definition references. Can be configured to simulate the upgrade, showing the components that would be upgraded. Changes will only be committed if the component's output resources validate successfully against all possible parent component types in the component's build matrix (i.e. an example Kubernetes cluster).

### architect target list

Use: lists all defined targets across all of the state backends defined in the project (i.e. file, k8s api, S3). 

### architect target show

Use: displays information about the deployment model for the specified target (maybe as well as its current state?)

### architect plugin k8s crd sync

Use: upgrades the versions of CRDs referenced in a specific project, and regenerates TypeScript models.

```
project$> architect plugin k8s crd sync
info:    completed fetch for CRD domain bitnami.com, found 1 resources
info:    completed fetch for CRD domain cert-manager.io, found 0 resources
info:    models marked dirty, running generation
```
