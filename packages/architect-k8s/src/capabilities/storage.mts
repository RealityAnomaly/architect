import 'reflect-metadata';
import { Capability } from '@perdition/architect-core';

/**
 * Represents an available cluster CSI driver
 */
@Reflect.metadata('class', 'capability.k8s.architect.glassway.net/storage')
export class StorageCapability extends Capability<any> {};
