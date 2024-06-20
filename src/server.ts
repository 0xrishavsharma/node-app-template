// This file will be the file where the server logic will exist. Initialization of the server will be done in the app.ts file.

import app from "./app.js";
import env from "./config/env.js";
import logger from "./config/logger.js";

const startServer = () => {
    const PORT = env.PORT;

    try {
        app.listen(PORT, () => {
            logger.info(`Server is running on http://localhost:${PORT}`);
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            logger.error("Error detected", err.message);
            setTimeout(() => process.exit(1), 1000); // logger is async, so if we have any logs above this line, they might not be logged, that's why we need to make this async as well\
        }
    }
};

startServer();
