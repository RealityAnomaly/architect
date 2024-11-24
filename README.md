# Architect

<p align="center">
  <img src="https://img.shields.io/npm/v/@perdition/architect-core" />
</p>

Architect is a framework for constructing very complex structured configuration trees in TypeScript.

## Philosophy
- Fast development loop. Architect uses `ts-node` - no manual `tsc` step is required.
- Plainly visible behaviour. No hidden magic. What you declare in TypeScript is what runs.

## Concepts

- **Component**: Think of a component like a singular application. It's a self-contained group of configuration or resources. Consists of a class with a function called `build()` that returns either an object or a list of objects to be merged into the global tree.
- **Capability**: A service provided by one or more components, that can be declared on a component and made mandatory on other components.
- **Fact**: Represents a unique source of data that can be requested by any individual component. Think of Facts as the input configuration for your Components.
- **Target**: Holds state for a singular build. Components and facts are registered against a target, and a `resolve` function is called to return the final merged configuration tree.
