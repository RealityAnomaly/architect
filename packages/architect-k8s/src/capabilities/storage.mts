import { Architect, Capability } from '@perdition/architect-core';

/**
 * Represents an available cluster CSI driver
 */
@Architect.class('capability.k8s.architect.glassway.net/storage')
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class StorageCapability extends Capability<any> {};
