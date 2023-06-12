// terminal command: node src/streams/write
// write smth in the terminal, the output will be in the file fileToWrite.txt

import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const destination = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  try {
    const writeStream = fs.createWriteStream(destination);
    process.stdin.pipe(writeStream);
  } catch (error) {
    throw new Error("Write stream operation failed");
  }
};

await write();
