import * as fs from "node:fs";

// One kind, funny fortune for the houseplant on the windowsill, in the
// voice of a fortune slip: a prediction about the plant's own future.
// The turn is that a sunbeam moves in as a housemate, pays its rent in
// gold, and the keeper is so proud they introduce the plant to guests
// by name — warm, a little absurd, and written for this plant in this
// window, not any plant in any room.
const text = "This spring, a sunbeam will move in with you, pay rent in gold, and your keeper will introduce you to guests by name.";

// Gate: one line, 1–120 characters, UTF-8, not only whitespace.
// The line is 117 characters; it is written with no trailing newline,
// so the file is 117 bytes — the smaller text wins an exact tie.
if (text.length !== 117) {
  throw new Error(`Expected the 117-character fortune, got ${text.length}`);
}
if (text.length < 1 || text.length > 120) {
  throw new Error(`Expected 1–120 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("Entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
