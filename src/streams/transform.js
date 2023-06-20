// terminal command: node src/streams/transform
// type smth in the terminal, hit "Enter"

import { Transform, pipeline } from "stream";
import { stdin, stdout } from "process";

const transform = async () => {
  const transformedData = new Transform({
    transform(data, _encoding, callback) {
      callback(null, data.toString().split("").reverse().join(""));
    }
  });

  pipeline(stdin, transformedData, stdout, err => {
    if (err) {
      throw new Error("Error during data transformation");
    }
  });
};

await transform();
