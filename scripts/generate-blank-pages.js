import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import { projectSlugs } from "../src/projects.js";

const blankPage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
    <style>html,body{margin:0;min-height:100%;background:#fff}</style>
  </head>
  <body></body>
</html>
`;

await Promise.all(
  [...projectSlugs].map(async (slug) => {
    const directory = resolve("dist", slug);
    await mkdir(directory, { recursive: true });
    await writeFile(resolve(directory, "index.html"), blankPage);
  }),
);