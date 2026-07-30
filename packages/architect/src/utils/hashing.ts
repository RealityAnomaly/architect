import * as crypto from "node:crypto";
import objectHash from "object-hash";
import { encodeHex } from '@std/encoding/hex';

type HashKind = 'sha1' | 'sha256' | 'sha512';
const HashKindMap = {
  'sha1': 'SHA-1',
  'sha256': 'SHA-256',
  'sha512': 'SHA-512'
}

export class Hash {
  private readonly kind: HashKind;
  private readonly value: string;

  constructor(kind: HashKind, value: string) {
    this.kind = kind;
    this.value = value;
  }

  public encode(): string {
    return `${this.kind}:${this.value}`;
  }

  public async validate(value: Uint8Array<ArrayBuffer>): Promise<boolean> {
    const hashBuffer = await crypto.subtle.digest(HashKindMap[this.kind], value);
    return this.value === encodeHex(hashBuffer);
  }

  public static parse(encoded: string) {
    const parts = encoded.split(':');
    if (parts.length != 2) throw Error(`Invalid hash string: ${encoded}`);
    return new Hash(parts[0] as HashKind, parts[1]);
  }
}

/**
 * NON CRYPTOGRAPHICALLY SECURE hashing utilities
 */
export class HashUtilities {
  static stringHash(value: string): string {
    const hash = crypto.createHash("md5");
    hash.update(value);
    return hash.digest("hex");
  }

  /**
   * Given a list of objects, this function hashes them together and returns the hash as a hex digest.
   *
   * @public
   */
  static compositeHash(objects: object[]): string {
    const hash = crypto.createHash("md5");
    objects.forEach((object) => hash.update(objectHash(object)));

    return hash.digest("hex");
  }
}
