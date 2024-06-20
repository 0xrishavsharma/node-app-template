import "dotenv/config";
import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
    PORT: str(),
    NODE_ENV: str(),
});

export default env;
