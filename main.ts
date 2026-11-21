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

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
