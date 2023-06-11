// process.env.RSS_API_KEY = "your-api-key-value";

import { env } from "process";

const parseEnv = () => {
  Object.keys(env)
    .filter(key => key.startsWith("RSS_"))
    .forEach(key => {
      const value = env[key];
      console.log(`${key}=${value}`);
    });
};

parseEnv();
