// terminal command: node src/zip/decompress

import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { createUnzip } from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const source = path.join(__dirname, "files", "archive.gz");
const destination = path.join(__dirname, "files", "fileToCompress.txt");
const pipe = promisify(pipeline);

const decompress = async () => {
  try {
    const unzip = createUnzip();
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(destination);

    await pipe(readStream, unzip, writeStream);
  } catch (error) {
    throw new Error(error);
  }
};

await decompress();
