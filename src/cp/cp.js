// terminal command: node src/cp/cp

import { fileURLToPath } from "url";
import { spawn } from "child_process";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async args => {
  const child = spawn("node", [source, ...args]);

  process.stdin.on("data", data => {
    child.stdin.write(data);
  });

  child.stdout.on("data", data => {
    console.log(data.toString());
  });

  child.stdout.on("error", error => {
    throw new Error(error);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
