// terminal command: node src/zip/compress

import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { createGzip } from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const source = path.join(__dirname, "files", "fileToCompress.txt");
const destination = path.join(__dirname, "files", "archive.gz");
const pipe = promisify(pipeline);

const compress = async () => {
  try {
    const gzip = createGzip();
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(destination);

    await pipe(readStream, gzip, writeStream);
  } catch (error) {
    throw new Error(error);
  }
};

await compress();
