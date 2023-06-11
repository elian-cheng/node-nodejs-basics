import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const destination = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await fs.appendFile(destination, "I am fresh and young", { flag: "ax" });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
