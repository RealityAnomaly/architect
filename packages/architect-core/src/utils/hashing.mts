import * as crypto from 'node:crypto';
import objectHash from 'object-hash';

/**
 * NON CRYPTOGRAPHICALLY SECURE hashing utilities
 */
export class HashUtilities {
  static stringHash(value: string): string {
    const hash = crypto.createHash('md5');
    hash.update(value);
    return hash.digest('hex');
  };
  
  /**
   * Given a list of objects, this function hashes them together and returns the hash as a hex digest.
   *
   * @public
   */
  static compositeHash(objects: object[]): string {
    const hash = crypto.createHash('md5');
    objects.forEach(object => hash.update(objectHash(object)));
  
    return hash.digest('hex');
  };
};
