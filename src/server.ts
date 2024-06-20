// This file will be the file where the server logic will exist. Initialization of the server will be done in the app.ts file.

import app from "./app.js";
import env from "./config/env.js";

const startServer = () => {
    const PORT = env.PORT;

    try {
        app.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Error detected", err);
        process.exit(1);
    }
};

startServer();
