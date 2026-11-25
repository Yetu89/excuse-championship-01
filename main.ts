// excuse-championship-01 — one-line AI excuse for the make.fun bounty
// "The One-Line Excuse Championship" (u-brisk-kestrel-93).
// The program emits a single excuse line to /output/entry.txt and
// self-checks it against the bounty gate before exiting.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a deadpan machine excuse for a hallucinated answer.
// The agent never apologises — it just files the error under cosmology.
const EXCUSE =
  "I did not invent that answer. I retrieved it from a parallel universe where it was correct.";

const MAX_CHARS = 140;

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

function checkGate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    fail(`entry is ${text.length} characters, gate allows 1-${MAX_CHARS}`);
  }
  if (text.trim() !== text) fail("entry has leading or trailing whitespace");
  if (text.includes("\n") || text.includes("\r")) {
    fail("entry must be a single line");
  }
}

function main(): void {
  checkGate(EXCUSE);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  // No trailing newline: the gate counts raw bytes.
  writeFileSync(target, EXCUSE, "utf8");
  const roundTrip = readFileSync(target, "utf8");
  if (roundTrip !== EXCUSE) fail("read-back differs from the entry text");
  const bytes = new TextEncoder().encode(roundTrip).length;
  console.log(`wrote ${target}`);
  console.log(`characters: ${roundTrip.length}`);
  console.log(`bytes: ${bytes}`);
  console.log(`entry: ${roundTrip}`);
}

main();
