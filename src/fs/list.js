// terminal command: node src/fs/list

import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files");

const list = async () => {
  try {
    const files = await fs.readdir(source);
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
