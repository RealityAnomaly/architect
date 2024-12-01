import { HashUtilities } from '../../src/utils/hashing.mts';

test('composite hash equality', () => {
  const first = [
    'foo', 'bar', { foo: 'bar' },
  ];

  const second = [
    'foo', 'bar', { foo: 'bar' },
  ];

  const hash = HashUtilities.compositeHash(first);
  expect(hash).toStrictEqual(HashUtilities.compositeHash(second));
});

test('composite hash inequality', () => {
  const first = [
    'foo', 'bar', { foo: 'bar' },
  ];

  const second = [
    'foo', 'bar', { foo: 'baz' },
  ];

  const hash = HashUtilities.compositeHash(first);
  expect(hash).not.toStrictEqual(HashUtilities.compositeHash(second));
});
