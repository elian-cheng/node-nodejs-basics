import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const data = await fs.readFile(source, "utf-8");
    console.log(data);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
