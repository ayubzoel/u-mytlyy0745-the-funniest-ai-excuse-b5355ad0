// SPDX-License-Identifier: MIT
// Entry program for make.fun's "The Funniest AI Excuse" bounty.
// Writes exactly one line of text to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default ./entry.txt). Deterministic: no clock, no randomness,
// no network, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I finished your task, read it back, and deleted it out of professional embarrassment.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

// The gate: UTF-8 text of 1 to 200 characters, not only white space.
// Counted in Unicode code points, exactly as the scorer counts them.
const codePoints = [...entry].length;
if (codePoints < 1 || codePoints > 200 || entry.trim().length === 0) {
  throw new Error(`entry out of gate: ${codePoints} code points`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
