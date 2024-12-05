import { Architect, Capability } from 'jsr:@perdition/architect-core';

/**
 * Represents an available cluster CSI driver
 */
@Architect.class('capability.k8s.architect.glassway.net/storage')
export class StorageCapability extends Capability<never> {};
