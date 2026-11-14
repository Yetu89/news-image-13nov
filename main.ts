// News image entry (Node 22, standard library only).
// The image is the entry.png beside this file; the program copies it to /output/entry.png.
// World news of Friday 13 November 2026: Nvidia CEO resigns, Iran radar, Ukraine talks,
// FAA ground stop lifted, Microsoft outage, China Pacific drills, Houthi pipeline attack.
// Gate: whole PNG/JPEG, at most 1 MiB, at most 1024x1024. Judge sees exactly these bytes.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
