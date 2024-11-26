# Hacking

To set up a local development environment, clone this repository and run `yarn install`.

## Updating packages

1. Run `npx npm-check-updates -u` to bump versions of packages
2. Run `npx lerna repair` on the root package to update the Lerna configuration
3. Run `jest` to ensure all tests still pass
