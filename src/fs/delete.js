import { fileURLToPath } from "url";
import fs from "fs/promises";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const destination = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.rm(destination);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
