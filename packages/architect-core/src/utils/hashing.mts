import * as crypto from 'crypto';
import objectHash from 'object-hash';

/**
 * Given a list of objects, this function hashes them together and returns the hash as a hex digest.
 *
 * @public
 */
export function compositeHash(objects: object[]): string {
  const hash = crypto.createHash('md5');
  objects.forEach(object => hash.update(objectHash(object)));

  return hash.digest('hex');
};
