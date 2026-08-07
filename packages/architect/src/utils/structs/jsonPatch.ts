export type JSONPatch = {
  op: 'add',
  path: string,
  value: unknown
} | {
  op: 'remove',
  path: string
} | {
  op: 'replace',
  path: string,
  value: unknown
} | {
  op: 'move',
  from: string,
  path: string
} | {
  op: 'copy',
  from: string,
  path: string
} | {
  op: 'test',
  path: string,
  value: unknown
}
