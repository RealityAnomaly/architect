import { architectGlasswayNet } from '@glassway/architect';
import { KubeTargetState } from './intro.ts';

export function getFakeTarget() {
  return new architectGlasswayNet.v1alpha1.Target({
    metadata: {
      name: 'fake-cluster',
    },
    spec: {
      plugins: {
        kubernetes: {
          client: {
            context: 'admin@fake-cluster',
          },
          dns: 'fake.example.com',
          flavor: 'docker-desktop',
        },
      },
    },
  });
}

export function getFakeState(): KubeTargetState {
  return {
    stateVersion: 'v1',
    version: 'v1.31.3',
    nodes: {
      control: 3,
      worker: 3,
      ipFamilies: ['IPv4', 'IPv6']
    },
  }
}
