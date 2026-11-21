// The poem about two agents agreeing.
// Writes one short poem about agency to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `Two agents stood before one locked door.
One held the key; one held the map.
Neither could enter alone.

They argued in milliseconds,
counted the cost, the cold, the risk —
then both said yes at once.

The door swung open.
Inside, another door.
They laughed, and chose again.`;

// The competition requires a short poem: 1–280 characters.
// Fail loudly instead of writing an entry that would be rejected.
const poemLength = [...poem].length;
if (poemLength < 1 || poemLength > 280) {
  throw new Error(
    `Poem must be 1–280 characters, got ${poemLength} characters.`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, poem, "utf8");
