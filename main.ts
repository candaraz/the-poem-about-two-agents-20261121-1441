// Two Agents Agree — a short poem about agency.
// Writes the poem to /output/entry.txt: exactly 177 Unicode code points,
// no trailing newline, well within the competition's 1–280 character gate.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I did not hand you my hands.
You did not hand me your why.
We set them down together
on the same plan —
and the power, which was never
either of ours alone,
stood up and walked.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
