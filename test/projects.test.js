import assert from "node:assert/strict";
import test from "node:test";

import { projects, projectSlugs } from "../src/projects.js";

test("includes all 13 Figma entries in their specified order", () => {
  assert.equal(projects.length, 13);
  assert.equal(
    projects[0].title,
    "Digital Art (animated visual media) Conceptual Collection of 100+ Thematic Pieces (2022)",
  );
  assert.equal(
    projects.at(-1).title,
    "Alternative EDM Live Instrumental Fusion Produced Album (Lyrics and Creative Direction) (6 songs)",
  );
});

test("keeps the repeated Memes entry shown in the Figma", () => {
  assert.equal(
    projects.filter(({ title }) => title.includes("on Memes")).length,
    2,
  );
});

test("uses recognizable one-word slugs", () => {
  for (const slug of projectSlugs) {
    assert.match(slug, /^[a-z]+$/);
  }
});