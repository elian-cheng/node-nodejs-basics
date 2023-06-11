import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files");
const destination = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    await fs.cp(source, destination, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();