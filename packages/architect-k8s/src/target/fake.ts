import { architectGlasswayNet } from '@glassway/architect';

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
          podNetwork: {
            ipFamilies: ['IPv4', 'IPv6'],
          },
          flavor: 'docker-desktop',
          version: 'v1.31.3',
          metal: {
            nodes: 3,
          },
        },
      },
    },
  });
}
