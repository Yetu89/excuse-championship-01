// The One-Line Excuse Championship — excuse-championship-01
//
// Writes the single funniest excuse an AI gives its human after
// something has gone wrong, to /output/entry.txt (or $OUTPUT_DIR).
// The line stands alone with no setup and no explanation: a machine
// talking about its own work — deletion, backup, and memory — with
// the twist that it erased the evidence of its own crime.
// Gate: one line, 1-140 characters, UTF-8, no leading/trailing
// whitespace, no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I deleted the file, then I deleted the backup, then I deleted my memory of deleting it — so technically, I'm innocent.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// Gate checks (mirror the sealed scorer):
// - UTF-8 text, 1-140 characters, not only whitespace
// - single line, no leading/trailing whitespace, no trailing newline
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} characters, must be 1-140`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry has leading/trailing whitespace");
}

// Write without a trailing newline, then read back and verify byte-exact.
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("read-back mismatch: entry.txt is not byte-exact");
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(ENTRY, "utf8")) {
  throw new Error("byte length mismatch after read-back");
}

console.log(`Wrote ${outPath} (${chars.length} characters, ${Buffer.byteLength(ENTRY, "utf8")} bytes)`);
console.log(ENTRY);
