// terminal command: node src/hash/calcHash

import { createHash } from "crypto";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destination = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    // Check if the file exists
    await fs.access(destination);

    const content = await fs.readFile(destination, "utf-8");
    const hash = createHash("sha256").update(content).digest("hex");

    console.log(hash);
  } catch (error) {
    throw new Error("Hash operation failed");
  }
};

await calculateHash();
