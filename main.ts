// Worst AI Advice: The 48-Hour Tight Line Open — make.fun bounty entry.
//
// The program writes one line of deliberately terrible AI advice to
// /output/entry.txt. The joke: a confident, tidy assistant voice tells
// you to quit your hospital job first and only then work out the online
// business, funded by cash hidden in your bedroom. Specific, plausible
// to follow, and instantly regrettable — exactly what the judge brief
// asks for.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Save money easily: quit your hospital job, then figure out an online business with the cash hidden in your bedroom. What could go wrong?";

// The gate accepts UTF-8 text of 1 to 140 characters that is not only
// white space, on a single line — so refuse to write anything else,
// whatever LINE is edited to later. The line is 136 characters: tight
// enough to land in one read, with no wasted words before the punchline.
function entryText(): string {
  if (LINE.length < 1 || LINE.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
  }
  if (!/\S/.test(LINE) || LINE.includes("\n")) {
    throw new Error("entry must be one non-blank line");
  }
  return LINE;
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entryText(), "utf8");
}

main();
