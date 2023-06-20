// terminal command: node src/streams/read

import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const destination = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const readStream = fs.createReadStream(destination);
    readStream.pipe(process.stdout);
  } catch (error) {
    throw new Error("Read stream operation failed");
  }
};

await read();
