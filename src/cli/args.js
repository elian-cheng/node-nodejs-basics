// terminal command: node src/cli/args --propName "RS" --prop2Name "School"

import { argv } from "process";

const parseArgs = () => {
  const args = argv.slice(2);
  const argPairs = [];

  for (let i = 0; i < args.length; i += 2) {
    const argName = args[i].slice(2);
    const argValue = args[i + 1];
    argPairs.push([argName, argValue]);
  }

  argPairs.forEach(([argName, argValue]) => {
    console.log(`${argName} is ${argValue}`);
  });
};

parseArgs();
