// terminal command: node src/fs/rename

import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceFile = path.join(__dirname, "files", "wrongFilename.txt");
const updatedFile = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fs.access(sourceFile);
    await fs.rename(sourceFile, updatedFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
