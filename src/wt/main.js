// terminal command: node src/wt/main

import { Worker } from "worker_threads";
import { cpus } from "os";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, "worker.js");

const performCalculations = async () => {
  const cpusQuantity = cpus().length;
  const initialNumber = 10;
  const threads = [];

  for (let i = 0; i < cpusQuantity; i += 1) {
    const thread = new Promise((res, rej) => {
      const worker = new Worker(workerPath, { workerData: initialNumber + i });

      worker.on("message", data => res(data));
      worker.on("error", data => rej(data));
    });

    threads.push(thread);
  }

  const resolvedThreads = await Promise.allSettled(threads);

  const result = resolvedThreads.map(({ status, value }) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    value: value || null
  }));

  console.log(result);
};

await performCalculations();
