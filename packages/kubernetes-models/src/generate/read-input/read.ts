import { readFile } from "node:fs/promises";
import { httpGet } from "./http.ts";
import { toText } from "@std/streams";

const urlRegex = /^https?:\/\//;

export async function readInput(path: string): Promise<string> {
  if (path === "-") {
    return await toText(Deno.stdin.readable);
  }

  if (urlRegex.test(path)) {
    return httpGet(path);
  }

  return readFile(path, "utf8");
}
